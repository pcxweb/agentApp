import Vue from 'vue'
import one from './serve.vue'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#serve',
  render: h => h(serve)
})
