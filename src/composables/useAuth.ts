import { computed } from 'vue'
import { useAuthStore } from '@/store/auth'

/**
 * Check if a token is valid (basic validation)
 */
export function isAuthenticated(token: string | null): boolean {
  if (!token) return false

  // Basic JWT structure validation (header.payload.signature)
  const parts = token.split('.')
  if (parts.length !== 3) return false

  try {
    // Try to decode the payload to check expiration
    const payload = JSON.parse(atob(parts[1]))

    // Check if token is expired (if exp claim exists)
    if (payload.exp) {
      const expirationDate = new Date(payload.exp * 1000)
      if (expirationDate < new Date()) {
        return false
      }
    }

    return true
  } catch {
    // If we can't decode it, for demo purposes we still consider it valid
    // In production, you'd want stricter validation
    return token.length > 0
  }
}

/**
 * Composable for authentication state and actions
 */
export function useAuth() {
  const authStore = useAuthStore()

  const isLoggedIn = computed(() => {
    const token = localStorage.getItem('token')
    return isAuthenticated(token)
  })

  const user = computed(() => {
    const userStr = localStorage.getItem('user')
    if (!userStr) return null
    try {
      return JSON.parse(userStr)
    } catch {
      return null
    }
  })

  const token = computed(() => localStorage.getItem('token'))

  return {
    isLoggedIn,
    user,
    token,
    login: authStore.loginUser,
    logout: authStore.logoutUser,
    isLoading: computed(() => authStore.isFetching),
    error: computed(() => authStore.errorMessage),
  }
}
