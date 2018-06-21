<template>
  <div class="top">
    <div class="top-pos">
      <span class="iconfont">&#xe645;</span>
      北京
    </div>
    <div class="top-mid">
      <span class="iconfont">&#xe639;</span>
      影子神偷
    </div>
    <div class="top-right">
      <span class="iconfont scan">&#xe633;</span>
      <span class="iconfont">&#xe637;</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'homeheader'
}
</script>

<style>
  .top{
    height: 0.84rem;
    width: 100%;
    line-height: 0.84rem;
    padding: 0 0.2rem;
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
  }
  .top-pos .iconfont{
    font-size: 0.3rem;
    color: #000000;
  }
  .top-mid{
    color: #aeaeae;
    flex: 1;
    background: #f3f3f3;
    border-radius: 0.2rem;
    padding-left: .1rem;
    height:.4rem;
    line-height: .4rem;
    text-align:left;
    margin-top: 0.2rem;
    font-size: .1rem;
  }
  .top-mid .iconfont{
    font-size: 0.3rem;
    margin-right: 0.05rem;
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
</style>
