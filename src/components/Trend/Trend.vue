<script setup lang="ts">
import { computed, ref, onMounted, onBeforeUnmount } from 'vue'
import VueApexCharts from 'vue3-apexcharts'

interface Props {
  data: number[]
  gradient?: string[]
  height?: number
  smooth?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  gradient: () => ['#4285f4'],
  height: 30,
  smooth: true,
})

const isMounted = ref(false)

onMounted(() => {
  isMounted.value = true
})

onBeforeUnmount(() => {
  isMounted.value = false
})

const chartOptions = computed(() => ({
  chart: {
    type: 'line' as const,
    sparkline: {
      enabled: true,
    },
    animations: {
      enabled: false,
    },
  },
  stroke: {
    curve: props.smooth ? ('smooth' as const) : ('straight' as const),
    width: 2,
  },
  fill: {
    type: 'solid',
    opacity: 0,
  },
  colors: props.gradient,
  tooltip: {
    enabled: false,
  },
  markers: {
    size: 0,
  },
  grid: {
    show: false,
    padding: {
      left: 0,
      right: 0,
      top: 5,
      bottom: 5,
    },
  },
}))

const series = computed(() => [
  {
    name: 'trend',
    data: props.data,
  },
])
</script>

<template>
  <VueApexCharts
    v-if="isMounted"
    type="area"
    :height="height"
    :options="chartOptions"
    :series="series"
  />
</template>
