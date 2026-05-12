import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { createBootstrap } from 'bootstrap-vue-next'
import VueApexCharts from 'vue3-apexcharts'
import ToastPlugin from 'vue-toast-notification'
import VCalendar from 'v-calendar'
import VueGoogleMaps from '@fawmi/vue-google-maps'

import App from './App.vue'
import router from './router'
import { vSafeHtml } from './directives/safeHtml'
import Trend from './components/Trend/Trend.vue'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue-next/dist/bootstrap-vue-next.css'
import 'vue-toast-notification/dist/theme-bootstrap.css'
import 'v-calendar/dist/style.css'
import '@fortawesome/fontawesome-free/css/all.css'
import 'line-awesome/dist/line-awesome/css/line-awesome.css'
import 'animate.css'
import './styles/theme.scss'

// HTTP client is configured in @/api/httpClient with interceptors for auth

const app = createApp(App)

app.config.errorHandler = (err, instance, info) => {
  console.error('Vue Error:', err, info)
}

window.addEventListener('unhandledrejection', (event) => {
  console.error('Unhandled rejection:', event.reason)
})

const pinia = createPinia()
app.use(pinia)
app.use(router)
app.use(createBootstrap())
app.use(VueApexCharts)
app.use(ToastPlugin, {
  position: 'top-right',
  duration: 5000,
  dismissible: true,
})
app.use(VCalendar, {})
app.use(VueGoogleMaps, {
  load: {
    key: import.meta.env.VITE_GOOGLE_MAPS_API_KEY || '',
    version: 'weekly',
  },
})

app.component('Apexchart', VueApexCharts)
app.component('Trend', Trend)
app.directive('safe-html', vSafeHtml)

router.isReady().then(() => {
  app.mount('#app')
})
