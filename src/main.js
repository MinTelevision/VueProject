import Vue from 'vue'
import router from './configs/router.js'
import axios from 'axios'
import $ from 'jquery'
import store from './store'

Vue.prototype.$axios = axios
Vue.config.productionTip = false
Vue.prototype.$ = $


new Vue({
  el:'#app',
  store,
  render: h => h('router-view'),
  router
})
