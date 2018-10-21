<template>
  <div class="cityAll" ref="wrapper">
    <div>
      <div class="poCity">
        <div class="dwDiv">当前定位城市</div>
        <div class="dqCity">
          <span class="localCity">{{this.thiscity}}</span>
          <div class="cxdw">
            <span class="iconfont">&#xe645;</span>
            重新定位
          </div>
        </div>
      </div>
      <div class="rmCity">
        <div class="rmCity-title">
          热门城市
        </div>
        <div class="cityList">
          <div class="cityItem" @click="cityclick(city.name)" v-for="city of hotcity" :key="city.id">
            <span>
              {{city.name}}
            </span>
          </div>
        </div>
      </div>
      <div class="qbCity">
        <div class="qbCity-title">
          <div class="rmCity-title">
            全部城市
          </div>
        </div>
        <div class="cityName">
          <div class="area" v-for="(cities, key) of allcity" :key="key" :ref="key">
            <div class="cityAlphe">{{key}}</div>
            <div class="cityAlpheList">
              <div class="cityAlpheItem" v-for="innerItem of cities" :key="innerItem.id" @click="cityclick(innerItem.name)">{{innerItem.name}}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Bscroll from 'better-scroll'
export default {
  name: 'ddcity',
  props: {
    hotcity: Array,
    allcity: Object,
    letter: String
  },
  data () {
    return {
      thiscity: ''
    }
  },
  methods: {
    cityclick (city) {
      this.$store.commit('changeCity', city)
      this.$router.push('/')
    }
  },
  watch: {
    letter () {
      if (this.letter) {
        const element = this.$refs[this.letter][0]
        this.scroll.scrollToElement(element)
      }
    }
  },
  mounted () {
    this.scroll = new Bscroll(this.$refs.wrapper, {
      click: true
    })
    this.thiscity = localStorage.getItem('city')
    console.log(localStorage.getItem('city'))
  }
}
</script>

<style>
.cityAll{
  overflow: hidden;
  position: absolute;
  top:.4rem;
  left: 0;
  right:0;
  bottom:0;
}
.dwDiv{
  height: .48rem;
  line-height: .48rem;
  font-size: .1rem;
  padding-left: .4rem;
  color: #929292;
}
.dqCity{
  padding: 0 .4rem;
  font-size: .2rem;
  background: #ffffff;
  display: flex;
}
.localCity{
  flex: 1;
  line-height: .54rem;
}
.cxdw{
  flex: 1;
  line-height: .54rem;
  text-align: right;
}
.dqCity::after{
  content: "";
  height: 0;
  clear: both;
}
.rmCity{
  margin-top: .12rem;
  background: #ffffff;
  padding: .2rem;
}
.rmCity-title{
  border-left: .04rem solid crimson;
  padding-left: .15rem;
  margin-bottom: .1rem;
  font-size: .26rem;
}
.cityList{
  display: flex;
  flex-wrap: wrap;
  overflow: hidden;
  padding-right: .4rem;
}
.cityItem{
  padding: .1rem .2rem;
  border-radius: .28rem;
  border: 1px solid #cacaca;
  color: #afafaf;
  display: inline-block;
  font-size: .1rem;
  margin:.1rem;
}
.qbCity{
  margin-top: .1rem;
}
.qbCity-title{
  background: #ffffff;
  padding: .2rem;
}
.cityAlphe{
  line-height: .5rem;
  padding-left: .3rem;
  font-size: .24rem;
  color: #616161;
}
.cityAlpheItem{
  background: #ffffff;
  line-height: .56rem;
  padding-left: .3rem;
}
</style>
