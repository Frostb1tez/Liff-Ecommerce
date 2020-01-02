import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './quasar'
import firebase from './config/index.js'
import axios from 'axios'
import('./assets/style.css')

Vue.config.productionTip = false
axios.defaults.baseURL = 'http://localhost:5000/siamproject-dbffa/us-central1/api'
Vue.prototype.$axios = axios

new Vue({
  router,
  store,
  firebase,
  render: h => h(App)
}).$mount('#app')
