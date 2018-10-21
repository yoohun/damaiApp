<template>
  <div>
    <iconheader></iconheader>
    <iconshaixuan @paixu="paixu"></iconshaixuan>
    <iconcontent :paixunum="paixunum" :iconList="iconList"></iconcontent>
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
      iconname: ''
    }
  },
  methods: {
    paixu (index) {
      this.paixunum = index
    },
    showInfor (res) {
      for (const k in res.data.data) {
        if (k === this.$store.state.iconChoose) {
          this.iconList = res.data.data[k]
        }
      }
    }
  },
  mounted () {
    axios.get('/api/detail.json')
      .then(this.showInfor)
  }
}
</script>

<style>
body{
  background: #ffffff;
}
</style>
