<template>
  <div class="wrapper">
    <swiper :options="swiperOption">
      <swiper-slide v-for="item of swiperList" :key="item.id" >
        <img :src="item.imgUrl" :alt="item.kind" class="swiperImg" :title="item.id" :id="item.id">
      </swiper-slide>
      <div class="swiper-pagination"  slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
export default {
  name: 'homeswiper',
  props: {
    swiperList: Array
  },
  data () {
    return {
      swiperOption: {
        pagination: '.swiper-pagination',
        loop: true,
        autoplay: 3000,
        lazyLoading: true,
        onClick (swiper, event) {
          console.log(event.target.id)
        }
      }
    }
  }
}
</script>

<style>
.wrapper{
  width: 100%;
  height :0;
  overflow :hidden;
  padding-bottom :33.125%;
  background :#eaeaea;
  margin-top: .84rem;
}
.wrapper .swiper-pagination-bullet-active{
  background: #333333;
}
.swiperImg{
  width: 100%;
}
</style>
