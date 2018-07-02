<template>
  <div class="tuijian">
    <div class="tj-top">
      <div class="tj-topItem" v-for="item of tjTopList" :key="item.id">
        <img :src="item.imgUrl" alt="">
      </div>
    </div>
    <div class="tj-bottom">
      <div class="tjItem" v-for="btm of tjBottomList" :key="btm.id">
        <img :src="btm.imgUrl" alt="">
        <span class="tj-text-title">
          <div>{{btm.imgTitle}}</div>
          <div>{{btm.imgDesc}}</div>
        </span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'tuijian',
  props: {
    tjTopList: Array,
    tjBottomList: Array
  }
}
</script>

<style>
  .tuijian{
    padding: 0.15rem;
  }
  .tj-top{
    margin-bottom: 0.15rem;
    display: flex;
  }
  .tj-topItem{
    flex:2.5;
    margin-right: .1rem;
  }
  .tj-topItem:nth-child(2){
    flex: .72;
    margin-right: 0;
  }
  .tj-topItem img{
    width: 100%;
  }
  .tj-top img:nth-child(2){
    float: right;
  }
  .tj-top::after{
    content: "";
    height: 0;
    clear: both;
  }
  .tj-bottom{
    /*height: 1.4rem;*/
    display: flex;
  }
  .tj-bottom img{
    width: 100%;
  }
  .tjItem{
    flex: 1;
    margin-right: .1rem;
  }
  .tjItem:nth-child(3){
    margin-right: 0;
  }
  .tj-text{
    display: flex;
    margin-bottom: .5rem;
  }
  .tj-text-title{
    flex: 1;
    margin-top: .15rem;
    font-size: .25rem;
    display: inline-block;
  }
  .tj-text-title>div:nth-child(2){
    margin-top: .1rem;
    font-size: .15rem;
    color: #acacac;
  }
</style>
