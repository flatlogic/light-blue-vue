const baseURLApi = (import.meta.env.VITE_API_URL || (import.meta.env.DEV ? 'http://localhost:8080/api' : '/api')).replace(/\/$/, '')
const apiLocation = new URL(baseURLApi, window.location.origin)
const hostApi = apiLocation.origin
const portApi = apiLocation.port
const redirectUrl = new URL(import.meta.env.BASE_URL, window.location.origin).href

export const colors = {
  blue: '#3979f6',
  green: '#47822B',
  orange: '#da9734',
  red: '#c93c3c',
  purple: '#a700ae',
  dark: '#040620',
  teal: '#4179CF',
  pink: '#e671b8',
  gray: '#d6dee5',
  default: '#474D84',
  textColor: '#b4b5bf',
  gridLineColor: '#040620',
  white: '#fff',
} as const

export const themeColors = [
  ['dark', '#333964'],
  ['light', '#0A0417'],
  ['sea', '#4A4657'],
  ['sky', '#3A3847'],
  ['rain', '#3846AA'],
  ['middle', '#3390C3'],
] as const

export type ThemeColor = typeof themeColors[number][0]

export default {
  colors,
  themeColors,
  hostApi,
  portApi,
  baseURLApi,
  redirectUrl,
  remote: "https://sing-generator-node.herokuapp.com",
  isBackend: import.meta.env.VITE_BACKEND === 'true',
  auth: {
    email: 'admin@flatlogic.com',
    password: 'password'
  },
  googleMapsApiKey: import.meta.env.VITE_GOOGLE_MAPS_API_KEY || 'AIzaSyB7OXmzfQYua_1LEhRdqsoYzyJOPh9hGLg',
}
