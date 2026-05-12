import { ref, onMounted, onUnmounted, type Ref } from 'vue'

export function useMediaQuery(query: string): Ref<boolean> {
  const matches = ref(false)
  let mediaQuery: MediaQueryList | null = null

  function update() {
    if (mediaQuery) {
      matches.value = mediaQuery.matches
    }
  }

  onMounted(() => {
    mediaQuery = window.matchMedia(query)
    matches.value = mediaQuery.matches
    mediaQuery.addEventListener('change', update)
  })

  onUnmounted(() => {
    if (mediaQuery) {
      mediaQuery.removeEventListener('change', update)
    }
  })

  return matches
}

// Common breakpoint helpers
export function useIsMobile() {
  return useMediaQuery('(max-width: 767px)')
}

export function useIsTablet() {
  return useMediaQuery('(min-width: 768px) and (max-width: 1023px)')
}

export function useIsDesktop() {
  return useMediaQuery('(min-width: 1024px)')
}
