<template>
  <div>
    <div class="getticket">
      <span class="bigTitle">取票方式</span>
      <span class="ticketSpan">快递票</span>
      <span class="ticketJz">
        <span class="iconfont">&#xe656; <span>纸质门票通过快递配送到收货地址</span></span>
      </span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'getticket'
}
</script>

<style>
.getticket{
  color: #b5b5b5;
  padding: .2rem;
  background: #ffffff;
  margin-bottom: .2rem;
}
.bigTitle{
  line-height: .4rem;
  font-size: .28rem;
  display: block;
  border-bottom: 1px solid #ececec;
  padding-bottom: .15rem;
}
.ticketSpan{
  width: 1.3rem;
  height: .6rem;
  border: 1px solid deeppink;
  border-radius: .12rem;
  display: block;
  line-height: .6rem;
  margin: .3rem 0;
  text-align: center;
  font-size: 10px;
  color: deeppink;
  position: relative;
  overflow: hidden;
}
.ticketJz{
  display: block;
  color: #dedede;
}
.ticketJz .iconfont{
  font-size: 10px;
}
.ticketJz .iconfont span{
  margin-left: .1rem;
}
</style>
