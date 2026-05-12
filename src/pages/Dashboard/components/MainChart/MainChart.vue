<template>
  <Widget
    id="main-chart"
    body-class="mt"
    class="mb-xlg"
    title="
        <div class='row'>
          <div class='col-sm-5 col-xs-12'>
            <h5>
              Daily <span class='fw-semi-bold'>Line Chart</span>
            </h5>
          </div>
          <div class='col-xs-12 col-sm-7'>
            <div class='chart-legend' />
          </div>
        </div>
      "
    custom-header
    collapse
    close
    :fetching-data="isReceiving"
  >
    <highcharts :options="chartData" />
  </Widget>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import Widget from '@/components/Widget/Widget.vue'
import { Chart as Highcharts } from 'highcharts-vue'
import HighchartsLib from 'highcharts'
import { useAppConfig } from '@/composables/useAppConfig'

// Props
interface Props {
  data?: number[][][]
  isReceiving?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  data: () => [],
  isReceiving: false,
})

const appConfig = useAppConfig()

const chartOptions = computed(() => ({
  credits: {
    enabled: false,
  },
  chart: {
    height: 350,
    backgroundColor: 'transparent',
  },
  title: { text: '' },
  exporting: {
    enabled: false,
  },
  accessibility: {
    enabled: false,
  },
  legend: {
    verticalAlign: 'top' as const,
    itemStyle: {
      color: appConfig.colors.textColor,
    },
  },
  yAxis: {
    gridLineColor: '#040620',
    title: { text: '' },
    labels: {
      style: {
        color: appConfig.colors.textColor,
      },
    },
  },
  xAxis: {
    type: 'datetime' as const,
    labels: {
      overflow: 'justify' as const,
      style: {
        color: appConfig.colors.textColor,
      },
    },
  },
  plotOptions: {
    series: {
      marker: {
        enabled: false,
        symbol: 'circle',
      },
      pointInterval: 3600000 * 25, // every day
      pointStart: Date.UTC(2018, 12, 19, 0, 0, 0),
      tooltip: {
        pointFormatter() {
          const point = this as unknown as { color?: string; series: { name: string }; y: number }
          return `<span style="color: ${point.color || '#000'}">${point.series.name} at ${point.y?.toFixed(2) || 0}</span>`
        },
      },
    },
  },
}))

const chartData = computed(() => {
  const data = props.data.map((arr) => arr.map((item) => item[1]))

  return {
    ...chartOptions.value,
    series: [
      {
        name: 'Light Blue',
        data: data[0] || [],
        color: appConfig.colors.red,
        type: 'areaspline' as const,
        fillColor: {
          linearGradient: { x1: 0, y1: 0, x2: 0, y2: 1 },
          stops: [
            [0, appConfig.colors.red] as [number, string],
            [1, HighchartsLib.color(appConfig.colors.red).setOpacity(0).get('rgba') as string] as [number, string],
          ],
        },
      },
      {
        type: 'spline' as const,
        name: 'RNS App',
        data: data[1] || [],
        color: appConfig.colors.green,
        dashStyle: 'Dash' as const,
      },
      {
        type: 'spline' as const,
        name: 'Sing App',
        data: data[2] || [],
        color: appConfig.colors.blue,
      },
    ],
  }
})
</script>
