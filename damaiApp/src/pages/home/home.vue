<template>
  <div>
    <homeheader></homeheader>
    <homeswiper :swiperList="swiperList"></homeswiper>
    <homeicon :iconList="iconList"></homeicon>
    <tuijian :tjTopList="tjTopList" :tjBottomList="tjBottomList"></tuijian>
    <hwsc :hwscList="hwscList"></hwsc>
    <ych :ychSImg="ychSImg" :ychItem="ychItem"></ych>
    <hjyyj :hjyyjItem="hjyyjItem"></hjyyj>
    <tyjj :tyItem="tyItem"></tyjj>
    <cnxh :cnxhItem="cnxhItem"></cnxh>
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
import { mapState } from 'vuex'
export default {
  name: 'home',
  data () {
    return {
      lastCity: '',
      swiperList: [],
      iconList: [],
      tjTopList: [],
      tjBottomList: [],
      cnxhItem: [],
      tyItem: [],
      ychSImg: [],
      ychItem: [],
      hjyyjItem: [],
      hwscList: []
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
      axios.get('/api/index.json?city=' + this.city)
        .then(this.showInfor)
    },
    showInfor (res) {
      res = res.data
      if (res.ret && res.data) {
        this.swiperList = res.data.swiperList
        this.iconList = res.data.iconList
        this.tjTopList = res.data.tjTopList
        this.tjBottomList = res.data.tjBottomList
        this.cnxhItem = res.data.cnxhItem
        this.tyItem = res.data.tyItem
        this.ychSImg = res.data.ychSImg
        this.ychItem = res.data.ychItem
        this.hjyyjItem = res.data.hjyyjItem
        this.hwscList = res.data.hwscList
      }
    }
  },
  computed: {
    ...mapState(['city'])
  },
  mounted () {
    this.lastCity = this.city
    this.getIndexInfor()
    console.log(this.city)
  },
  activated () {
    if (this.lastCity !== this.city) {
      this.lastCity = this.city
      this.getIndexInfor()
    }
  }
}
</script>

<style>
</style>
