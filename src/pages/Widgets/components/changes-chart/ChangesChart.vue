<template>
  <div class="changes-chart">
    <div class="chart bg-success btlr btrr">
      <p class="chartValue">
        <i class="fa fa-caret-up" /> 352.79
      </p>
      <p class="chartValueChange">
        +2.04 (1.69%)
      </p>
      <apexchart
        v-if="isMounted"
        type="line"
        height="100"
        :options="chartOptions"
        :series="series"
      />
    </div>
    <h4 class="chartTitle">
      <span class="fw-normal">Salt Lake City</span>, Utah
    </h4>
    <p class="deemphasize">
      Today 13:34
    </p>
    <div class="mt">
      <BRow>
        <BCol xs="6">
          <p class="h4 m-0">
            18.7M
          </p>
          <p class="deemphasize">
            Shares Traded
          </p>
        </BCol>
        <BCol
          xs="6"
          class="text-end"
        >
          <p class="h4 m-0">
            19.9B
          </p>
          <p class="deemphasize">
            Market Cap
          </p>
        </BCol>
      </BRow>
    </div>
    <div class="mt">
      <BRow>
        <BCol xs="6">
          <p class="h3 m-0 text-success fw-semi-bold">
            +120.93
          </p>
          <p class="deemphasize">
            Yearly Change
          </p>
        </BCol>
        <BCol
          xs="6"
          class="text-end"
        >
          <Sparklines
            :data="sparklineData"
            :options="sparklineOptions"
            :width="80"
            :height="25"
          />
          <p class="deemphasize">
            GOOG
          </p>
        </BCol>
      </BRow>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, onBeforeUnmount } from 'vue'
import Sparklines from '@/components/Sparklines/Sparklines.vue'
import config from '../../../../config'

const colors = config.colors
const isMounted = ref(false)

onMounted(() => {
  isMounted.value = true
})

onBeforeUnmount(() => {
  isMounted.value = false
})

// Generate random data for the chart
function generateData(count: number, min: number, max: number): number[] {
  return Array.from({ length: count }, () =>
    Math.floor(Math.random() * (max - min + 1)) + min
  )
}

const barData = generateData(32, 20, 80)
const lineData = generateData(32, 30, 70)

const series = ref([
  {
    name: 'Volume',
    type: 'bar',
    data: barData
  },
  {
    name: 'Price',
    type: 'line',
    data: lineData
  }
])

const chartOptions = computed(() => ({
  chart: {
    type: 'line',
    height: 100,
    toolbar: { show: false },
    sparkline: { enabled: false },
    background: 'transparent',
    animations: { enabled: true }
  },
  stroke: {
    width: [0, 3],
    curve: 'smooth'
  },
  plotOptions: {
    bar: {
      columnWidth: '50%',
      borderRadius: 0
    }
  },
  colors: [colors.default, '#ffffff'],
  fill: {
    opacity: [1, 1]
  },
  xaxis: {
    labels: { show: false },
    axisBorder: { show: false },
    axisTicks: { show: false }
  },
  yaxis: {
    labels: { show: false }
  },
  grid: {
    show: false,
    padding: { left: 0, right: 0, top: 0, bottom: 0 }
  },
  legend: { show: false },
  tooltip: {
    enabled: true,
    theme: 'dark',
    shared: true,
    intersect: false
  }
}))

const sparklineData = ref([{ data: [3, 6, 2, 4, 5, 8, 6, 8] }])
const sparklineOptions = ref({
  colors: [colors.teal],
  plotOptions: {
    bar: {
      columnWidth: '50%'
    }
  }
})
</script>

<style src="./ChangesChart.scss" lang="scss" scoped />
