import Vue from 'vue'
import App from './App.vue'
import "../node_modules/bulma/css/bulma.css"
import VueRouter from 'vue-router';
import { routes } from './routes';

import ECharts from 'vue-echarts '  
 
import 'echarts/lib/chart/bar' 
import 'echarts/lib/component/tooltip ' 
 
import 'echarts-gl' 
 
Vue.componente('v-chart', ECharts)
Vue.use(VueRouter);

const router = new VueRouter({
  routes,
  mode: 'history'
})

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
