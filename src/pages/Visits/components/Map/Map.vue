<template>
  <div>
    <div
      ref="mapRef"
      class="map"
    />
    <div class="stats">
      <h6 class="mt-1 text-muted">
        GEO-LOCATIONS
      </h6>
      <p class="h2 m-0 fw-normal d-flex align-items-center">
        <CountUp
          :end-val="1656843"
          :duration="2"
          :options="countUpOptions"
        />
        <i class="fa-solid fa-location-dot ms-2" />
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, onBeforeUnmount, useTemplateRef } from 'vue'
import CountUp from 'vue-countup-v3'

import * as am5 from '@amcharts/amcharts5'
import * as am5map from '@amcharts/amcharts5/map'
import am5geodata_usaLow from '@amcharts/amcharts5-geodata/usaLow'

import cities from './mock'

const mapRef = useTemplateRef<HTMLDivElement>('mapRef')
let root: ReturnType<typeof am5.Root.new> | null = null

// Map colors
const MAP_FILL_COLOR = '#474D84'
const MAP_STROKE_COLOR = '#6979C9'
const POINT_COLOR = '#C7D0FF'

const countUpOptions = {
  separator: ' ',
}

onMounted(() => {
  if (!mapRef.value) return

  root = am5.Root.new(mapRef.value)

  const chart = root.container.children.push(
    am5map.MapChart.new(root, {
      projection: am5map.geoAlbersUsa(),
      panX: 'none',
      panY: 'none',
      wheelX: 'none',
      wheelY: 'none',
      homeZoomLevel: 1.2
    })
  )

  const polygonSeries = chart.series.push(
    am5map.MapPolygonSeries.new(root, {
      geoJSON: am5geodata_usaLow,
      fill: am5.color(MAP_FILL_COLOR),
      stroke: am5.color(MAP_STROKE_COLOR)
    })
  )

  polygonSeries.mapPolygons.template.setAll({
    tooltipText: '{name}',
    fill: am5.color(MAP_FILL_COLOR),
    fillOpacity: 1,
    stroke: am5.color(MAP_STROKE_COLOR),
    strokeOpacity: 1
  })

  // Create tooltip with default background color
  const tooltip = am5.Tooltip.new(root, {
    getFillFromSprite: false,
    getStrokeFromSprite: false,
    autoTextColor: false,
    labelText: '{name}'
  })
  tooltip.get('background')?.setAll({
    fill: am5.color(MAP_FILL_COLOR),
    fillOpacity: 1,
    stroke: am5.color(POINT_COLOR),
    strokeWidth: 1
  })
  tooltip.label.setAll({
    fill: am5.color(POINT_COLOR)
  })
  polygonSeries.mapPolygons.template.set('tooltip', tooltip)

  polygonSeries.mapPolygons.template.states.create('hover', {
    fillOpacity: 0.5
  })

  const pointSeries = chart.series.push(
    am5map.MapPointSeries.new(root, {})
  )

  pointSeries.bullets.push((root, series, dataItem) => {
    const data = dataItem.dataContext as { size: number; tooltip: string }
    return am5.Bullet.new(root, {
      sprite: am5.Circle.new(root, {
        radius: data.size,
        fill: am5.color(POINT_COLOR),
        strokeWidth: 0,
        tooltipText: '{tooltip}'
      })
    })
  })

  pointSeries.data.setAll(cities.map((city: { latitude: number; longitude: number; tooltip: string; size: number }) => ({
    geometry: { type: 'Point', coordinates: [city.longitude, city.latitude] },
    tooltip: city.tooltip,
    size: city.size
  })))

  const zoomControl = am5map.ZoomControl.new(root, {
    x: am5.percent(0),
    centerX: am5.percent(0),
    y: am5.percent(100),
    centerY: am5.percent(100),
    paddingBottom: 35
  })

  // Make horizontal layout and smaller buttons
  zoomControl.setAll({
    layout: root.horizontalLayout
  })

  const buttonColor = am5.color(MAP_STROKE_COLOR)
  const bgColor = am5.color(MAP_FILL_COLOR)

  // Style plus button
  zoomControl.plusButton.setAll({ width: 28, height: 28, scale: 0.8, marginRight: 2 })
  zoomControl.plusButton.get('background')?.setAll({ fill: buttonColor })

  // Style minus button - use background color for border and icon
  zoomControl.minusButton.setAll({ width: 28, height: 28, scale: 0.8, marginLeft: 2 })
  zoomControl.minusButton.get('background')?.setAll({ stroke: bgColor })
  zoomControl.minusButton.get('icon')?.setAll({ stroke: bgColor })

  chart.set('zoomControl', zoomControl)
})

onBeforeUnmount(() => {
  if (root) {
    root.dispose()
  }
})
</script>

<style src="./Map.scss" lang="scss" />
