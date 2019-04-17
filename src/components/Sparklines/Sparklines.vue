<template>
  <div class="sparkline" ref="sparkline" />
</template>

<script>
import $ from 'jquery';
/* eslint-disable */
import 'imports-loader?jQuery=jquery,this=>window!jquery-sparkline';
/* eslint-enable */

export default {
  name: 'Sparklines',
  props: {
    data: { type: Array, default: () => [] },
    options: { type: Object, default: () => {} },
  },
  methods: {
    initSparkline() {
      const $el = $(this.$refs.sparkline);

      const model = $.type(this.data) === 'string' ?
        this.data.replace(/(^,)|(,$)/g, '')
        : this.data;
      const options = this.options;

      if ($.type(model) === 'array' && $.type(options) === 'array') {
        options.forEach((singleOptions, i) => {
          if (i === 0) {
            $el.sparkline(model[i], singleOptions);
          } else { // set composite for next calls
            $el.sparkline(model[i], $.extend({ composite: true }, singleOptions));
          }
        });
      } else {
        const data = $.type(model) === 'array' ? model : model.split(',');
        $el.sparkline(data, options);
      }
    },
  },
  mounted() {
    this.initSparkline();
  },
}
</script>
