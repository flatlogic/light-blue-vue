<template>
  <div class="charts-overview">
    <h1 class="page-title">
      Visual -
      <span class="fw-semi-bold">Charts</span>
    </h1>
    <div>
      <b-row>
        <b-col
          xs="12"
          lg="7"
        >
          <Widget
            title="<h5>Apex <span class='fw-semi-bold'>Column Chart</span></h5>"
            close
            collapse
            custom-header
          >
            <apexchart
              type="bar"
              height="350"
              :series="cd.apex.column.series"
              :options="cd.apex.column.options"
            />
          </Widget>
        </b-col>
        <b-col
          xs="12"
          lg="5"
        >
          <Widget
            title="<h5>Echarts <span class='fw-semi-bold'>Line Chart</span></h5>"
            close
            collapse
            custom-header
          >
            <VChart
              :option="cd.echarts.line"
              :init-options="initEchartsOptions"
              style="height: 370px"
            />
          </Widget>
        </b-col>
        <b-col
          xs="12"
          lg="5"
        >
          <Widget
            title="<h5>Highcharts <span class='fw-semi-bold'>Line Chart</span></h5>"
            close
            collapse
            custom-header
          >
            <HighchartsChart :options="cd.highcharts.mixed" />
            <h5 class="mt">
              Interactive <span class="fw-semi-bold">Sparklines</span>
            </h5>
            <b-row class="mt">
              <b-col
                md="6"
                xs="12"
              >
                <div class="stats-row">
                  <div class="stat-item">
                    <p class="value5 fw-thin">
                      34 567
                    </p>
                    <h6 class="name text-muted m-0 fs-mini">
                      Overall Values
                    </h6>
                  </div>
                  <div class="stat-item stat-item-mini-chart">
                    <Sparklines
                      :data="sparklineData.series"
                      :options="sparklineData.options1"
                      :width="80"
                      :height="25"
                    />
                  </div>
                </div>
              </b-col>
              <b-col
                md="6"
                xs="12"
              >
                <div class="stats-row">
                  <div class="stat-item">
                    <p class="value5 fw-thin">
                      34 567
                    </p>
                    <h6 class="name text-muted m-0 fs-mini">
                      Overall Values
                    </h6>
                  </div>
                  <div class="stat-item stat-item-mini-chart">
                    <Sparklines
                      :data="sparklineData.series"
                      :options="sparklineData.options2"
                      :width="80"
                      :height="25"
                    />
                  </div>
                </div>
              </b-col>
            </b-row>
          </Widget>
        </b-col>
        <b-col
          xs="12"
          lg="7"
        >
          <b-row>
            <b-col
              xs="12"
              lg="6"
            >
              <Widget
                title="<h5>Apex <span class='fw-semi-bold'>Monochrome Pie</span></h5>"
                close
                collapse
                custom-header
              >
                <apexchart
                  type="pie"
                  height="200"
                  :series="cd.apex.pie.series"
                  :options="cd.apex.pie.options"
                />
              </Widget>
            </b-col>
            <b-col
              xs="12"
              lg="6"
            >
              <Widget
                title="<h5>Echart <span class='fw-semi-bold'>Donut Chart</span></h5>"
                close
                collapse
                custom-header
              >
                <VChart
                  :option="cd.echarts.donut"
                  :init-options="initEchartsOptions"
                  style="height: 175px"
                />
              </Widget>
            </b-col>
            <b-col
              xs="12"
              lg="12"
            >
              <Widget
                title="<h5>Highcharts <span class='fw-semi-bold'>Live Chart</span></h5>"
                close
                collapse
                custom-header
              >
                <HighchartsChart
                  ref="highchart"
                  :options="ld"
                />
              </Widget>
            </b-col>
          </b-row>
        </b-col>
        <b-col
          xs="12"
          lg="12"
        >
          <Widget
            title="<h5>Echart <span class='fw-semi-bold'>River Chart</span></h5>"
            close
            collapse
            custom-header
          >
            <VChart
              :option="cd.echarts.river"
              :init-options="initEchartsOptions"
              style="height: 350px"
            />
          </Widget>
        </b-col>
      </b-row>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, onBeforeUnmount } from 'vue'
import Widget from '@/components/Widget/Widget.vue'
import { chartData, liveChart, liveChartInterval } from './mock'
import { useAppConfig } from '@/composables/useAppConfig'
import VChart from 'vue-echarts'
import { use } from 'echarts/core'
import { LineChart, ThemeRiverChart, PieChart } from 'echarts/charts'
import { TooltipComponent, LegendComponent, GridComponent, SingleAxisComponent, ToolboxComponent } from 'echarts/components'
import { CanvasRenderer } from 'echarts/renderers'

use([LineChart, ThemeRiverChart, PieChart, TooltipComponent, LegendComponent, GridComponent, SingleAxisComponent, ToolboxComponent, CanvasRenderer])

import Highcharts from 'highcharts'
import * as Exporting from 'highcharts/modules/exporting'
import * as ExportData from 'highcharts/modules/export-data'
import * as Accessibility from 'highcharts/modules/accessibility'

// Initialize Highcharts modules - handle ESM default exports
const initModule = (mod: unknown) => {
  const m = mod as { default?: (hc: typeof Highcharts) => void }
  const fn = typeof mod === 'function' ? mod : m.default
  if (typeof fn === 'function') fn(Highcharts)
}
initModule(Exporting)
initModule(ExportData)
initModule(Accessibility)

import { Chart as HighchartsChart } from 'highcharts-vue'
import Sparklines from '../../components/Sparklines/Sparklines.vue'

const appConfig = useAppConfig()

const cd = chartData
const ld = liveChart
const initEchartsOptions = {
  renderer: 'canvas' as const,
}

const sparklineData = computed(() => ({
  series: [{ data: [1, 7, 3, 5, 7, 8] }],
  options1: {
    colors: [appConfig.colors.green],
    plotOptions: {
      bar: {
        columnWidth: '50%',
      },
    },
  },
  options2: {
    colors: [appConfig.colors.red],
    plotOptions: {
      bar: {
        columnWidth: '50%',
      },
    },
  },
}))

onBeforeUnmount(() => {
  if (liveChartInterval) clearInterval(liveChartInterval)
})
</script>
