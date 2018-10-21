import Vue from 'vue'
import Router from 'vue-router'
import home from '@/pages/home/home'
import city from '@/pages/city/city'
import icon from '@/pages/icon/icon'
import detail from '@/pages/detail/detail'
import chooseweizi from '@/pages/detail/chooseweizi'
import dingdan from '@/pages/detail/dingdan'
import dingdanaddress from '@/pages/detail/dingdanaddress'
import map from '@/pages/map/map'
import myself from '@/pages/myself/myself'
import setting from '@/pages/myself/setting'
import aboutdamai from '@/pages/myself/about'
import login from '@/pages/myself/login'
import regist from '@/pages/myself/regist'
import changezh from '@/pages/myself/changezh'
import mydingdan from '@/pages/myself/mydingdan'
import setuserinfor from '@/pages/myself/setuserinfor'
import help from '@/pages/myself/help'

Vue.use(Router)
export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: home
    }, {
      path: '/city',
      name: 'city',
      component: city
    }, {
      path: '/icon',
      name: 'icon',
      component: icon,
      meta: {
        keepAlive: false // 不需要缓存
      }
    }, {
      path: '/detail',
      name: 'detail',
      component: detail
    }, {
      path: '/map',
      name: 'map',
      component: map
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
    }

  ]
})
