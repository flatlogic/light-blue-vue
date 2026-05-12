import { defineStore } from 'pinia'
import { ref, reactive } from 'vue'
import { httpClient } from '@/api'
import config from '@/config'
import mock from '@/pages/Dashboard/mock'

interface VisitsData {
  [key: string]: string | number | boolean | null | undefined
}

interface PerformanceData {
  sdk: Record<string, string | number>
  integration: Record<string, string | number>
}

interface ServerData {
  1: Record<string, string | number>
  2: Record<string, string | number>
}

interface RevenueItem {
  label: string
  data: number
}

type ChartDataItem = number[][]

interface DashboardPayload {
  visits?: VisitsData
  performance?: PerformanceData
  server?: ServerData
  revenue?: RevenueItem[]
  mainChart?: ChartDataItem[]
}

export const useDashboardStore = defineStore('dashboard', () => {
  const visits = ref<VisitsData>({})
  const performance = reactive<PerformanceData>({ sdk: {}, integration: {} })
  const server = reactive<ServerData>({ 1: {}, 2: {} })
  const revenue = ref<RevenueItem[]>([])
  const mainChart = ref<ChartDataItem[]>([])
  const isReceiving = ref(false)

  async function receiveDataRequest() {
    isReceiving.value = true

    if (!config.isBackend) {
      try {
        const data = await Promise.resolve(mock.backendData) as unknown as DashboardPayload
        receiveDataSuccess(data)
      } catch (error) {
        console.error('Failed to load mock data:', error)
        isReceiving.value = false
      }
    } else {
      try {
        const data = await httpClient.get<DashboardPayload>('/analytics')
        receiveDataSuccess(data)
      } catch (error) {
        console.error('Failed to load analytics:', error)
        isReceiving.value = false
      }
    }
  }

  function receiveDataSuccess(payload: DashboardPayload) {
    visits.value = payload.visits || {}
    Object.assign(performance, payload.performance || { sdk: {}, integration: {} })
    Object.assign(server, payload.server || { 1: {}, 2: {} })
    revenue.value = payload.revenue || []
    mainChart.value = payload.mainChart || []
    isReceiving.value = false
  }

  function $reset() {
    visits.value = {}
    Object.assign(performance, { sdk: {}, integration: {} })
    Object.assign(server, { 1: {}, 2: {} })
    revenue.value = []
    mainChart.value = []
    isReceiving.value = false
  }

  return {
    visits,
    performance,
    server,
    revenue,
    mainChart,
    isReceiving,
    receiveDataRequest,
    $reset,
  }
})
