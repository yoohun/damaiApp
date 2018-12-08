// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import fastClick from 'fastclick'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import AMap from 'vue-amap'
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
import 'swiper/dist/css/swiper.css'
import './assets/style/reset.css'
import './assets/style/border.css'
import './assets/style/iconfont.css'

Vue.config.productionTip = false
fastClick.attach(document.body)
Vue.use(MintUI)
Vue.use(VueAwesomeSwiper)
Vue.use(AMap)
AMap.initAMapApiLoader({
  key: 'f344ecdb9ad25931372e524301dcb7ba',
  plugin: ['AMap.Autocomplete', 'AMap.PlaceSearch', 'AMap.Scale', 'AMap.OverView', 'AMap.ToolBar', 'AMap.MapType', 'AMap.PolyEditor', 'AMap.CircleEditor']
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
