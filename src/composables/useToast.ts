import { useToast as useVueToast } from 'vue-toast-notification'

// Toast utility for use in stores and composables
export function useToast() {
  const $toast = useVueToast()

  return {
    success: (message: string) => $toast.success(message),
    error: (message: string) => $toast.error(message),
    warning: (message: string) => $toast.warning(message),
    info: (message: string) => $toast.info(message),
    default: (message: string) => $toast.default(message),
    clear: () => $toast.clear(),
  }
}
