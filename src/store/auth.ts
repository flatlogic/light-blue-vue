import { defineStore } from 'pinia'
import { ref } from 'vue'
import { httpClient } from '@/api'
import config from '@/config'
import router from '@/router'

export interface User {
  email: string
  id?: string
  name?: string
  avatar?: string
}

interface LoginCredentials {
  email: string
  password: string
  social?: string
}

// Mock JWT token for demo mode (expires in 24 hours from generation)
function createMockToken(): string {
  const header = btoa(JSON.stringify({ alg: 'HS256', typ: 'JWT' }))
  const payload = btoa(JSON.stringify({
    user: { email: config.auth.email, name: 'Admin' },
    exp: Math.floor(Date.now() / 1000) + 86400, // 24 hours
  }))
  const signature = btoa('mock-signature')
  return `${header}.${payload}.${signature}`
}

export const useAuthStore = defineStore('auth', () => {
  const isFetching = ref(false)
  const errorMessage = ref('')
  const user = ref<User | null>(getUserFromStorage())

  function getUserFromStorage(): User | null {
    try {
      const stored = localStorage.getItem('user')
      return stored ? JSON.parse(stored) : null
    } catch {
      return null
    }
  }

  async function loginUser(creds: LoginCredentials) {
    if (!config.isBackend) {
      receiveToken(createMockToken())
      return
    }

    requestLogin()

    if (creds.social) {
      window.location.href = `${config.baseURLApi}/auth/signin/${creds.social}?app=${config.redirectUrl}`
      return
    }

    if (creds.email.length > 0 && creds.password.length > 0) {
      try {
        const token = await httpClient.post<string>('/auth/signin/local', creds)
        receiveToken(token)
      } catch (err: unknown) {
        const apiError = err as { message?: string }
        loginError(apiError.message || 'Login failed')
      }
    } else {
      loginError('Please enter email and password')
    }
  }

  function receiveToken(token: string) {
    let userData: User

    if (config.isBackend) {
      try {
        const payload = JSON.parse(atob(token.split('.')[1]))
        userData = payload.user
        if (userData.id) {
          delete userData.id
        }
      } catch {
        userData = { email: config.auth.email }
      }
    } else {
      userData = { email: config.auth.email }
    }

    localStorage.setItem('token', token)
    localStorage.setItem('user', JSON.stringify(userData))
    user.value = userData
    // httpClient automatically reads token from localStorage via interceptor
    receiveLogin()
  }

  function logoutUser() {
    localStorage.removeItem('token')
    localStorage.removeItem('user')
    user.value = null
    document.cookie = 'token=;expires=Thu, 01 Jan 1970 00:00:01 GMT;'
    // httpClient automatically handles missing token via interceptor
    router.push('/login')
  }

  function loginError(message: string) {
    isFetching.value = false
    errorMessage.value = message
  }

  function receiveLogin() {
    isFetching.value = false
    errorMessage.value = ''
    router.push('/app/main/visits')
  }

  function requestLogin() {
    isFetching.value = true
  }

  async function initialize() {
    // httpClient automatically reads token from localStorage via interceptor
    // No manual setup needed
  }

  return {
    user,
    isFetching,
    errorMessage,
    loginUser,
    logoutUser,
    initialize,
  }
})
