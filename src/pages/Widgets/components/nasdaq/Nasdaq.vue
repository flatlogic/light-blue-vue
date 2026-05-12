<template>
  <Sparklines
    :data="data"
    type="line"
    :width="width"
    :height="height"
    :options="options"
  />
</template>

<script setup lang="ts">
import Sparklines from '@/components/Sparklines/Sparklines.vue'

const data = [{
  data: [4, 6, 5, 7, 5],
}]

const width = '100%'
const height = 70

import type { ApexOptions } from 'apexcharts'

const options: ApexOptions = {
  stroke: {
    width: 1
  },
  markers: {
    size: 4,
    colors: ['#58D777'],
    shape: 'circle' as const,
    strokeWidth: 0,
    hover: {
      size: 5,
    }
  },
  colors: [
    '#58D777'
  ],
  grid: {
    padding: {
      left: 10,
      right: 10,
      top: 10,
      bottom: 10
    }
  }
}
</script>
