<template>
  <div class="city">
    <router-link to='/'>
      <div class="cityLeft">
      <span class="iconfont">&#xe625;</span>
    </div>
    </router-link>
    <div class="cityRight">
      <input type="text" placeholder="请输入城市名称">
    </div>
  </div>
</template>

<script>
export default {
  name: 'cityheader'
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
</style>
