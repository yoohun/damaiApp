<template>
  <div>
    <div class="city">
      <router-link to='/'>
        <div class="cityLeft">
        <span class="iconfont">&#xe625;</span>
      </div>
      </router-link>
      <div class="cityRight">
        <input v-model="searchword" type="text" placeholder="请输入城市名称">
      </div>
    </div>
    <div class="cityUl" ref="search" v-show="searchword">
      <ul>
        <li v-for="item of list" :key="item.id" class="border-bottom searchLi" @click="cityclick(item.name)">{{item.name}}</li>
        <li class="border-bottom searchLi" v-show="hasnodata">找不到对应的城市</li>
      </ul>
    </div>
  </div>
</template>

<script>
import Bscroll from 'better-scroll'
export default {
  name: 'cityheader',
  props: {
    allcity: Object
  },
  data () {
    return {
      searchword: '',
      list: [],
      timer: null
    }
  },
  computed: {
    hasnodata () {
      return !this.list.length
    }
  },
  methods: {
    cityclick (city) {
      this.$store.commit('changeCity', city)
      this.$router.push('/')
    }
  },
  watch: {
    searchword () {
      if (this.timer) {
        clearTimeout(this.timer)
      }
      if (!this.searchword) {
        this.list = []
        return
      }
      this.timer = setTimeout(() => {
        const result = []
        for (let i in this.allcity) {
          this.allcity[i].forEach((value) => {
            if (value.spell.indexOf(this.searchword) > -1 || value.name.indexOf(this.searchword) > -1) {
              result.push(value)
            }
          })
        }
        this.list = result
      }, 100)
    }
  },
  mounted () {
    this.scroll = new Bscroll(this.$refs.search, {
      click: true
    })
  }
}
</script>

<style>
.city{
  line-height: .78rem;
  display: flex;
  padding: 0 .3rem;
  background: #ffffff;
  position: fixed;
  top:0;
  left: 0;
  right:0;
  z-index: 10;
}
.cityLeft{
  width: .4rem;
  line-height: .78rem;
}
.cityRight{
  flex: 1;
}
.cityRight input{
  width: 100%;
  border-radius: .5rem;
  text-indent: .2rem;
  font-size: .1rem;
  line-height: .55rem;
  background: #F0F4F3;
}
.cityRight input::-webkit-input-placeholder{
  color: #d0d0d0;
  font-size: .1rem;
}
.cityUl{
  position: absolute;
  top:.4rem;
  left: 0;
  right: 0;
  bottom: 0;
  background: #ffffff;
  z-index: 1;
}
.searchLi{
  line-height: .5rem;
  padding-left: .3rem;
}
</style>
