<template>
  <div class="years-map">
    <div
      ref="mapRef"
      class="map"
    />
    <div class="stats">
      <h6>YEARLY <span class="fw-semi-bold">DISTRIBUTIONS</span></h6>
      <span class="pull-left me-1">
        <small><span class="circle bg-success">
          <i class="fa fa-plus" /></span></small>
      </span>
      <p class="h4 m-0">
        <strong>17% last year</strong>
      </p>
    </div>
    <BButtonGroup class="map-controls">
      <BButton
        variant="secondary"
        :class="{'active': activeYear===2014}"
        @click="changeYear(2014)"
      >
        2014
      </BButton>
      <BButton
        variant="secondary"
        :class="{'active': activeYear===2015}"
        @click="changeYear(2015)"
      >
        2015
      </BButton>
      <BButton
        variant="secondary"
        :class="{'active': activeYear===2016}"
        @click="changeYear(2016)"
      >
        2016
      </BButton>
      <BButton
        variant="secondary"
        :class="{'active': activeYear===2017}"
        @click="changeYear(2017)"
      >
        2017
      </BButton>
      <BButton
        variant="secondary"
        :class="{'active': activeYear===2018}"
        @click="changeYear(2018)"
      >
        2018
      </BButton>
      <BButton
        variant="secondary"
        :class="{'active': activeYear===2019}"
        @click="changeYear(2019)"
      >
        2019
      </BButton>
    </BButtonGroup>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount, useTemplateRef } from 'vue'
import fakeWorldData from './MapData'

import * as am5 from '@amcharts/amcharts5'
import * as am5map from '@amcharts/amcharts5/map'
import am5geodata_worldLow from '@amcharts/amcharts5-geodata/worldLow'
import am5themes_Animated from '@amcharts/amcharts5/themes/Animated'

const mapRef = useTemplateRef<HTMLDivElement>('mapRef')
const activeYear = ref(2018)
let root: am5.Root | null = null
let polygonSeries: am5map.MapPolygonSeries | null = null

function changeYear(year: number) {
  activeYear.value = year
  if (polygonSeries && fakeWorldData[year]) {
    polygonSeries.data.setAll(fakeWorldData[year].areas)
  }
}

onMounted(() => {
  if (!mapRef.value) return

  root = am5.Root.new(mapRef.value)
  root.setThemes([am5themes_Animated.new(root)])

  const chart = root.container.children.push(
    am5map.MapChart.new(root, {
      panX: 'rotateX',
      panY: 'translateY',
      projection: am5map.geoNaturalEarth1(),
      homeZoomLevel: 6,
      homeGeoPoint: { longitude: 8.863224, latitude: 39.599254 }
    })
  )

  polygonSeries = chart.series.push(
    am5map.MapPolygonSeries.new(root, {
      geoJSON: am5geodata_worldLow,
      exclude: ['AQ'],
      fill: am5.color('#474D84'),
      stroke: am5.color('#6979C9')
    })
  )

  polygonSeries.mapPolygons.template.setAll({
    tooltipHTML: '{tooltip}',
    fill: am5.color('#474D84'),
    fillOpacity: 1,
    stroke: am5.color('#6979C9')
  })

  polygonSeries.mapPolygons.template.states.create('hover', {
    fillOpacity: 0.5
  })

  if (fakeWorldData[activeYear.value]) {
    polygonSeries.data.setAll(fakeWorldData[activeYear.value].areas)
  }

  chart.set('zoomControl', am5map.ZoomControl.new(root, {
    x: am5.percent(0),
    centerX: am5.percent(0),
    y: am5.percent(100),
    centerY: am5.percent(100),
    layout: root.horizontalLayout
  }))

  ;(polygonSeries as unknown as am5.Series).set('heatRules' as keyof am5.ISeriesSettings, [{
    target: polygonSeries.mapPolygons.template,
    dataField: 'value',
    min: am5.color('#474D84'),
    max: am5.color('#6979C9'),
    key: 'fill'
  }] as unknown)
})

onBeforeUnmount(() => {
  if (root) {
    root.dispose()
  }
})
</script>

<style src="./YearsMap.scss" lang="scss" />
