<script setup lang="ts">
import Widget from '@/components/Widget/Widget.vue'
import chartsData from './mock'

const cd = chartsData
</script>

<template>
  <div>
    <h1 class="page-title">
      Visual - <span class="fw-semi-bold">Apex Charts</span>
    </h1>
    <p>For more information please read full <a href="https://apexcharts.com/docs/vue-charts/">documentation</a></p>
    <BRow>
      <BCol
        xs="12"
        lg="6"
        xl="6"
      >
        <Widget
          title="<h5>Apex <span class='fw-semi-bold'>Line Chart</span></h5>"
          close
          collapse
          custom-header
        >
          <apexchart
            type="line"
            :series="cd.line.series"
            :options="cd.line.options"
          />
        </Widget>
      </BCol>
      <BCol
        xs="12"
        lg="6"
        xl="6"
      >
        <Widget
          title="<h5>Apex <span class='fw-semi-bold'>Area Chart</span></h5>"
          close
          collapse
          custom-header
        >
          <apexchart
            type="area"
            :series="cd.area.series"
            :options="cd.area.options"
          />
        </Widget>
      </BCol>
      <BCol
        xs="12"
        lg="6"
        xl="6"
      >
        <Widget
          title="<h5>Apex <span class='fw-semi-bold'>Column Chart</span></h5>"
          close
          collapse
          custom-header
        >
          <apexchart
            type="bar"
            :series="cd.column.series"
            :options="cd.column.options"
          />
        </Widget>
      </BCol>
      <BCol
        xs="12"
        lg="6"
        xl="6"
      >
        <Widget
          title="<h5>Apex <span class='fw-semi-bold'>Bar Chart</span></h5>"
          close
          collapse
          custom-header
        >
          <apexchart
            type="bar"
            :series="cd.bar.series"
            :options="cd.bar.options"
          />
        </Widget>
      </BCol>
      <BCol
        xs="12"
        lg="12"
      >
        <Widget
          title="<h5>Apex <span class='fw-semi-bold'>Mixed Chart</span></h5>"
          close
          collapse
          custom-header
        >
          <apexchart
            type="line"
            height="350"
            :series="cd.mixed.series"
            :options="cd.mixed.options"
          />
        </Widget>
      </BCol>
      <BCol
        xs="12"
        lg="6"
      >
        <BRow>
          <BCol
            xs="12"
            lg="6"
          >
            <Widget
              title="<h5>Apex <span class='fw-semi-bold'>Pie Chart</span></h5>"
              close
              collapse
              custom-header
            >
              <apexchart
                type="pie"
                height="175"
                :series="cd.pie.series"
                :options="cd.pie.options"
              />
            </Widget>
          </BCol>
          <BCol
            xs="12"
            lg="6"
          >
            <Widget
              title="<h5>Apex <span class='fw-semi-bold'>Donut Chart</span></h5>"
              close
              collapse
              custom-header
            >
              <apexchart
                type="donut"
                height="175"
                :series="cd.donut.series"
                :options="cd.donut.options"
              />
            </Widget>
          </BCol>
          <BCol
            xs="12"
            lg="12"
          >
            <Widget
              title="<h5>Apex <span class='fw-semi-bold'>Heat Map Chart</span></h5>"
              close
              collapse
              custom-header
            >
              <apexchart
                type="heatmap"
                height="250"
                :series="cd.heatmap.series"
                :options="cd.heatmap.options"
              />
            </Widget>
          </BCol>
        </BRow>
      </BCol>
      <BCol
        xs="12"
        lg="6"
      >
        <Widget
          title="<h5>Apex <span class='fw-semi-bold'>Radial Chart</span></h5>"
          close
          collapse
          custom-header
        >
          <apexchart
            type="radialBar"
            :series="cd.radial.series"
            :options="cd.radial.options"
          />
        </Widget>
      </BCol>
    </BRow>
  </div>
</template>
