import { defineStore } from 'pinia'
import { ref } from 'vue'
import { httpClient } from '@/api'
import { useToast } from '@/composables/useToast'
import config from '@/config'
import router from '@/router'

interface RegisterCredentials {
  email: string
  password: string
}

export const useRegisterStore = defineStore('register', () => {
  const isFetching = ref(false)
  const errorMessage = ref('')
  const toast = useToast()

  async function registerUser(creds: RegisterCredentials) {
    if (!config.isBackend) {
      toast.success("You've been registered successfully")
      router.push('/login')
      return
    }

    requestRegister()

    if (creds.email.length > 0 && creds.password.length > 0) {
      try {
        await httpClient.post('/auth/signup', creds)
        receiveRegister()
        toast.success("You've been registered successfully")
        router.push('/login')
      } catch (err: unknown) {
        const apiError = err as { message?: string }
        registerError(apiError.message || 'Registration failed')
      }
    } else {
      registerError('Please enter email and password')
    }
  }

  function requestRegister() {
    isFetching.value = true
  }

  function receiveRegister() {
    isFetching.value = false
    errorMessage.value = ''
  }

  function registerError(message: string) {
    isFetching.value = false
    errorMessage.value = message
  }

  return {
    isFetching,
    errorMessage,
    registerUser,
  }
})
