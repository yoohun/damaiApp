import Vue from 'vue'
import Router from 'vue-router'
import home from '@/pages/home/home'
import city from '@/pages/city/city'
import icon from '@/pages/icon/icon'
import detail from '@/pages/detail/detail'
import chooseweizi from '@/pages/detail/chooseweizi'
import dingdan from '@/pages/detail/dingdan'
import dingdanaddress from '@/pages/detail/dingdanaddress'
import myself from '@/pages/myself/myself'
import setting from '@/pages/myself/setting'
import aboutdamai from '@/pages/myself/about'
import login from '@/pages/myself/login'
import regist from '@/pages/myself/regist'
import changezh from '@/pages/myself/changezh'
import mydingdan from '@/pages/myself/mydingdan'
import setuserinfor from '@/pages/myself/setuserinfor'
import help from '@/pages/myself/help'
import eachmap from '@/pages/detail/eachmap'

Vue.use(Router)
export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: home,
      meta: {
        keepAlive: true
      }
    }, {
      path: '/city',
      name: 'city',
      component: city
    }, {
      path: '/icon',
      name: 'icon',
      component: icon,
      meta: {
        keepAlive: true
      }
    }, {
      path: '/detail',
      name: 'detail',
      component: detail,
      meta: {
        keepAlive: false
      }
    }, {
      path: '/detail/chooseweizi',
      name: 'chooseweizi',
      component: chooseweizi
    }, {
      path: '/detail/dingdan',
      name: 'dingdan',
      component: dingdan
    }, {
      path: '/detail/dingdanaddress',
      name: 'dingdanaddress',
      component: dingdanaddress
    }, {
      path: '/myself',
      name: 'myself',
      component: myself
    }, {
      path: '/myself/setting',
      name: 'setting',
      component: setting
    }, {
      path: '/myself/about',
      name: 'about',
      component: aboutdamai
    }, {
      path: '/myself/login',
      name: 'login',
      component: login
    }, {
      path: '/myself/regist',
      name: 'regist',
      component: regist
    }, {
      path: '/myself/changezh',
      name: 'changezh',
      component: changezh
    }, {
      path: '/myself/mydingdan',
      name: 'mydingdan',
      component: mydingdan
    }, {
      path: '/myself/setuserinfor',
      name: 'setuserinfor',
      component: setuserinfor
    }, {
      path: '/myself/help',
      name: 'help',
      component: help
    }, {
      path: '/detail/eachmap',
      name: 'eachmap',
      component: eachmap
    }
  ],
  scrollBehavior (to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      if (from.meta.keepAlive) {
        from.meta.savedPosition = document.body.scrollTop
      }
      return { x: 0, y: to.meta.savedPosition || 0 }
    }
  }
})
