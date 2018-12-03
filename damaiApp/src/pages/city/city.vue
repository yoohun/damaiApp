<template>
  <div class="cityAll">
    <cityheader :allcity="allcity"></cityheader>
    <ddcity :hotcity="hotcity" :allcity="allcity" :letter="letter"></ddcity>
    <alphebet :allcity="allcity" @change="changeLetter"></alphebet>
  </div>
</template>

<script>
import axios from 'axios'
import cityheader from './components/cityheader'
import ddcity from './components/dingdiancity'
import alphebet from './components/alphebet'
export default {
  name: 'city',
  data () {
    return {
      hotcity: [],
      allcity: {},
      letter: '',
      includedComponents: 'citycomponents'
    }
  },
  components: {
    cityheader,
    ddcity,
    alphebet
  },
  methods: {
    getCityInfor () {
      axios.get('/api/city.json')
        .then(this.getInfor)
    },
    getInfor (res) {
      const ress = res.data
      if (ress.ret && ress.data) {
        const res = ress.data
        this.hotcity = res.hotCities
        this.allcity = res.cities
      }
    },
    changeLetter (letter) {
      this.letter = letter
    }
  },
  mounted () {
    this.getCityInfor()
  }
}
</script>

<style>
.cityAll{
  background: #F0F4F3;
}
</style>
