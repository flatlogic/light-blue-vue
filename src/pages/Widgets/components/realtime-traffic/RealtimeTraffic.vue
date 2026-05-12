<template>
  <div>
    <h4 class="mb-lg">
      Recent <span class="fw-semi-bold">Update</span>
    </h4>
    <h6>Node.js <span class="fw-semi-bold">4.0.1 distribution</span></h6>
    <b-progress
      class="progress-xs"
      variant="danger"
      :value="77"
      :max="100"
    />
    <p class="mt-sm mb fs-mini ">
      <small><span class="circle bg-primary"><i
        class="glyphicon glyphicon-chevron-up"
      /></span></small>
      <strong class="px-1">17% higher</strong>
      than last month
    </p>
    <p class="fs-sm text-gray-lighter mb-0">
      Remaining hours
    </p>
    <a
      class="btn btn-xs btn-gray pull-right ms-1"
      href="#"
    >
      <i class="fa fa-compress" /> track
    </a>
    <a
      class="btn btn-xs btn-gray pull-right"
      href="#"
    >
      <i class="fa fa-pause" /> pause
    </a>
    <p class="value4">
      2h 56m
    </p>
    <br />
    <div class="mt-xlg chart-overflow-bottom">
      <apexchart
        v-if="isMounted"
        ref="chartRef"
        type="area"
        height="130"
        :options="chartOptions"
        :series="series"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from 'vue'

// Generate initial random data
function generateData(count: number): number[] {
  return Array.from({ length: count }, () => Math.floor(Math.random() * 100) + 20)
}

const series = ref([
  {
    name: 'Uploads',
    data: generateData(30)
  },
  {
    name: 'Downloads',
    data: generateData(30)
  }
])

const chartOptions = ref({
  chart: {
    type: 'area',
    height: 130,
    toolbar: { show: false },
    animations: {
      enabled: true,
      easing: 'linear',
      dynamicAnimation: {
        speed: 1000
      }
    },
    background: 'transparent'
  },
  colors: ['#1870DC', '#58D777'],
  stroke: {
    curve: 'smooth',
    width: 2
  },
  fill: {
    type: 'gradient',
    gradient: {
      shadeIntensity: 1,
      opacityFrom: 0.4,
      opacityTo: 0.1,
      stops: [0, 90, 100]
    }
  },
  dataLabels: {
    enabled: false
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
    x: { show: false }
  }
})

const chartRef = ref<{ chart?: { update: () => void } } | null>(null)
const isMounted = ref(false)
let updateInterval: ReturnType<typeof setInterval> | null = null

onMounted(() => {
  isMounted.value = true
  // Update chart data every second
  updateInterval = setInterval(() => {
    const newUploads = [...series.value[0].data.slice(1), Math.floor(Math.random() * 100) + 20]
    const newDownloads = [...series.value[1].data.slice(1), Math.floor(Math.random() * 100) + 20]

    series.value = [
      { name: 'Uploads', data: newUploads },
      { name: 'Downloads', data: newDownloads }
    ]
  }, 1000)
})

onBeforeUnmount(() => {
  isMounted.value = false
  if (updateInterval) {
    clearInterval(updateInterval)
  }
})
</script>
