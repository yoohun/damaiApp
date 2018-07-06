<template>
  <div class="top">
    <router-link to='/city'>
      <div class="top-pos">
      <span class="iconfont">&#xe645;</span>
      {{this.city}}
    </div>
    </router-link>
    <div class="top-mid">
      <span class="iconfont">&#xe639;</span>
      <input type="text" placeholder="影子神偷" class="top-mid-input">
    </div>
    <div class="top-right">
      <span class="iconfont scan">&#xe633;</span>
      <span class="iconfont">&#xe637;</span>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'homeheader',
  computed: {
    ...mapState(['city'])
  }
}
</script>

<style>
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
    top:25%;
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
</style>
