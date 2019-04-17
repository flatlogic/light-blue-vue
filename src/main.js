// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import 'expose-loader?jQuery!jquery' // eslint-disable-line
import 'expose-loader?$!jquery' // eslint-disable-line
import Vue from 'vue';
import BootstrapVue from 'bootstrap-vue';
import VCalendar from 'v-calendar';
import * as VueGoogleMaps from 'vue2-google-maps';
import VueTextareaAutosize from 'vue-textarea-autosize';
import trumbowyg from 'vue-trumbowyg';
import mavonEditor from 'mavon-editor';
import { VueMaskDirective } from 'v-mask';
import VueSlider from 'vue-slider-component';
import VeeValidate from 'vee-validate';
import VueFormWizard from 'vue-form-wizard';
import { ClientTable } from 'vue-tables-2';
import Trend from 'vuetrend';

import store from './store';
import router from './Routes';
import App from './App';

Vue.use(BootstrapVue);

Vue.use(VueGoogleMaps, {
  load: {
    key: 'AIzaSyB7OXmzfQYua_1LEhRdqsoYzyJOPh9hGLg',
  },
});

Vue.use(VCalendar, {
  firstDayOfWeek: 2,  // Monday
});

Vue.use(VueTextareaAutosize);
Vue.use(trumbowyg);
Vue.use(mavonEditor);
Vue.directive('mask', VueMaskDirective);
Vue.component('VueSlider', VueSlider);
Vue.use(VeeValidate, { fieldsBagName: 'fieldsbag' });
Vue.use(VueFormWizard);

Vue.use(ClientTable, { theme: 'bootstrap4' });
Vue.use(Trend);

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  render: h => h(App),
});
