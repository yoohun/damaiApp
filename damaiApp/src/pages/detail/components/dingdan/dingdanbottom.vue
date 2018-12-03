<template>
  <div class="dingdanbottom">
    <span class="agree">我已阅读并同意 <span>《大麦网订票服务条款》</span></span>
    <div class="dingdandetail">
      <span class="dingdanMoney"><span>{{this.total}}元</span></span>
      <span class="dingdancaozuo">
        <span class="mingxi" @click="mingxiclick">
          明细
          <span class="iconfont" v-show="mingxihide">&#xe632;</span>
          <span class="iconfont " v-show="!mingxihide">&#xe630;</span>
        </span>
        <span class="dingdansubmit">提交订单</span>
      </span>
    </div>
    <div class="mingxidetail" v-show="!mingxihide" @click="hidemingxi">
      <div>
        <span class="ticketTitle">票品信息</span>
        <div class="ticketInfor">
          <span>{{this.ticketprice}}<span>元/张</span> </span>
          <span>X1</span>
          <span>180元</span>
        </div>
        <span class="ticketTitle">付款明细</span>
        <div class="ticketInfor">
          <span>+18元</span>
          <span>票品运费</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'dingdanbottom',
  props: {
    ticketprice: Number
  },
  data () {
    return {
      mingxihide: true,
      zhangshu: 1,
      yunfei: 18
    }
  },
  computed: {
    total () {
      return this.yunfei + this.ticketprice * this.zhangshu
    }
  },
  methods: {
    mingxiclick () {
      this.mingxihide = !this.mingxihide
    },
    hidemingxi () {
      this.mingxihide = true
    }
  }
}
</script>

<style>
.dingdanbottom{
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  box-sizing: border-box;
  background: #ffffff;
}
.agree{
  font-size: .24rem;
  color: #989898;
  display: block;
  line-height: .8rem;
  padding-left: .2rem;
}
.agree span{
  color: deeppink;
}
.dingdandetail{
  display: flex;
  justify-content: space-between;
  line-height: .76rem;
  color: #b8b8b8;
  padding-left: .2rem;
}
.dingdandetail span{
  display: inline-block;
}
.dingdanMoney{
  color: deeppink;
  font-size: .32rem;
}
.dingdanMoney>span{
  color: #b8b8b8;
  font-size: .28rem;
  margin-left: .06rem;
}
.mingxi{
  font-size: .24rem;
}
.dingdansubmit{
  line-height: .76rem;
  background: deeppink;
  color: white;
  text-align: center;
  width: 2.4rem;
}
.mingxidetail{
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: .79rem;
  background: rgba(0,0,0,.5);
  z-index: 20;
}
.mingxidetail>div{
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  line-height: .5rem;
  background: #ffffff;
}
.ticketTitle{
  line-height: .6rem;
  font-size: 10px;
  color: #b8b8b8;
  display: block;
  background: #f6f6f6;
  padding: 0 .2rem;
  border-bottom: 1px solid #f6f6f6;
  letter-spacing: .02rem;
}
.ticketInfor{
  display: flex;
  justify-content: space-between;
  padding: .2rem;
  border-bottom: 1px solid #ececec;
}
.ticketInfor span{
  color: #919191;
}
.ticketInfor span:first-child{
  font-size: 16px;
}
.ticketInfor span:first-child span{
  font-size: 10px;
}
</style>
