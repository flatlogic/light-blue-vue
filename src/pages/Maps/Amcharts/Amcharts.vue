<template>
  <div>
    <b-breadcrumb>
      <b-breadcrumb-item>YOU ARE HERE</b-breadcrumb-item>
      <b-breadcrumb-item active>Amcharts Maps</b-breadcrumb-item>
    </b-breadcrumb>
    <h1 class="page-title">
      Amcharts <span class="fw-semi-bold">Maps</span>
    </h1>
    <b-row>
      <b-col cols="12">
        <Widget
            title="<h5>Vue Amcharts Maps <small class='text-muted'>Default and customized</small></h5>"
            customHeader close collapse
        >
          <div class="amcharts-map" ref="chartdiv"></div>
        </Widget>
      </b-col>
    </b-row>
  </div>
</template>
<script>
  import * as am4core from "@amcharts/amcharts4/core";
  import * as am4maps from "@amcharts/amcharts4/maps";
  import am4geodata_worldLow from "@amcharts/amcharts4-geodata/worldLow";

  import Widget from '@/components/Widget/Widget';
  import places from "./mock";

  export default {
    name: 'AmchartsMap',
    components: {
      Widget
    },
    mounted() {
      let map = am4core.create(this.$refs.chartdiv, am4maps.MapChart);
      map.geodata = am4geodata_worldLow;
      map.projection = new am4maps.projections.Miller();
      let polygonSeries = map.series.push(new am4maps.MapPolygonSeries());
      polygonSeries.useGeodata = true;
      polygonSeries.exclude = ["AQ"];

      map.zoomControl = new am4maps.ZoomControl();
      map.zoomControl.align = 'left';
      map.zoomControl.valign = 'top';

      map.zoomControl.minusButton.background.fill = am4core.color("#C7D0FF");
      map.zoomControl.minusButton.background.fillOpacity = 0.24;
      map.zoomControl.minusButton.background.stroke = null;
      map.zoomControl.plusButton.background.fill = am4core.color("#C7D0FF");
      map.zoomControl.plusButton.background.fillOpacity = 0.24;
      map.zoomControl.plusButton.background.stroke = null;
      map.zoomControl.plusButton.label.fill = am4core.color("#fff");
      map.zoomControl.plusButton.label.fontWeight = 600;
      map.zoomControl.plusButton.label.fontSize = 16;
      map.zoomControl.minusButton.label.fill = am4core.color("#fff");
      map.zoomControl.minusButton.label.fontWeight = 600;
      map.zoomControl.minusButton.label.fontSize = 16;
      let plusButtonHoverState = map.zoomControl.plusButton.background.states.create("hover");
      plusButtonHoverState.properties.fillOpacity = 0.24;
      let minusButtonHoverState = map.zoomControl.minusButton.background.states.create("hover");
      minusButtonHoverState.properties.fillOpacity = 0.24;

    let polygonTemplate = polygonSeries.mapPolygons.template;
    polygonTemplate.tooltipText = "{name}";
    polygonTemplate.fill = am4core.color("#474D84");
    polygonTemplate.fillOpacity = 1;
    let hs = polygonTemplate.states.create("hover");
    hs.properties.fillOpacity = 0.5;

    polygonTemplate.stroke = am4core.color("#6979C9");
    polygonTemplate.strokeOpacity = 1;

      let placeSeries = map.series.push(new am4maps.MapImageSeries());
      let place = placeSeries.mapImages.template;
      place.nonScaling = true;
      place.propertyFields.latitude = "latitude";
      place.propertyFields.longitude = "longitude";
      let circle = place.createChild(am4core.Circle);
      circle.radius = 4;
      circle.fill = am4core.color("#C7D0FF");
      circle.stroke = am4core.color("#ffffff");
      circle.strokeWidth = 0;
      placeSeries.data = places;
      circle.tooltipText = '{name}';

      this.map = map;
    },
    beforeDestroy() {
      if (this.map) {
        this.map.dispose();
      }
    }
  }
</script>
<style src="./Amcharts.scss" lang="scss" scoped />
