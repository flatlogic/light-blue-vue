<template>
  <div class="changes-chart">
    <div class="chart bg-success btlr btrr">
      <p class="chartValue"><i class="fa fa-caret-up" /> 352.79</p>
      <p class="chartValueChange">+2.04 (1.69%)</p>
      <bar-chart class="area-chart" height="100px" :options="{legend: false, scales: {yAxes: [{display: false}], xAxes: [{display: false}]}}"  :chart-data="dataCollection"></bar-chart>
    </div>
    <h4 class="chartTitle"><span class="fw-normal">Salt Lake City</span>, Utah</h4>
    <p class="deemphasize">Today 13:34</p>
    <div class="mt">
      <b-row>
        <b-col xs='6'>
          <p class="h4 m-0">18.7M</p>
          <p class="deemphasize">Shares Traded</p>
        </b-col>
        <b-col xs='6' class="text-right">
          <p class="h4 m-0">19.9B</p>
          <p class="deemphasize">Market Cap</p>
        </b-col>
      </b-row>
    </div>
    <div class="mt">
      <b-row>
        <b-col xs='6'>
          <p class="h3 m-0 text-success fw-semi-bold">+120.93</p>
          <p class="deemphasize">Yearly Change</p>
        </b-col>
        <b-col xs='6' class="text-right">
          <div class="sparkline" ref="sparkline" />
          <Sparklines :data="sparklineData" :options="sparklineOptions" />
          <p class="deemphasize">GOOG</p>
        </b-col>
      </b-row>
    </div>
  </div>
</template>

<script>
import $ from 'jquery';
import Sparklines from '@/components/Sparklines/Sparklines';
import BarChart from "../../../Visits/components/BarChart/BarChart";

export default {
  name: 'ChangesChart',
  components: {
    Sparklines,
    BarChart
  },
  data() {
    return {
      sparklineData: [],
      sparklineOptions: {},
      dataCollection: null,
    };
  },
  methods: {
    initSparkline() {
      const data = [3, 6, 2, 4, 5, 8, 6, 8];
      const dataMax = Math.max.apply(null, data);
      const backgroundData = data.map(() => dataMax);

      this.sparklineData = [backgroundData, data];
      this.sparklineOptions = [
        {
          type: 'bar',
          height: 26,
          barColor: '#eee',
          barWidth: 7,
          barSpacing: 5,
          chartRangeMin: Math.min.apply(null, data),
          tooltipFormat: new $.SPFormatClass(''),
        },
        {
          composite: true,
          type: 'bar',
          barColor: '#64bd63',
          barWidth: 7,
          barSpacing: 5,
        },
      ];
    },
    fillData () {
      this.dataCollection = {
        labels: new Array(20).fill().map(() => this.getRandomInt()),
        datasets: [
          {
            label: 'Data One',
            backgroundColor: 'rgba(0,0,0,.1)',
            borderColor: 'transparent',
            data: new Array(20).fill().map(() => this.getRandomInt())
          }, {
            label: 'Data Two',
            backgroundColor: 'rgba(255,255,255,.15)',
            borderColor: 'transparent',
            data: new Array(20).fill().map(() => this.getRandomInt())
          }
        ]
      }
    },
    getRandomInt () {
      return Math.floor(Math.random() * (50 - 5 + 1)) + 5
    }
  },
  mounted () {
    this.fillData();
  },
};
</script>

<style src="./ChangesChart.scss" lang="scss" scoped />
