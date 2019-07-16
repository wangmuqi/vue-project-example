// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import 'babel-polyfill'
import Vue from 'vue'
import App from '@/layout/App'
import router from '@/router'
import store from '@/store'
import '@/mixins'
import '@/filters'

Vue.config.productionTip = false

/* eslint-disable no-new */
window.rootVueInstance = new Vue({
  el: '#app',
  router,
  store,
  components: {App},
  template: '<App/>'
})
