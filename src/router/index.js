import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import User from '@/components/User'
import Details from '@/components/Details'

Vue.use( Router )

let router = new Router( {
    mode: 'history',
    linkActiveClass: 'is-active',
    routes: [ {
            path: '/',
            name: 'Details',
            component: Details
        },
        {
            path: '/home',
            name: 'Home',
            component: Home
        },
        {
            path: '/user',
            name: 'User',
            component: User
        },
        {
            path: '*',
            redirect: '/'
        }
    ]
} )

export default router