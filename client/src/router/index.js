import Vue from 'vue';
import Router from 'vue-router';
import Main from '@/components/Main';
import Login from '@/components/Login';
import Register from '@/components/Register';
import Mailbox from '@/components/Mailbox';
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
        },
        {
            path: '/mailbox',
            component: Mailbox,
            name: 'mailbox',
        }
    ],
});
