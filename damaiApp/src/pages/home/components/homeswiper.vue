<template>
  <div class="wrapper">
    <swiper :options="swiperOption">
      <swiper-slide v-for="item of swiperList" :key="item.id">
        <img :src="item.imgUrl" alt="" class="swiperImg">
      </swiper-slide>
      <div class="swiper-pagination"  slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
export default {
  name: 'homeswiper',
  data () {
    return {
      swiperOption: {
        pagination: '.swiper-pagination',
        loop: true
      },
      swiperList: [
        {
          id: '0001',
          imgUrl: '../../../../static/imgs/1.png'
        }, {
          id: '0002',
          imgUrl: '../../../../static/imgs/1.png'
        }, {
          id: '0003',
          imgUrl: '../../../../static/imgs/1.png'
        }, {
          id: '0004',
          imgUrl: '../../../../static/imgs/1.png'
        }
      ]
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
