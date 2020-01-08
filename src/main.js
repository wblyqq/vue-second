// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import 'babel-polyfill'
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from './http/axios'
import elementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import i18n from './i18n'
import store from './store'
import 'font-awesome/css/font-awesome.min.css'
import api from './http/api'
Vue.config.productionTip = false

/* eslint-disable no-new */
Vue.use(elementUI)
Vue.prototype.$axios = axios
Vue.prototype.$api =api
new Vue({
  el: '#app',
  i18n,
  router,
  store,
  components: { App },
  template: '<App/>'
})
