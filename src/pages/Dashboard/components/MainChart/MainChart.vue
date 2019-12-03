<template>
  <Widget
    bodyClass="mt"
    class="mb-xlg"
    id="main-chart"
    title="
        <div class='row'>
          <div class='col-sm-5 col-xs-12'>
            <h5>
              Daily <span class='fw-semi-bold'>Line Chart</span>
            </h5>
          </div>
          <div class='col-xs-12 col-sm-7'>
            <div class='chart-legend' />
          </div>
        </div>
      "
      customHeader
    collapse close
    :fetchingData="isReceiving"
    >
    <highcharts :options="chartData"></highcharts>
  </Widget>
</template>

<script>
import Widget from '@/components/Widget/Widget';
import { Chart } from 'highcharts-vue';
import Highcharts from 'highcharts';

export default {
  name: 'MainChart',
  components: { Widget, highcharts: Chart },
  data() {
    return {
      chartOptions: {
        credits: {
          enabled: false
        },
        chart: {
          height: 350,
          backgroundColor: 'transparent'
        },
        title: false,
        exporting: {
          enabled: false
        },
        legend: {
          verticalAlign: 'top',
          itemStyle: {
            color: '#fff'
          }
        },
        yAxis: {
          gridLineColor: '#040620',
          title: false,
          labels: {
            style: {
              color: '#fff'
            }
          },
        },
        xAxis: {
          type: 'datetime',
          labels: {
            overflow: 'justify',
            style: {
              color: '#fff'
            }
          },
        },
        annotations: {
          visible: false
        },
        plotOptions: {
          series: {
            marker: {
              enabled: false,
              symbol: 'circle'
            },
            pointInterval: 3600000 * 25, // every day
            pointStart: Date.UTC(2018, 12, 19, 0, 0, 0),
            tooltip: {
              pointFormatter() {
                return `<span style="color: ${this.color}">${this.series.name} at ${this.y.toFixed(2)}</span>`;
              }
            }
          },
        }
      },
      ticks: ['Dec 19', 'Dec 25', 'Dec 31', 'Jan 10', 'Jan 14',
        'Jan 20', 'Jan 27', 'Jan 30', 'Feb 2', 'Feb 8', 'Feb 15',
        'Feb 22', 'Feb 28', 'Mar 7', 'Mar 17']
    };
  },
  props: {
    data: {default: []},
    isReceiving: {type: Boolean, default: false},
  },
  computed: {
    chartData() {
      let data = this.data.map(arr => {
        return arr.map(item => {
          return item[1]
        });
      });
      return {
        ...this.chartOptions,
        series: [
          {
            name: 'Light Blue',
            data: data[0],
            color: '#F45722',
            type: 'areaspline',
            fillColor: {
              linearGradient: [0, 0, 0, 220],
              stops: [
                [0, '#F45722'],
                [1, Highcharts.Color("#F45722").setOpacity(0).get('rgba')]
              ]
            }
          },
          {
            type: 'spline',
            name: 'RNS App',
            data: data[1],
            color: '#58D777',
            dashStyle: 'Dash'
          },
          {
            type: 'spline',
            name: 'Sing App',
            data: data[2],
            color: '#1870DC'
          }
        ]
      }
    }
  },
};
</script>
