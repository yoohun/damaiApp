<template>
  <div class="payfor">
    <span class="payTitle">选择支付方式</span>
    <div class="payList"  @click="chosepay">
      <div class="border-bottom" title="1">
        <div class="payImg"  title="1">
          <img src="../../../../../static/imgs/zhifubao.png" alt="" title="1">
          <span  title="1">支付宝</span>
        </div>
        <div>
          <span class="iconfont iconfontspan" :class="{iconfontclick:click==zfb}" title="1">&#xe63c;</span>
        </div>
      </div>
      <div class="border-bottom"  title="2">
        <div class="payImg"  >
          <img src="../../../../../static/imgs/mayihuabei.png" alt="" title="2">
          <span  title="2">蚂蚁花呗分期</span>
        </div>
        <div>
          <span class="iconfont iconfontspan" :class="{iconfontclick:click==my}" title="2">&#xe63c;</span>
        </div>
      </div>
      <div class="border-bottom" v-show="!hidemore"  title="3">
        <div class="payImg"  title="3">
          <img src="../../../../../static/imgs/weixin.png" alt="" title="3">
          <span  title="3">微信支付</span>
        </div>
        <div>
          <span class="iconfont  iconfontspan" :class="{iconfontclick:click==wx}" title="3">&#xe63c;</span>
        </div>
      </div>
    </div>
    <span class="otherway" @click="showotherway">其他支付方式
      <span class="iconfont" v-show="hidemore">&#xe632;</span>
      <span class="iconfont" v-show="!hidemore">&#xe630;</span>
    </span>
  </div>
</template>

<script>
export default {
  name: 'payfor',
  data () {
    return {
      zfb: 1,
      my: 2,
      wx: 3,
      click: 0,
      gouclick: false,
      hidemore: true
    }
  },
  methods: {
    showotherway () {
      this.hidemore = !this.hidemore
    },
    chosepay (e) {
      console.log(e)
      let num = e.target.title
      if (num === '1') {
        this.click = 1
      } else if (num === '2') {
        this.click = 2
      } else {
        this.click = 3
      }
    }
  }
}
</script>

<style>
.iconfontspan{
  width: .42rem;
  height: .42rem;
  border: 1px solid #afafaf;
  border-radius: .1rem;
  font-size: .08rem;
  line-height: .42rem;
  text-align: center;
  color: white;
}
.iconfontclick{
  border: 1px solid deeppink;
  color: deeppink;
}
.payfor{
  background: #ffffff;
  padding: .2rem .2rem 0;
  color: #b5b5b5;
  margin-bottom: 1.8rem;
}
.payfor .payTitle{
  line-height: .4rem;
  font-size: .28rem;
  display: block;
  border-bottom: 1px solid #ececec;
  padding-bottom: .15rem;
}
.payList>div{
  line-height:.8rem;
  display: flex;
  justify-content: space-between;
}
.payList>div img{
  height: .6rem;
  margin-right: .2rem;
  margin-top: .2rem;
  margin-bottom: .2rem;
}
.payList>div .payImg span{
  color: #000000;
  font-size: .32rem;
  display: inline-block;
}
.payList div .iconfont{
  margin-top: .26rem;
  display: inline-block;
}
.otherway{
  line-height: 1rem;
  display: block;
  text-align: center;
  color: #cacaca;
}
</style>
