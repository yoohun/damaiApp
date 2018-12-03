<template>
  <div class="tuijian">
    <div class="tj-top">
      <div class="tj-topItem" v-for="item of tjTopList" :key="item.id" @click="toDetail(item.id, item.kind)">
        <img :src="item.imgUrl" :alt="item.imgUrl" :title="item.title" :id="item.kind">
      </div>
    </div>
    <div class="tj-bottom">
      <div class="tuijItem" v-for="btm of tjBottomList" :key="btm.id" @click="toDetail(btm.id, btm.kind)">
        <img :src="btm.imgUrl" :alt="btm.imgUrl" :title="btm.title" :id="btm.kind">
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
  },
  methods: {
    toDetail (id, kind) {
      this.$router.push({
        name: 'detail',
        query: {
          id: id
        }
      })
      this.$store.state.iconid = id
      this.$store.state.iconkind = kind
    }
  }
}
</script>

<style>
  .tuijian{
    padding: 0.15rem;
    margin: .2rem 0 .3rem;
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
  .tuijItem{
    flex: 1;
    margin-right: .1rem;
  }
  .tuijItem:nth-child(3){
    margin-right: 0;
  }
  .tj-text{
    display: flex;
    margin-bottom: .5rem;
  }
  .tj-text-title{
    flex: 1;
    margin-top: .15rem;
    font-size: .28rem;
    display: inline-block;
  }
  .tj-text-title>div:nth-child(2){
    margin-top: .1rem;
    font-size: .22rem;
    color: #acacac;
  }
</style>
