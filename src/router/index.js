import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import User from '@/components/User'
import Details from '@/components/Details'
import Login from '@/components/Login'

Vue.use(Router)

let router = new Router({
    scrollBehavior(to, from, savePosition) { //滚动行为
        //console.log(to) //进入的目标对象
        //console.log(from) //离开的路由对象
        //console.log(savePosition)//记录滚动路由坐标
        if (savePosition) {
            return savePosition //针对鼠标点击浏览器前进后台，如果记录到坐标存在就返回出来之前坐标，
        } else {
            return {
                x: 0,
                y: 0
            } //否则都返回默认的（0,0）
        }
    },
    mode: 'history',
    linkActiveClass: 'isActive',
    routes: [{
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
})

export default router