import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './plugins/vuelogger'

import 'nprogress/nprogress.css' // Progress 进度条样式

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
