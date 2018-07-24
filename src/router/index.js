import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import User from '@/components/User'
import Details from '@/components/Details'
import Login from '@/components/Login'

Vue.use( Router )

let router = new Router( {
    mode: 'history',
    linkActiveClass: 'isActive',
    routes: [ {
            path: '/',
            name: 'Home',
            component: Home
        },
        {
            path: '/login',
            name: 'Login',
            component: Login
        },
        {
            path: '/details:xxx?',
            name: 'Details',
            component: Details
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