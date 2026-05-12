import { defineStore } from 'pinia'
import { ref, computed } from 'vue'
import chroma from 'chroma-js'
import { themeColors, type ThemeColor } from '@/config'

export const NavbarTypes = {
  STATIC: 'static',
  FLOATING: 'floating',
} as const

export const NavbarColorSchemes = {
  LIGHT: 'light',
  DARK: 'dark',
} as const

export const SidebarTypes = {
  SOLID: 'solid',
  TRANSPARENT: 'transparent',
} as const

export const LayoutComponents = {
  NAVBAR: 'navbar',
  SIDEBAR: 'sidebar',
} as const

export type NavbarType = typeof NavbarTypes[keyof typeof NavbarTypes]
export type NavbarColorScheme = typeof NavbarColorSchemes[keyof typeof NavbarColorSchemes]
export type SidebarType = typeof SidebarTypes[keyof typeof SidebarTypes]
export type LayoutComponent = typeof LayoutComponents[keyof typeof LayoutComponents]

function updateRootCss(cssVar: string, value: string) {
  document.querySelector('body')?.setAttribute('class', `light-blue ${cssVar + value}`)
}

export const useLayoutStore = defineStore('layout', () => {
  const sidebarStatic = ref(false)
  const sidebarPosition = ref<'left' | 'right'>('left')
  const sidebarVisible = ref(true)
  const navbarColorScheme = ref<NavbarColorScheme>(NavbarColorSchemes.LIGHT)
  const navbarType = ref<NavbarType>(NavbarTypes.STATIC)
  const sidebarType = ref<SidebarType>(SidebarTypes.SOLID)
  const sidebarActiveElement = ref<number | null>(null)
  const helperOpened = ref(false)
  const sidebarColorName = ref<ThemeColor>(themeColors[0][0])
  const navbarColorName = ref<ThemeColor>(themeColors[1][0])

  const isDarkNavbar = computed(() => navbarColorScheme.value === NavbarColorSchemes.DARK)

  function changeSidebarActive(index: number | null) {
    sidebarActiveElement.value = index
  }

  function toggleHelper(opened: boolean) {
    helperOpened.value = opened
  }

  function updateNavbarColor(color: readonly [string, string]) {
    const [colorName, colorValue] = color
    localStorage.setItem('theme', colorName)
    navbarColorName.value = colorName as ThemeColor
    updateRootCss('theme--', colorName)
    navbarColorScheme.value = chroma(colorValue).luminance() < 0.4
      ? NavbarColorSchemes.DARK
      : NavbarColorSchemes.LIGHT
  }

  function updateLayoutComponentColor(payload: { component: LayoutComponent; color: readonly [string, string] }) {
    if (payload.component === LayoutComponents.NAVBAR) {
      updateNavbarColor(payload.color)
    }
  }

  function toggleSidebar() {
    sidebarStatic.value = !sidebarStatic.value
  }

  function setSidebarPosition(position: 'left' | 'right') {
    sidebarPosition.value = position
  }

  function setSidebarVisible(visible: boolean) {
    sidebarVisible.value = visible
  }

  function initializeTheme() {
    const savedTheme = localStorage.getItem('theme')
    if (savedTheme) {
      const themeColor = themeColors.find(([name]) => name === savedTheme)
      if (themeColor) {
        updateNavbarColor(themeColor)
      }
    } else {
      // Default to 'dark' theme (matching original behavior)
      updateRootCss('theme--', 'dark')
    }
  }

  return {
    sidebarStatic,
    sidebarPosition,
    sidebarVisible,
    navbarColorScheme,
    navbarType,
    sidebarType,
    sidebarActiveElement,
    helperOpened,
    sidebarColorName,
    navbarColorName,
    isDarkNavbar,
    changeSidebarActive,
    toggleHelper,
    updateNavbarColor,
    updateLayoutComponentColor,
    toggleSidebar,
    setSidebarPosition,
    setSidebarVisible,
    initializeTheme,
  }
})
