<template>
  <div>
    <detailheader :headerup="headerup" :xqheight="xqheight" :xzheight="xzheight" :tjheight="tjheight" :indexNum="indexNum" :detailtitle="detailtitle"></detailheader>
    <detailcontent :key="key" @showxq="showxq" @showxz="showxz" @showtj="showtj" @settitle="settitle"></detailcontent>
    <detailbottom></detailbottom>
  </div>
</template>

<script>
import detailheader from './components/detail/detailheader'
import detailcontent from './components/detail/detailcontent'
import detailbottom from './components/detail/detailbottom'
export default {
  name: 'detail',
  data () {
    return {
      headerup: true,
      iconid: '',
      detailcontent: {},
      xqheight: 0,
      xzheight: 0,
      tjheight: 0,
      indexNum: 0,
      detailtitle: ''
    }
  },
  components: {
    detailheader,
    detailcontent,
    detailbottom
  },
  methods: {
    handleScroll () {
      var scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
      if (scrollTop) {
        this.headerup = false
        if (scrollTop > 0 && scrollTop < this.xqheight) {
          this.indexNum = 0
        } else if (scrollTop >= this.xqheight && scrollTop < this.xzheight) {
          this.indexNum = 1
        } else if (scrollTop >= this.xzheight && scrollTop < this.tjheight) {
          this.indexNum = 2
        } else if (scrollTop >= this.tjheight) {
          this.indexNum = 3
        }
      } else {
        this.headerup = true
      }
    },
    showxq (value) {
      this.xqheight = value
    },
    showxz (value) {
      this.xzheight = value
    },
    showtj (value) {
      this.tjheight = value
    },
    settitle (title) {
      this.detailtitle = title
    }
  },
  mounted () {
    window.addEventListener('scroll', this.handleScroll)
  },
  computed: {
    key () {
      return this.$route.name !== undefined ? this.$route.name + new Date() : this.$route + new Date()
    }
  }
}
</script>

<style>
</style>
