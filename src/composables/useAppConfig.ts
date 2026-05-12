import config, { colors, themeColors, type ThemeColor } from '@/config'

/**
 * Composable for accessing app configuration
 * Replaces the old appConfig mixin
 */
export function useAppConfig() {
  return {
    colors,
    themeColors,
    hostApi: config.hostApi,
    portApi: config.portApi,
    baseURLApi: config.baseURLApi,
    redirectUrl: config.redirectUrl,
    remote: config.remote,
    isBackend: config.isBackend,
    auth: config.auth,
    googleMapsApiKey: config.googleMapsApiKey,
  }
}

// Export types for convenience
export type { ThemeColor }
export { colors, themeColors }
