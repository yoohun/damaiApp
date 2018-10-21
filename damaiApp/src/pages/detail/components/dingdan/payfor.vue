<template>
  <div class="payfor">
    <span class="payTitle">选择支付方式</span>
    <div class="payList">
      <div class="border-bottom">
        <div class="payImg">
          <img src="../../../../../static/imgs/zhifubao.png" alt="">
          <span>支付宝</span>
        </div>
        <div>
          <span class="iconfont" v-show="!gouclick">&#xe642;</span>
          <span class="iconfont clickdagou" v-show="gouclick">&#xe641;</span>
        </div>
      </div>
      <div class="border-bottom">
        <div class="payImg">
          <img src="../../../../../static/imgs/zhifubao.png" alt="">
          <span>蚂蚁花呗分期</span>
        </div>
        <div>
          <span class="iconfont" v-show="!gouclick">&#xe642;</span>
          <span class="iconfont clickdagou" v-show="gouclick">&#xe641;</span>
        </div>
      </div>
      <div class="border-bottom" v-show="!hidemore">
        <div class="payImg">
          <img src="../../../../../static/imgs/zhifubao.png" alt="">
          <span>微信支付</span>
        </div>
        <div>
          <span class="iconfont" v-show="!gouclick">&#xe642;</span>
          <span class="iconfont clickdagou" v-show="gouclick">&#xe641;</span>
        </div>
      </div>
      <div class="border-bottom" v-show="!hidemore">
        <div class="payImg">
          <img src="../../../../../static/imgs/zhifubao.png" alt="">
          <span>电子钱包</span>
        </div>
        <div>
          <span class="iconfont" v-show="!gouclick">&#xe642;</span>
          <span class="iconfont clickdagou" v-show="gouclick">&#xe641;</span>
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
      gouclick: false,
      hidemore: true,
      payList: [{name: '支付宝', payImg: '../../../../../static/imgs/zhifubao.png'},
        {name: '蚂蚁花呗分期', payImg: '../../../../../static/imgs/mayihuabei.png'},
        {name: '微信支付', payImg: '../../../../../static/imgs/weixin.png'},
        {name: '电子钱包', payImg: '../../../../../static/imgs/dianziqianbao.png'}
      ]
    }
  },
  methods: {
    showotherway () {
      this.hidemore = !this.hidemore
    }
  }
}
</script>

<style>
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
  font-size: .4rem;
  margin-top: .1rem;
  display: inline-block;
}
.payGou{
  display: inline-block;
  width: .5rem;
  height: .5rem;
  border: 1px solid deeppink;
  border-radius: .15rem;
  margin-top: .2rem;
  box-sizing: border-box;
}
.payList div .clickdagou{
  color: deeppink;
}
.otherway{
  line-height: 1rem;
  display: block;
  text-align: center;
  color: #cacaca;
}
</style>
