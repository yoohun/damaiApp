<template>
  <div class="outdiv">
    <div class="top">
      <router-link to='/city'>
        <div class="top-pos">
          <span class="iconfont">&#xe645;</span>
          {{this.city}}
        </div>
      </router-link>
      <div class="top-mid">
        <span class="iconfont">&#xe639;</span>
        <input type="text" placeholder="影子神偷" class="top-mid-input" v-model="searchcontent">
      </div>
      <div class="top-right">
        <span class="iconfont scan">&#xe633;</span>
        <span class="iconfont">&#xe637;</span>
      </div>
    </div>
    <div class="searchul" ref="searchtext" v-show="this.searchcontent">
      <ul>
        <li class="border-bottom" @click="liclick" v-for="(item, index) of list" :key="index">{{item}}</li>
        <li v-show="nofind">找不到对应的内容</li>
      </ul>
    </div>
  </div>
</template>

<script>
import Bscroll from 'better-scroll'
import { mapState } from 'vuex'
export default {
  name: 'homeheader',
  computed: {
    ...mapState(['city']),
    nofind () {
      return !this.list.length
    }
  },
  data () {
    return {
      searchcontent: '',
      list: [],
      allmessage: ['周杰伦', '吴青峰', '林俊杰', '邓紫棋', '黄渤', '张艺兴', '吴世勋', '金世润', '刘浩然', '杨紫', '娄艺潇']
    }
  },
  methods: {
    liclick () {
      console.log(1)
    }
  },
  watch: {
    searchcontent () {
      if (this.timer) {
        clearTimeout(this.timer)
      }
      if (!this.searchcontent) {
        this.list = []
        return
      }
      this.timer = setTimeout(() => {
        const result = []
        this.allmessage.forEach((value) => {
          if (value.indexOf(this.searchcontent) > -1) {
            result.push(value)
          }
        })
        this.list = result
      }, 10)
    }
  },
  mounted () {
    this.scroll = new Bscroll(this.$refs.searchtext, {
      click: true
    })
  }
}
</script>

<style>
  .searchul{
    position: absolute;
    bottom:1.09rem;
    top: .84rem;
    left: 0;
    right: 0;
    z-index: 9;
    background: #ffffff;
    overflow: hidden;
  }
  .searchul li{
    line-height: .7rem;
    font-size: .3rem;
    padding-left: .3rem;
    background: #ffffff;
  }
  .top{
    height: 0.84rem;
    width: 100%;
    line-height: 0.84rem;
    padding: 0 0.2rem 0;
    display: flex;
    box-sizing: border-box;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 10;
    background: #ffffff;
  }
  .top-pos{
    min-width: 1rem;
    float: left;
    font-size: 0.26rem;
    padding-right: 0.1rem;
    color: #000000;
  }
  .top-pos .iconfont{
    font-size: 0.3rem;
    color: #000000;
  }
  .top-mid{
    color: #aeaeae;
    flex: 1;
    padding-left: .1rem;
    height: 100%;
    text-align:left;
    font-size: .1rem;
    position: relative;
  }
  .top-mid-input{
    width: 100%;
    border-radius: .2rem;
    position: absolute;
    left: 0;
    right: 0;
    top: 20%;
    bottom: 20%;
    box-sizing: border-box;
    background: #f3f3f3;
    text-indent: .5rem;
  }
  .top-mid .iconfont{
    font-size: 0.3rem;
    margin-right: 0.05rem;
    position: absolute;
    left: .1rem;
    z-index: 10;
  }
  .top-right{
    width:1rem;
    float: right;
    margin-left: 0.2rem;
  }
  .top-right .iconfont{
    font-size: 0.38rem;
  }
  .top-right .scan{
    margin-right: .12rem;
  }
  .top::after{
    content: "";
    height: 0;
    clear: both;
  }
  input:-ms-input-placeholder{
    opacity:1;
  }
  input::-webkit-input-placeholder{
    opacity:1;
  }
</style>
