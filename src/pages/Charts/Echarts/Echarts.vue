<template>
  <div>
    <h1 class="page-title">
      Visual - <span class="fw-semi-bold">Echarts</span>
    </h1>
    <p>For more information please read full <a href="https://ecomfe.github.io/vue-echarts/">documentation</a></p>
    <b-row>
      <b-col
        xs="12"
        lg="10"
        offset-lg="1"
      >
        <Widget
          title="<h5>Echarts <span class='fw-semi-bold'>Bar Chart</span></h5>"
          close
          collapse
          custom-header
        >
          <VChart
            :option="ed.bar"
            :init-options="initOptions"
            autoresize
            style="height: 300px;"
          />
        </Widget>
      </b-col>
      <b-col
        xs="12"
        lg="6"
      >
        <Widget
          title="<h5>Echarts <span class='fw-semi-bold'>Pie Chart</span></h5>"
          close
          collapse
          custom-header
        >
          <VChart
            :option="ed.pie"
            :init-options="initOptions"
            autoresize
            style="height: 300px;"
          />
        </Widget>
      </b-col>
      <b-col
        xs="12"
        lg="6"
      >
        <Widget
          title="<h5>Echarts <span class='fw-semi-bold'>Polar Chart</span></h5>"
          close
          collapse
          custom-header
        >
          <VChart
            :option="ed.polar"
            :init-options="initOptions"
            autoresize
            style="height: 300px;"
          />
        </Widget>
      </b-col>
      <b-col
        xs="12"
        lg="12"
      >
        <Widget
          title="<h5>Echarts <span class='fw-semi-bold'>Line Chart</span></h5>"
          close
          collapse
          custom-header
        >
          <VChart
            :option="ed.line"
            :init-options="initOptions"
            autoresize
            style="height: 300px;"
          />
        </Widget>
      </b-col>
      <b-col
        xs="12"
        lg="6"
      >
        <Widget
          title="<h5>Echarts <span class='fw-semi-bold'>Scatter Chart</span></h5>"
          close
          collapse
          custom-header
        >
          <VChart
            :option="ed.scatter"
            :init-options="initOptions"
            autoresize
            style="height: 300px;"
          />
        </Widget>
      </b-col>
      <b-col
        xs="12"
        lg="6"
      >
        <Widget
          title="<h5>Echarts <span class='fw-semi-bold'>Gauge Chart</span></h5>"
          close
          collapse
          custom-header
        >
          <VChart
            :option="ed.gauge"
            :init-options="initOptions"
            autoresize
            style="height: 300px;"
          />
        </Widget>
      </b-col>
    </b-row>
  </div>
</template>

<script setup lang="ts">
import Widget from '@/components/Widget/Widget.vue'

// Import vue-echarts and required echarts modules
import VChart from 'vue-echarts'
import { use } from 'echarts/core'
import { CanvasRenderer } from 'echarts/renderers'
import { BarChart, PieChart, LineChart, ScatterChart, GaugeChart } from 'echarts/charts'
import {
  TitleComponent,
  TooltipComponent,
  LegendComponent,
  PolarComponent,
  GridComponent,
  ToolboxComponent,
  DatasetComponent,
} from 'echarts/components'

import echartsData from './mock'

// Register echarts components
use([
  CanvasRenderer,
  BarChart,
  PieChart,
  LineChart,
  ScatterChart,
  GaugeChart,
  TitleComponent,
  TooltipComponent,
  LegendComponent,
  PolarComponent,
  GridComponent,
  ToolboxComponent,
  DatasetComponent,
])

const ed = echartsData

const initOptions = {
  renderer: 'canvas' as const
}
</script>
