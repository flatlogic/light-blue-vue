<script setup lang="ts">
import { computed } from 'vue'
import type { ApexOptions, ApexAxisChartSeries } from 'apexcharts'

interface Props {
  type?: string
  data?: ApexAxisChartSeries
  height?: number | string
  width?: number | string
  options?: ApexOptions
}

const props = withDefaults(defineProps<Props>(), {
  type: 'bar',
  data: () => [],
  height: 20,
  width: 50,
  options: () => ({}),
})

const sparkOptions = computed<ApexOptions>(() => ({
  chart: {
    height: props.height,
    width: props.width,
    sparkline: {
      enabled: true,
    },
  },
  plotOptions: {
    bar: {
      columnWidth: '20%',
    },
  },
  xaxis: {
    crosshairs: {
      width: 1,
    },
  },
  tooltip: {
    theme: 'dark',
    fixed: {
      enabled: false,
    },
    x: {
      show: false,
    },
    y: {
      title: {
        formatter: () => '',
      },
    },
    marker: {
      show: false,
    },
  },
  ...props.options,
}))
</script>

<template>
  <apexchart
    class="sparkline-chart"
    style="display: inline-block"
    :type="type"
    :height="height"
    :width="width"
    :options="sparkOptions"
    :series="data"
  />
</template>
<style src="./Sparklines.scss" lang="scss"></style>