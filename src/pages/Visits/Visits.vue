<template>
  <div class="visits-page">
    <h1 class="page-title">
      Dashboard &nbsp;
      <small>
        <small>The Lucky One</small>
      </small>
    </h1>
    <BRow>
      <BCol lg="8">
        <Widget class="bg-transparent">
          <Map />
        </Widget>
      </BCol>
      <BCol lg="4">
        <Widget
          class="bg-transparent"
          title="<h5>Map<span class='fw-semi-bold'>&nbsp;Statistics</span></h5>"
          settings
          refresh
          close
          custom-header
        >
          <p>Status: <strong>Live</strong></p>
          <p>
            <span class="circle bg-default text-white"><i class="la la-map-marker" /></span> &nbsp;
            146 Countries, 2759 Cities
          </p>
          <div class="row progress-stats">
            <div class="col-9">
              <h6 class="name">
                Foreign Visits
              </h6>
              <p class="description deemphasize mb-xs">
                Some Cool Text
              </p>
              <BProgress
                variant="primary"
                :value="60"
                :max="100"
                class="progress-xs"
              />
            </div>
            <div class="col-3 text-center">
              <span class="status-badge bg-default">
                <span><CountUp
                  :end-val="75"
                  :duration="2"
                />%</span>
              </span>
            </div>
          </div>
          <div class="row progress-stats">
            <div class="col-9">
              <h6 class="name">
                Local Visits
              </h6>
              <p class="description deemphasize mb-xs">
                P. to C. Conversion
              </p>
              <BProgress
                variant="danger"
                :value="39"
                :max="100"
                class="progress-xs"
              />
            </div>
            <div class="col-3 text-center">
              <span class="status-badge bg-default">
                <span><CountUp
                  :end-val="84"
                  :duration="2"
                />%</span>
              </span>
            </div>
          </div>
          <div class="row progress-stats">
            <div class="col-9">
              <h6 class="name">
                Sound Frequencies
              </h6>
              <p class="description deemphasize mb-xs">
                Average Bitrate
              </p>
              <BProgress
                variant="success"
                :value="80"
                :max="100"
                class="progress-xs"
              />
            </div>
            <div class="col-3 text-center">
              <span class="status-badge bg-default">
                <span><CountUp
                  :end-val="92"
                  :duration="2"
                />%</span>
              </span>
            </div>
          </div>
          <h6 class="fw-semi-bold mt">
            Map Distributions
          </h6>
          <p>Tracking: <strong>Active</strong></p>
          <p>
            <span class="circle bg-default text-white"><i class="la la-cog" /></span>
            &nbsp; 391 elements installed, 84 sets
          </p>
          <BInputGroup class="mt">
            <BFormInput placeholder="Search Map" />
            <BButton :variant="('default' as any)">
              <i class="la la-search" />
            </BButton>
          </BInputGroup>
        </Widget>
      </BCol>
    </BRow>
    <BRow>
      <BCol
        xl="4"
        lg="6"
        xs="12"
      >
        <Widget
          title="<h6> USERBASE GROWTH </h6>"
          close
          settings
          custom-header
        >
          <div class="stats-row">
            <div class="stat-item">
              <h6 class="name">
                Overall Growth
              </h6>
              <p class="value">
                76.38%
              </p>
            </div>
            <div class="stat-item">
              <h6 class="name">
                Montly
              </h6>
              <p class="value">
                10.38%
              </p>
            </div>
            <div class="stat-item">
              <h6 class="name">
                24h
              </h6>
              <p class="value">
                3.38%
              </p>
            </div>
          </div>
          <BProgress
            variant="success"
            :value="60"
            :max="100"
            class="progress-xs"
          />
          <p>
            <small>
              <span class="circle bg-default text-white me-2">
                <i class="fa-solid fa-chevron-up" />
              </span>
            </small>
            <span class="fw-semi-bold">&nbsp;17% higher</span>
            &nbsp;than last month
          </p>
        </Widget>
      </BCol>
      <BCol
        xl="4"
        lg="6"
        xs="12"
      >
        <Widget
          title="<h6> TRAFFIC VALUES </h6>"
          close
          settings
          custom-header
        >
          <div class="stats-row">
            <div class="stat-item">
              <h6 class="name">
                Overall Values
              </h6>
              <p class="value">
                17 567 318
              </p>
            </div>
            <div class="stat-item">
              <h6 class="name">
                Montly
              </h6>
              <p class="value">
                55 120
              </p>
            </div>
            <div class="stat-item">
              <h6 class="name">
                24h
              </h6>
              <p class="value">
                9 695
              </p>
            </div>
          </div>
          <BProgress
            variant="danger"
            :value="60"
            :max="100"
            class="progress-xs"
          />
          <p>
            <small>
              <span class="circle bg-default text-white me-2">
                <i class="fa-solid fa-chevron-down" />
              </span>
            </small>
            <span class="fw-semi-bold">&nbsp;8% lower</span>
            &nbsp;than last month
          </p>
        </Widget>
      </BCol>
      <BCol
        xl="4"
        lg="6"
        xs="12"
      >
        <Widget
          title="<h6> RANDOM VALUES </h6>"
          close
          settings
          custom-header
        >
          <div class="stats-row">
            <div class="stat-item">
              <h6 class="name fs-sm">
                Overcome T.
              </h6>
              <p class="value">
                104.85%
              </p>
            </div>
            <div class="stat-item">
              <h6 class="name fs-sm">
                Takeoff Angle
              </h6>
              <p class="value">
                14.29&deg;
              </p>
            </div>
            <div class="stat-item">
              <h6 class="name fs-sm">
                World Pop.
              </h6>
              <p class="value">
                7,211M
              </p>
            </div>
          </div>
          <BProgress
            variant="primary"
            :value="60"
            :max="100"
            class="progress-xs"
          />
          <p>
            <small>
              <span class="circle bg-default text-white me-2">
                <i class="fa-solid fa-plus" />
              </span>
            </small>
            <span class="fw-semi-bold">&nbsp;8 734 higher</span>
            &nbsp;than last month
          </p>
        </Widget>
      </BCol>
    </BRow>
    <BRow>
      <BCol
        lg="4"
        xs="12"
      >
        <Widget
          title="<h6><span class='badge bg-danger me-2'>New</span> Messages</h6>"
          refresh
          close
          custom-header
        >
          <div class="widget-body p-0">
            <div class="list-group list-group-lg">
              <a
                class="list-group-item"
                href="javascript:void(0)"
              >
                <span class="thumb-sm float-start me-2">
                  <img
                    class="rounded-circle"
                    src="../../assets/people/a2.jpg"
                    alt="woman"
                  />
                  <i class="status status-bottom bg-success" />
                </span>
                <div>
                  <h6 class="m-0">Chris Gray</h6>
                  <p class="help-block text-ellipsis m-0">
                    Hey! What&apos;s up? So many times since we
                  </p>
                </div>
              </a>
              <a
                class="list-group-item"
                href="javascript:void(0)"
              >
                <span class="thumb-sm float-start me-2">
                  <img
                    class="rounded-circle"
                    src="../../assets/people/a4.jpg"
                    alt="woman"
                  />
                  <i class="status status-bottom bg-success" />
                </span>
                <div>
                  <h6 class="m-0">Jamey Brownlow</h6>
                  <p class="help-block text-ellipsis m-0">
                    Good news coming tonight. Seems they agreed to proceed
                  </p>
                </div>
              </a>
              <a
                class="list-group-item"
                href="javascript:void(0)"
              >
                <span class="thumb-sm float-start me-2">
                  <img
                    class="rounded-circle"
                    src="../../assets/people/a1.jpg"
                    alt="woman"
                  />
                  <i class="status status-bottom bg-primary" />
                </span>
                <div>
                  <h6 class="m-0">Livia Walsh</h6>
                  <p class="help-block text-ellipsis m-0">Check my latest email plz!</p>
                </div>
              </a>
              <a
                class="list-group-item"
                href="javascript:void(0)"
              >
                <span class="thumb-sm float-start me-2">
                  <img
                    class="rounded-circle"
                    src="../../assets/people/a5.jpg"
                    alt="man"
                  />
                  <i class="status status-bottom bg-danger" />
                </span>
                <div>
                  <h6 class="m-0">Jaron Fitzroy</h6>
                  <p class="help-block text-ellipsis m-0">What about summer break?</p>
                </div>
              </a>
            </div>
          </div>
          <footer class="bg-widget mt">
            <input
              type="search"
              class="form-control form-control-sm"
              placeholder="Search"
            />
          </footer>
        </Widget>
      </BCol>
      <BCol
        lg="4"
        xs="12"
      >
        <Widget
          title="<h6> Market <span class='fw-semi-bold'>Stats</span></h6>"
          close
          custom-header
        >
          <div class="widget-body">
            <h3>$720 Earned</h3>
            <p class="fs-mini text-muted mb mt-sm">
              Target <span class="fw-semi-bold">$820</span> day earnings
              is <span class="fw-semi-bold">96%</span> reached.
            </p>
          </div>
          <div class="widget-bottom-overflow">
            <table class="table table-striped table-sm">
              <thead class="no-bd">
                <tr>
                  <th>
                    <div class="checkbox abc-checkbox">
                      <input
                        id="checkbox210"
                        type="checkbox"
                        class="mt-0"
                        :checked="checkedArr[0]"
                        @click="checkTable(0)"
                      />
                      <label for="checkbox210" />
                    </div>
                  </th>
                  <th>&nbsp;</th>
                  <th>&nbsp;</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <div class="checkbox abc-checkbox">
                      <input
                        id="checkbox212"
                        type="checkbox"
                        class="mt-0"
                        :checked="checkedArr[1]"
                        @click="checkTable(1)"
                      />
                      <label for="checkbox212" />
                    </div>
                  </td>
                  <td>HP Core i7</td>
                  <td class="text-align-right fw-semi-bold">
                    $346.1
                  </td>
                </tr>
                <tr>
                  <td>
                    <div class="checkbox abc-checkbox">
                      <input
                        id="checkbox214"
                        type="checkbox"
                        class="mt-0"
                        :checked="checkedArr[2]"
                        @click="checkTable(2)"
                      />
                      <label for="checkbox214" />
                    </div>
                  </td>
                  <td>Air Pro</td>
                  <td class="text-align-right fw-semi-bold">
                    $533.1
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div class="widget-body mt-xlg chart-overflow-bottom">
            <area-chart
              class="area-chart"
              :height="100"
              :options="chartOptions"
              :chart-data="dataCollection"
            />
          </div>
        </Widget>
      </BCol>
      <BCol
        lg="4"
        xs="12"
      >
        <Widget
          title="<h6>Calendar</h6"
          body-class="p-0"
          settings
          close
          custom-header
        >
          <Calendar />
          <div class="list-group list-group-lg calendar-events">
            <a
              href="javascript:void(0)"
              class="list-group-item text-ellipsis"
            >
              <span class="badge rounded-pill bg-primary float-end">6:45</span>
              Weed out the flower bed
            </a>
            <a
              href="javascript:void(0)"
              class="list-group-item text-ellipsis"
            >
              <span class="badge rounded-pill bg-success float-end">9:41</span>
              Stop world water pollution
            </a>
          </div>
        </Widget>
      </BCol>
    </BRow>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from 'vue'
import { useAppConfig } from '@/composables/useAppConfig'
import Widget from '@/components/Widget/Widget.vue'
import Map from './components/Map/Map.vue'
import Calendar from './components/Calendar/Calendar.vue'
import AreaChart from './components/AreaChart/AreaChart.vue'
import CountUp from 'vue-countup-v3'
import type { ChartData, ChartOptions } from 'chart.js'

const appConfig = useAppConfig()

// Reactive state
const checkedArr = ref([false, false, false])
const dataCollection = ref<ChartData<'line'>>({
  labels: [],
  datasets: [],
})

const chartOptions: ChartOptions<'line'> = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: { display: false },
    tooltip: {
      enabled: true,
      mode: 'index',
      intersect: false,
      backgroundColor: 'rgba(0, 0, 0, 0.8)',
      titleColor: '#fff',
      bodyColor: '#fff',
      borderColor: 'rgba(255, 255, 255, 0.2)',
      borderWidth: 1,
      padding: 10,
      displayColors: true,
    },
  },
  scales: {
    y: {
      display: false,
      stacked: true,
    },
    x: {
      display: false,
    },
  },
  interaction: {
    mode: 'index',
    intersect: false,
  },
}

function checkTable(id: number) {
  const arr = [...checkedArr.value]

  if (id === 0) {
    const val = !arr[0]
    for (let i = 0; i < arr.length; i += 1) {
      arr[i] = val
    }
  } else {
    arr[id] = !arr[id]
  }

  if (arr[0]) {
    let count = 1
    for (let i = 1; i < arr.length; i += 1) {
      if (arr[i]) {
        count += 1
      }
    }
    if (count !== arr.length) {
      arr[0] = !arr[0]
    }
  }

  checkedArr.value = arr
}

function generateSmoothData(count: number, min: number, max: number): number[] {
  const data: number[] = []
  const mid = (min + max) / 2
  let prev = mid
  for (let i = 0; i < count; i++) {
    const change = (Math.random() - 0.5) * 5
    prev = Math.max(min, Math.min(max, prev + change))
    data.push(Math.round(prev * 100) / 100)
  }
  return data
}

function fillData() {
  const pointCount = 30
  dataCollection.value = {
    labels: Array(pointCount).fill(''),
    datasets: [
      {
        label: 'Downloads',
        backgroundColor: appConfig.colors.green,
        borderColor: appConfig.colors.green,
        data: generateSmoothData(pointCount, 60, 100),
        fill: true,
        tension: 0.4,
        pointRadius: 0,
        pointHoverRadius: 5,
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: appConfig.colors.green,
        pointHoverBorderWidth: 2,
      },
      {
        label: 'Uploads',
        backgroundColor: appConfig.colors.blue,
        borderColor: appConfig.colors.blue,
        data: generateSmoothData(pointCount, 30, 70),
        fill: true,
        tension: 0.4,
        pointRadius: 0,
        pointHoverRadius: 5,
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: appConfig.colors.blue,
        pointHoverBorderWidth: 2,
      },
    ],
  }
}

// Store last values for smooth transitions
let lastDownloadValue = 80
let lastUploadValue = 50
let updateInterval: ReturnType<typeof setInterval> | null = null

function getNextValue(lastValue: number, min: number, max: number): number {
  const change = (Math.random() - 0.5) * 5
  const newValue = Math.max(min, Math.min(max, lastValue + change))
  return Math.round(newValue * 100) / 100
}

function updateChartData() {
  if (!dataCollection.value.datasets[0]?.data || !dataCollection.value.datasets[1]?.data) return

  const downloadsData = [...dataCollection.value.datasets[0].data] as number[]
  const uploadsData = [...dataCollection.value.datasets[1].data] as number[]

  // Remove first point and add new point at the end
  downloadsData.shift()
  uploadsData.shift()

  lastDownloadValue = getNextValue(lastDownloadValue, 60, 100)
  lastUploadValue = getNextValue(lastUploadValue, 30, 70)

  downloadsData.push(lastDownloadValue)
  uploadsData.push(lastUploadValue)

  dataCollection.value = {
    ...dataCollection.value,
    datasets: [
      { ...dataCollection.value.datasets[0], data: downloadsData },
      { ...dataCollection.value.datasets[1], data: uploadsData },
    ],
  }
}

onMounted(() => {
  fillData()
  // Update chart every 1 second
  updateInterval = setInterval(updateChartData, 1000)
})

onBeforeUnmount(() => {
  if (updateInterval) {
    clearInterval(updateInterval)
  }
})
</script>

<style src="./Visits.scss" lang="scss" />
