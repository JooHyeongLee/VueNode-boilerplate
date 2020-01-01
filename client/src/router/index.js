import Vue from 'vue';
import Router from 'vue-router';
import Main from '@/components/Main';
import Login from '@/components/Login';
import Register from '@/components/Register';
Vue.use(Router);

export default new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
            component: Main,
            name: 'main',
        },
        {
            path: '/login',
            component: Login,
            name: 'login',
            meta: {bodyClass: 'gray-bg'},
        },
        {
            path: '/register',
            component: Register,
            name: 'register',
            meta: {bodyClass: 'gray-bg'},
        }
    ],
});
