// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import router from './router';
import VueSweetalert2 from 'vue-sweetalert2';
import vbclass from 'vue-body-class';
import {store} from './store.js';

Vue.use(VueSweetalert2);
Vue.config.productionTip = false;
Vue.use(vbclass, router);

/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    template: '<App/>',
    store,
    components: { App },
});
