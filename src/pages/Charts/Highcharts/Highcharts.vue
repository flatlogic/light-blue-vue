<template>
  <div class="highcharts-page">
    <h1 class="page-title">
      Visual - <span class="fw-semi-bold">Highcharts</span>
    </h1>
    <p>For more information please read full <a href="https://github.com/highcharts/highcharts-vue">documentation</a></p>
    <b-row>
      <b-col
        xs="12"
        lg="12"
      >
        <Widget
          title="<h5>Highcharts <span class='fw-semi-bold'>Line Chart</span></h5>"
          close
          collapse
          custom-header
        >
          <HighchartsChart :options="cd.line" />
        </Widget>
      </b-col>
      <b-col
        xs="12"
        lg="6"
      >
        <Widget
          title="<h5>Highcharts <span class='fw-semi-bold'>Pie Chart</span></h5>"
          close
          collapse
          custom-header
        >
          <HighchartsChart :options="cd.pie" />
        </Widget>
      </b-col>
      <b-col
        xs="12"
        lg="6"
      >
        <Widget
          title="<h5>Highcharts <span class='fw-semi-bold'>Column 3D Chart</span></h5>"
          close
          collapse
          custom-header
        >
          <HighchartsChart :options="cd.column3D" />
        </Widget>
      </b-col>
      <b-col
        xs="12"
        lg="5"
      >
        <b-row>
          <b-col
            xs="12"
            lg="12"
          >
            <Widget
              title="<h5>Highcharts <span class='fw-semi-bold'>Vector Chart</span></h5>"
              close
              collapse
              custom-header
            >
              <HighchartsChart :options="cd.vector" />
            </Widget>
          </b-col>
          <b-col
            xs="12"
            lg="12"
          >
            <Widget
              title="<h5>Highcharts <span class='fw-semi-bold'>Sunburst Chart</span></h5>"
              close
              collapse
              custom-header
            >
              <HighchartsChart :options="cd.wordCloud" />
            </Widget>
          </b-col>
        </b-row>
      </b-col>
      <b-col
        xs="12"
        lg="7"
      >
        <Widget
          title="<h5>Highcharts <span class='fw-semi-bold'>Sunburst Chart</span></h5>"
          close
          collapse
          custom-header
        >
          <HighchartsChart :options="cd.sunburst" />
        </Widget>
      </b-col>
    </b-row>
  </div>
</template>

<script setup lang="ts">
import Widget from '@/components/Widget/Widget.vue'
import Highcharts from 'highcharts'
import * as HighchartsMore from 'highcharts/highcharts-more'
import * as Highcharts3D from 'highcharts/highcharts-3d'
import * as VariablePie from 'highcharts/modules/variable-pie'
import * as Exporting from 'highcharts/modules/exporting'
import * as ExportData from 'highcharts/modules/export-data'
import * as Accessibility from 'highcharts/modules/accessibility'
import * as Sunburst from 'highcharts/modules/sunburst'
import * as Vector from 'highcharts/modules/vector'
import * as Wordcloud from 'highcharts/modules/wordcloud'
import { Chart as HighchartsChart } from 'highcharts-vue'
import chartsData from './mock'

// Initialize Highcharts modules - handle ESM default exports
const initModule = (mod: unknown) => {
  const m = mod as { default?: (hc: typeof Highcharts) => void }
  const fn = typeof mod === 'function' ? mod : m.default
  if (typeof fn === 'function') fn(Highcharts)
}
initModule(HighchartsMore)
initModule(Highcharts3D)
initModule(VariablePie)
initModule(Exporting)
initModule(ExportData)
initModule(Accessibility)
initModule(Sunburst)
initModule(Vector)
initModule(Wordcloud)

const cd = chartsData
</script>

<style src="./Highcharts.scss" lang="scss" />
