const hostApi = import.meta.env.DEV ? "http://localhost" : "https://sing-generator-node.herokuapp.com"
const portApi = import.meta.env.DEV ? 8080 : ""
const baseURLApi = `${hostApi}${portApi ? `:${portApi}` : ``}/api`
const redirectUrl = import.meta.env.DEV ? "http://localhost:3000/light-blue-vue" : "https://demo.flatlogic.com/light-blue-vue/"

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
