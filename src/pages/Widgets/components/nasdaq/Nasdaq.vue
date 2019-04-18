<template>
  <Sparklines :data="data" :options="options" />
</template>

<script>
import $ from 'jquery';
import Sparklines from '@/components/Sparklines/Sparklines';

export default {
  name: 'Nasdaq',
  components: { Sparklines },
  data() {
    return {
      data: [4, 6, 5, 7, 5],
      options: {
        type: 'line',
        width: '99%',
        height: '60',
        lineColor: '#ff515b',
        fillColor: 'transparent',
        spotRadius: 5,
        spotColor: '#ff515b',
        valueSpots: { '0:': '#ff515b' },
        highlightSpotColor: '#fff',
        highlightLineColor: '#f8f9fa',
        minSpotColor: '#ff515b',
        maxSpotColor: '#ff515b',
        tooltipFormat: new $
          .SPFormatClass('<span style="color: white">&#9679;</span> {{prefix}}{{y}}{{suffix}}'),
        chartRangeMin: Math.min.apply(null, this.data) - 1,
      },
    };
  },
};
</script>
