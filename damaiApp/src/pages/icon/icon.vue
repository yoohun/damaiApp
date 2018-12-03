<template>
  <div>
    <iconheader></iconheader>
    <iconshaixuan @paixu="paixu" @chosehide="chosehide" @clickDay="clickDay"></iconshaixuan>
    <iconcontent :key="key" :paixunum="paixunum" :iconList="iconList" :hidenum="hidenum" :clickdate="clickdate"></iconcontent>
  </div>
</template>

<script>
import axios from 'axios'
import iconheader from './components/iconheader'
import iconcontent from './components/iconcontent'
import iconshaixuan from './components/iconshaixuan'
export default {
  name: 'icon',
  components: {
    iconheader,
    iconcontent,
    iconshaixuan
  },
  data () {
    return {
      paixunum: -1,
      iconList: [],
      iconname: '',
      hidenum: 0,
      clickdate: ''
    }
  },
  methods: {
    paixu (index) {
      this.paixunum = index
    },
    chosehide (index) {
      this.hidenum = index
    },
    showInfor (res) {
      for (const k in res.data.data) {
        if (k === this.$store.state.iconChoose) {
          this.iconList = res.data.data[k]
        }
      }
    },
    clickDay (data) {
      this.clickdate = data
      console.log(data)
    },
    getinfor () {
      axios.get('/api/detail.json')
        .then(this.showInfor)
    }
  },
  activated () {
    this.getinfor()
  },
  computed: {
    key () {
      return this.$route.name !== undefined ? this.$route.name + new Date() : this.$route + new Date()
    }
  }
}
</script>

<style>
body{
  background: #ffffff;
}
</style>
