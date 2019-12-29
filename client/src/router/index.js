import Vue from 'vue';
import Router from 'vue-router';
import Main from '@/components/Main';
import Login from '@/components/Login';

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
        }
    ],
});
