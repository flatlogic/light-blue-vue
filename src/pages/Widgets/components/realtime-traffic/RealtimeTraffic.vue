<template>
  <div>
    <h4 class="mb-lg">Recent <span class="fw-semi-bold">Update</span></h4>
    <h6>Node.js <span class="fw-semi-bold">4.0.1 distribution</span></h6>
    <b-progress class="bg-gray-lighter progress-xs" variant="danger" :value="77" :max="100" />
    <p class="mt-sm mb fs-mini ">
      <small><span class="circle bg-warning text-gray-dark"><i
        class="glyphicon glyphicon-chevron-up"
      /></span></small>
      <strong class="px-1">17% higher</strong>
      than last month
    </p>
    <p class="fs-sm text-gray-lighter mb-0">Remaining hours</p>
    <a class="btn btn-xs btn-gray pull-right ml-xs" href="#">
      <i class="fa fa-compress" /> track
    </a>
    <a class="btn btn-xs btn-gray pull-right" href="#">
      <i class="fa fa-pause" /> pause
    </a>
    <p class="value4">2h 56m</p>
    <br />
    <div class="mt-xlg chart-overflow-bottom">
      <area-chart class="area-chart" height="100"
                  :options="{legend: false, scales: {yAxes: [{display: false}], xAxes: [{display: false}]}}"
                  :chart-data="dataCollection"/>
    </div>
  </div>
</template>

<script>

import AreaChart from "../../../Visits/components/AreaChart/AreaChart";

export default {
  name: 'RealtimeTraffic',
  components: {
    AreaChart
  },
  methods: {
    fillData () {
      this.dataCollection = {
        labels: [this.getRandomInt(), this.getRandomInt(), this.getRandomInt(), this.getRandomInt(), this.getRandomInt(), this.getRandomInt(), this.getRandomInt()],
        datasets: [
          {
            label: 'Data One',
            borderColor: '#ef4039',
            fill: false,
            data: [this.getRandomInt(), this.getRandomInt(), this.getRandomInt(), this.getRandomInt(), this.getRandomInt(), this.getRandomInt(), this.getRandomInt()]
          }, {
            label: 'Data Two',
            backgroundColor: '#25353d',
            borderColor: 'transparent',
            data: [this.getRandomInt(), this.getRandomInt(), this.getRandomInt(), this.getRandomInt(), this.getRandomInt(), this.getRandomInt(), this.getRandomInt()]
          }
        ]
      }
    },
    getRandomInt () {
      return Math.floor(Math.random() * (50 - 5 + 1)) + 5
    }
  },
  data() {
    return {
      dataCollection: null,
    };
  },
  mounted () {
    this.fillData();
  }
};
</script>
