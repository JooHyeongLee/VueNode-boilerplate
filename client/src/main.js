// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import VueSweetalert2 from 'vue-sweetalert2'
import keys from '../config/keys.js'
import * as VueGoogleMaps from 'vue2-google-maps'

Vue.use(VueSweetalert2)
Vue.config.productionTip = false
Vue.use(VueGoogleMaps, {
  load: {
    key: keys.GOOGLE_MAP,
    libraries: 'places'
  }
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
