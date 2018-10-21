<template>
  <div>
    <div class="adderssTop">
      <div class="getAddress">
        <span>收货地址</span>
        <router-link to="/detail/dingdanaddress">
          <span>点击添加收货地址 <span class="iconfont">&#xe631;</span></span>
        </router-link>
      </div>
      <div class="yunfei" v-show="shouyunfei">
        <span>运费</span>
        <span>18元</span>
      </div>
    </div>
    <span class="attention">
      <span class="iconfont">&#xe656;</span>
      如需发票，完成付款之后请到订单页面开具（发票面额仅限商品金额，所有配送费用暂无法开具发票）
    </span>
  </div>
</template>

<script>
export default {
  name: 'getaddress',
  data () {
    return {
      shouyunfei: false
    }
  }
}
</script>

<style>
  .adderssTop{
    margin-bottom: .2rem;
  }
  .getAddress{
    display: flex;
    justify-content: space-between;
    background: #ffffff;
    line-height: .8rem;
    padding: 0 .2rem;
    font-size: 14px;
    color: #b5b5b5;
  }
  .getAddress span:last-child{
    font-size: 10px;
    color: #c9c9c9;
  }
  .yunfei{
    display: flex;
    line-height: 1rem;
    background: #ffffff;
    padding: 0 .2rem;
    justify-content: space-between;
  }
  .yunfei span{
    color: #b5b5b5;
  }
  .attention{
    background: #ffffff;
    line-height: .4rem;
    color: #b5b5b5;
    font-size: 10px;
    padding: .2rem;
    display: block;
    margin-bottom: .2rem;
  }
  .attention .iconfont{
    font-size: 12px;
  }
</style>
