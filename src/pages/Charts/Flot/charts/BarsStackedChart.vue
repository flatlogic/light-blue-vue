<template>
  <div ref="chartContainer" :style="{ height: '200px' }" />
</template>

<script>
import $ from 'jquery';

export default {
  name: 'BarsStackedChart',
  methods: {
    getStackedBarChartData() { // eslint-disable-line
      const seriesCount = 3;
      const tickCount = 10;
      let series = [];
      const data = [];

      for (let i = 0; i < seriesCount; i += 1) {
        series = [];

        for (let j = 0; j < tickCount; j += 1) {
          series.push([j, parseInt(Math.random() * 30, 10)]);
        }

        data.push(series);
      }

      return data;
    },
    createChart(data) {
      return $.plot($(this.$refs.chartContainer), data, {
        series: {
          stack: true,
          bars: {
            show: true,
            barWidth: 0.45,
            lineWidth: 1,
            fill: 0.75,
          },
        },
        grid: {
          backgroundColor: { colors: ['transparent', 'transparent'] },
          borderWidth: 0,
          margin: 0,
          minBorderMargin: 0,
          labelMargin: 20,
          hoverable: true,
          clickable: true,
          mouseActiveRadius: 6,
        },
        xaxis: {
          min: 1,
          tickLength: 0,
          axisLabelUseCanvas: true,
          axisLabelFontSizePixels: 13,
          axisLabelPadding: 15,
        },
        colors: ['#c4c2ff', '#3689ff', '#8056ff'],
      });
    },
  },
  mounted() {
    this.createChart(this.getStackedBarChartData());
  },
};
</script>
