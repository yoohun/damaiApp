<template>
  <div>
    <homeheader :city="city"></homeheader>
    <homeswiper :swiperList="swiperList"></homeswiper>
    <homeicon :iconList="iconList"></homeicon>
    <tuijian :tjTopList="tjTopList" :tjBottomList="tjBottomList"></tuijian>
    <hwsc></hwsc>
    <ych></ych>
    <hjyyj></hjyyj>
    <tyjj></tyjj>
    <cnxh></cnxh>
    <homenav></homenav>
  </div>
</template>

<script>
import homeheader from './components/homeheader'
import homeswiper from './components/homeswiper'
import homeicon from './components/homeicon'
import tuijian from './components/tuijian'
import hwsc from './components/hwsc'
import ych from './components/ych'
import hjyyj from './components/hjyyj'
import tyjj from './components/tyjj'
import cnxh from './components/cnxh'
import homenav from './components/homenav'
import axios from 'axios'
export default {
  name: 'home',
  data () {
    return {
      city: '',
      swiperList: [],
      iconList: [],
      tjTopList: [],
      tjBottomList: []
    }
  },
  components: {
    homeheader,
    homeswiper,
    homeicon,
    tuijian,
    hwsc,
    ych,
    hjyyj,
    tyjj,
    cnxh,
    homenav
  },
  methods: {
    getIndexInfor () {
      axios.get('/api/index.json')
        .then(this.showInfor)
    },
    showInfor (res) {
      res = res.data
      if (res.ret && res.data) {
        this.city = res.data.city
        this.swiperList = res.data.swiperList
        this.iconList = res.data.iconList
        this.tjTopList = res.data.tjTopList
        this.tjBottomList = res.data.tjBottomList
      }
    }
  },
  mounted () {
    this.getIndexInfor()
  }
}
</script>

<style>
</style>
