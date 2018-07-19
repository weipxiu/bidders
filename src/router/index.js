import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import User from '@/components/User'

Vue.use( Router )

let router = new Router( {
    mode: 'history',
    linkActiveClass: 'is-active',
    routes: [ {
            path: '/',
            name: 'User',
            component: User
        },
        {
            path: '/home',
            name: 'Home',
            component: Home
        },
        {
            path: '*',
            redirect: '/'
        }
    ]
} )

export default router