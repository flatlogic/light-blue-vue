<template>
  <div class="dashboard-page">
    <h1 class="page-title">
      Analytics <small>Company Performance</small>
    </h1>
    <div class="sidesWrapper">
      <div class="analyticsSide">
        <BRow>
          <BCol
            xl="3"
            sm="6"
            xs="12"
          >
            <div class="pb-xlg h-100">
              <Widget
                class="h-100 mb-0"
                title="Visits Today"
                close
                :fetching-data="isReceiving"
              >
                <div class="d-flex justify-content-between align-items-center mb-lg">
                  <h2>{{ visits.count }}</h2>
                  <i class="la la-arrow-right text-success rotate-315" />
                </div>
                <div class="d-flex flex-wrap justify-content-between">
                  <div class="mt">
                    <h6>+{{ visits.logins }}</h6><p class="text-muted mb-0 me-2">
                      <small>Logins</small>
                    </p>
                  </div>
                  <div class="mt">
                    <h6>{{ visits.sign_out_pct }}%</h6><p class="text-muted mb-0">
                      <small>Sign Out</small>
                    </p>
                  </div>
                  <div class="mt">
                    <h6>{{ visits.rate_pct }}%</h6><p class="text-muted mb-0 me-2">
                      <small>Rate</small>
                    </p>
                  </div>
                </div>
              </Widget>
            </div>
          </BCol>
          <BCol
            xl="3"
            sm="6"
            xs="12"
          >
            <div class="pb-xlg h-100">
              <Widget
                class="h-100 mb-0"
                title="Revenue Breakdown"
                close
                :fetching-data="isReceiving"
              >
                <Highcharts :options="donut" />
              </Widget>
            </div>
          </BCol>
          <BCol
            xl="3"
            sm="6"
            xs="12"
          >
            <div class="pb-xlg h-100">
              <Widget
                class="h-100 mb-0"
                title="App Perfomance"
                close
                :fetching-data="isReceiving"
              >
                <p class="text-muted d-flex flex-wrap">
                  <small class="me-4 d-flex align-items-center">
                    <span
                      class="circle bg-success text-success me-1"
                      style="font-size: 4px;"
                    >
                      .
                    </span>
                    This Period
                  </small>
                  <small class="me-4 d-flex align-items-center">
                    <span
                      class="circle bg-primary text-warning me-1"
                      style="font-size: 4px;"
                    >
                      .
                    </span>
                    Last Period
                  </small>
                </p>
                <h6>SDK</h6>
                <BProgress
                  class="mb-xs"
                  style="height: 5px"
                  variant="success"
                  :value="performance.sdk.this_period_pct"
                  :max="100"
                />
                <BProgress
                  class="mb"
                  style="height: 5px"
                  variant="primary"
                  :value="performance.sdk.last_period_pct"
                  :max="100"
                />
                <h6>Integration</h6>
                <BProgress
                  class="mb-xs"
                  style="height: 5px"
                  variant="success"
                  :value="performance.integration.this_period_pct"
                  :max="100"
                />
                <BProgress
                  style="height: 5px"
                  variant="primary"
                  :value="performance.integration.last_period_pct"
                  :max="100"
                />
              </Widget>
            </div>
          </BCol>
          <BCol
            xl="3"
            sm="6"
            xs="12"
          >
            <div class="pb-xlg h-100">
              <Widget
                class="h-100 mb-0"
                title="Server Overview"
                close
                :fetching-data="isReceiving"
              >
                <div class="d-flex align-items-center mb-sm">
                  <p class="width-150">
                    <small>{{ server[1].pct }}% / {{ server[1].temp }}°С / {{ server[1].frequency }} Ghz</small>
                  </p>
                  <div style="width: calc(100% - 150px)">
                    <trend
                      :data="getRandomData()"
                      :gradient="[appConfig.colors.red]"
                      :height="30"
                      smooth
                    />
                  </div>
                </div>
                <div class="d-flex align-items-center mb-sm">
                  <p class="width-150">
                    <small>{{ server[2].pct }}% / {{ server[2].temp }}°С / {{ server[2].frequency }} Ghz</small>
                  </p>
                  <div style="width: calc(100% - 150px)">
                    <trend
                      :data="getRandomData()"
                      :gradient="[appConfig.colors.blue]"
                      :height="30"
                      smooth
                    />
                  </div>
                </div>
                <div class="d-flex align-items-center">
                  <p class="width-150">
                    <small>{{ server[2].pct }}% / {{ server[2].temp }}°С / {{ server[2].frequency }} Ghz</small>
                  </p>
                  <div style="width: calc(100% - 150px)">
                    <trend
                      :data="getRandomData()"
                      :gradient="[appConfig.colors.green]"
                      :height="30"
                      smooth
                    />
                  </div>
                </div>
              </Widget>
            </div>
          </BCol>
          <BCol xs="12">
            <MainChart
              :data="mainChart"
              :is-receiving="isReceiving"
            />
          </BCol>
        </BRow>
        <BRow>
          <BCol
            v-for="(stat, index) in mock.bigStat"
            :key="index"
            xs="12"
            lg="6"
            xl="4"
          >
            <BigStat
              :product="stat.product"
              :color="stat.color"
              :total="stat.total"
              :registrations="stat.registrations"
              :bounce="stat.bounce"
            />
          </BCol>
        </BRow>
        <BRow>
          <BCol xs="12">
            <Widget
              title="<h5>Support <span class='fw-semi-bold'>Requests</span></h5>"
              body-class="widget-table-overflow"
              custom-header
            >
              <div class="table-responsive">
                <table class="table table-lg mb-0 requests-table">
                  <thead>
                    <tr class="text-muted">
                      <th>NAME</th>
                      <th>EMAIL</th>
                      <th>PRODUCT</th>
                      <th>PRICE</th>
                      <th>DATE</th>
                      <th>CITY</th>
                      <th>STATUS</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr
                      v-for="row in table"
                      :key="row.id"
                    >
                      <td>{{ row.name }}</td>
                      <td>{{ row.email }}</td>
                      <td>{{ row.product }}</td>
                      <td>{{ row.price }}</td>
                      <td>{{ row.date }}</td>
                      <td>{{ row.city }}</td>
                      <td>
                        <BButton
                          :variant="row.status === 'Pending'
                            ? 'success'
                            : row.status === 'Declined' ? 'danger' : 'info'"
                          class="p-1 px-3 btn-xs"
                        >
                          {{ row.status }}
                        </BButton>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </Widget>
          </BCol>
        </BRow>
      </div>
      <div class="analyticsSide">
        <BRow>
          <BCol
            xs="12"
            md="6"
            xl="12"
            class="lastSideElement"
          >
            <Widget
              body-class="p-0 mt-0"
              class="mb-xlg pt-0"
            >
              <Calendar white />
            </Widget>
          </BCol>
          <BCol
            xs="12"
            md="6"
            xl="12"
            class="lastSideElement"
          >
            <TaskContainer :data="mock.tasks" />
          </BCol>
          <BCol
            xs="12"
            md="6"
            xl="12"
            class="lastSideElement"
          >
            <Widget
              class-name="widget"
              body-class="notifications w-100 mt-lg"
              :title="`
                <div class='d-flex justify-content-between align-items-center'>
                  <h4 class='mb-0'>Notifications</h4>
                  <span class='badge rounded-pill bg-success'>
                    ${mock.notifications.length}
                  </span>
                </div>
              `"
              custom-header
            >
              <div
                v-for="notification in mock.notifications"
                :key="notification.id"
                class="d-flex align-items-start"
              >
                <i :class="`la la-${notification.icon} me-2 text-${notification.color}`" />
                <p
                  v-safe-html="notification.content"
                  :class="{ 'mb-0': notification.id === mock.notifications.length - 1 }"
                />
              </div>
            </Widget>
          </BCol>
        </BRow>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, onMounted } from 'vue'
import { storeToRefs } from 'pinia'
import { useDashboardStore } from '@/store/dashboard'
import { useAppConfig } from '@/composables/useAppConfig'

import Widget from '@/components/Widget/Widget.vue'
import MainChart from './components/MainChart/MainChart.vue'
import BigStat from './components/BigStat/BigStat.vue'
import Calendar from '../Visits/components/Calendar/Calendar.vue'
import TaskContainer from './components/TaskContainer/TaskContainer.vue'
import mock from './mock'

import { Chart as Highcharts } from 'highcharts-vue'

// Store and config
const dashboardStore = useDashboardStore()
const appConfig = useAppConfig()

// Destructure reactive state from store
const { visits, performance, server, revenue, mainChart, isReceiving } = storeToRefs(dashboardStore)

// Static table data
const table = [
  {
    id: 0,
    name: 'Mark Otto',
    email: 'ottoto@wxample.com',
    product: 'ON the Road',
    price: '$25 224.2',
    date: '11 May 2017',
    city: 'Otsego',
    status: 'Sent',
  },
  {
    id: 1,
    name: 'Jacob Thornton',
    email: 'thornton@wxample.com',
    product: 'HP Core i7',
    price: '$1 254.2',
    date: '4 Jun 2017',
    city: 'Fivepointville',
    status: 'Sent',
  },
  {
    id: 2,
    name: 'Larry the Bird',
    email: 'bird@wxample.com',
    product: 'Air Pro',
    price: '$1 570.0',
    date: '27 Aug 2017',
    city: 'Leadville North',
    status: 'Pending',
  },
  {
    id: 3,
    name: 'Joseph May',
    email: 'josephmay@wxample.com',
    product: 'Version Control',
    price: '$5 224.5',
    date: '19 Feb 2018',
    city: 'Seaforth',
    status: 'Declined',
  },
  {
    id: 4,
    name: 'Peter Horadnia',
    email: 'horadnia@wxample.com',
    product: 'Let\'s Dance',
    price: '$43 594.7',
    date: '1 Mar 2018',
    city: 'Hanoverton',
    status: 'Sent',
  },
]

function getRandomData(): number[] {
  const arr: number[] = []
  for (let i = 0; i < 25; i += 1) {
    arr.push(Number((Math.random() * 10).toFixed(1)))
  }
  return arr
}

const donut = computed(() => {
  const series = [
    {
      type: 'pie' as const,
      name: 'Revenue',
      data: revenue.value.map((s: { label: string; data: number }) => ({
        name: s.label,
        y: s.data,
      })),
    },
  ]

  return {
    chart: {
      type: 'pie' as const,
      height: 120,
      backgroundColor: 'transparent',
    },
    credits: {
      enabled: false,
    },
    title: { text: '' },
    plotOptions: {
      pie: {
        dataLabels: {
          enabled: false,
        },
        borderColor: undefined,
        showInLegend: true,
        innerSize: 80,
        size: 100,
        states: {
          hover: {
            halo: {
              size: 1,
            },
          },
        },
      },
    },
    colors: [appConfig.colors.blue, appConfig.colors.red, appConfig.colors.default],
    legend: {
      align: 'right' as const,
      verticalAlign: 'middle' as const,
      layout: 'vertical' as const,
      itemStyle: {
        color: '#fff',
        fontWeight: '100',
        fontFamily: 'Open Sans',
      },
      itemMarginBottom: 5,
      symbolRadius: 0,
    },
    exporting: {
      enabled: false,
    },
    accessibility: {
      enabled: false,
    },
    series,
  }
})

onMounted(() => {
  dashboardStore.receiveDataRequest()
})
</script>

<style src="./Dashboard.scss" lang="scss" />
