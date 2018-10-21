<template>
  <div class="allticket">
    <div class="ticketItem">
      <span class="iconfont">&#xe602;</span>
      <span class="itemName">我的票</span>
    </div>
    <div class="ticketItem">
      <span class="iconfont">&#xe646;</span>
      <span class="itemName">代付款</span>
    </div>
    <div class="ticketItem">
      <span class="iconfont">&#xe647;</span>
      <span class="itemName">待收货</span>
    </div>
    <div class="ticketItem">
      <span class="iconfont">&#xe64a;</span>
      <span class="itemName">待评价</span>
    </div>
    <div class="ticketItem">
      <span class="iconfont">&#xe652;</span>
      <span class="itemName">全部订单</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'allticket'
}
</script>

<style>
.allticket{
  margin: .2rem 0;
  display: flex;
  justify-content: space-between;
  background: #ffffff;
}
.allticket div{
  flex: 1;
  margin: .2rem 0;
}
.ticketItem span{
  display: inline-block;
  text-align: center;
  width: 100%;
  line-height: .46rem;
  color: #9c9c9c;
  font-size: 10px;
  letter-spacing: .02rem;
}
.allticket div:first-child{
  border-right: 1px solid ghostwhite;
}
.ticketItem .iconfont{
  font-size: .42rem;
  color: deeppink;
  margin-bottom: .1rem;
}
</style>
