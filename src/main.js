// cores and libs
import Vue from 'vue'
import App from './app.component.vue'
import VueRouter from 'vue-router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import VueForm from 'vue-form'
import * as VueGoogleMaps from 'vue2-google-maps'

// internal libs
import router from './router'
import store from './store'

Vue.use(VueRouter)
Vue.use(ElementUI)
Vue.use(VueForm)
Vue.use(VueGoogleMaps, {
  load: {
    // key: "AIzaSyDNqFIzbbGHHxOQY1s7dkA5FMWtW6RSyYs",
    key: process.env.VUE_APP_GOOGLE_API_KEY,
    libraries: 'places' // necessary for places input
  }
})
Vue.config.productionTip = false

Vue.router = router

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
