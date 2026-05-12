<template>
  <div>
    <h1 class="page-title">
      Amcharts <span class="fw-semi-bold">Maps</span>
    </h1>
    <BRow>
      <BCol cols="12">
        <Widget
          title="<h5>Vue Amcharts Maps <small class='text-muted'>Default and customized</small></h5>"
          custom-header
          close
          collapse
        >
          <div
            ref="chartdiv"
            class="amcharts-map"
          />
        </Widget>
      </BCol>
    </BRow>
  </div>
</template>

<script setup lang="ts">
import { onMounted, onBeforeUnmount, useTemplateRef } from 'vue'

import * as am5 from '@amcharts/amcharts5'
import * as am5map from '@amcharts/amcharts5/map'
import am5geodata_worldLow from '@amcharts/amcharts5-geodata/worldLow'

import Widget from '@/components/Widget/Widget.vue'
import places from './mock'

const chartdiv = useTemplateRef<HTMLDivElement>('chartdiv')
let root: ReturnType<typeof am5.Root.new> | null = null

onMounted(() => {
  if (!chartdiv.value) return

  root = am5.Root.new(chartdiv.value)

  const chart = root.container.children.push(
    am5map.MapChart.new(root, {
      projection: am5map.geoNaturalEarth1(),
      panX: 'rotateX',
      panY: 'translateY'
    })
  )

  const polygonSeries = chart.series.push(
    am5map.MapPolygonSeries.new(root, {
      geoJSON: am5geodata_worldLow,
      exclude: ['AQ'],
      fill: am5.color('#474D84'),
      stroke: am5.color('#6979C9')
    })
  )

  polygonSeries.mapPolygons.template.setAll({
    tooltipText: '{name}',
    fill: am5.color('#474D84'),
    fillOpacity: 1,
    stroke: am5.color('#6979C9'),
    strokeOpacity: 1
  })

  polygonSeries.mapPolygons.template.states.create('hover', {
    fillOpacity: 0.5
  })

  const pointSeries = chart.series.push(
    am5map.MapPointSeries.new(root, {})
  )

  pointSeries.bullets.push(() => {
    return am5.Bullet.new(root!, {
      sprite: am5.Circle.new(root!, {
        radius: 4,
        fill: am5.color('#C7D0FF'),
        stroke: am5.color('#ffffff'),
        strokeWidth: 0,
        tooltipText: '{name}'
      })
    })
  })

  pointSeries.data.setAll(places.map((place: { latitude: number; longitude: number; name: string }) => ({
    geometry: { type: 'Point', coordinates: [place.longitude, place.latitude] },
    name: place.name
  })))

  chart.set('zoomControl', am5map.ZoomControl.new(root, {
    x: am5.percent(0),
    centerX: am5.percent(0),
    y: am5.percent(0),
    centerY: am5.percent(0)
  }))
})

onBeforeUnmount(() => {
  if (root) {
    root.dispose()
  }
})
</script>

<style src="./Amcharts.scss" lang="scss" scoped />
