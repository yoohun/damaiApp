<template>
  <div ref="scrollZW">
    <swiper class="swiper-seckill zuowei" :not-next-tick="true" :options="swiperOption">
      <swiper-slide class="seckill-slide zuoweiItem">
        <span class="zuoweiIcon iconfont">&#xe63f;</span>
        <span class="zuoweiText">1280元</span>
      </swiper-slide>
      <swiper-slide class="seckill-slide zuoweiItem">
        <span class="zuoweiIcon iconfont">&#xe63f;</span>
        <span class="zuoweiText">1280元</span>
      </swiper-slide>
      <swiper-slide class="seckill-slide zuoweiItem">
        <span class="zuoweiIcon iconfont">&#xe63f;</span>
        <span class="zuoweiText">1280元</span>
      </swiper-slide>
      <swiper-slide class="seckill-slide zuoweiItem">
        <span class="zuoweiIcon iconfont">&#xe63f;</span>
        <span class="zuoweiText">1280元</span>
      </swiper-slide>
      <swiper-slide class="seckill-slide zuoweiItem">
        <span class="zuoweiIcon iconfont">&#xe63f;</span>
        <span class="zuoweiText">1280元</span>
      </swiper-slide>
      <swiper-slide class="seckill-slide zuoweiItem">
        <span class="zuoweiIcon iconfont">&#xe63f;</span>
        <span class="zuoweiText">1280元</span>
      </swiper-slide>
      <swiper-slide class="seckill-slide zuoweiItem">
        <span class="zuoweiIcon iconfont">&#xe63f;</span>
        <span class="zuoweiText">1280元</span>
      </swiper-slide>
    </swiper>
  </div>
</template>

<script>
import {swiper, swiperSlide} from 'vue-awesome-swiper'
export default {
  name: 'zuowei',
  data () {
    return {
      swiperOption: {
        slidesPerView: 'auto',
        grabCursor: true,
        setWrapperSize: true,
        autoHeight: true,
        freeMode: true,
        observer: true
      }
    }
  },
  components: {
    swiper,
    swiperSlide
  }
}
</script>

<style>
.zuowei{
  width: 400%;
  height: .7rem;
  background: #e5e5e5;
  padding: .09rem;
  box-sizing: border-box;;
  overflow: hidden;
  display: flex;
  justify-content: space-between;
}
.swiper-wrapper{
  margin: 0;
  padding: 0;
}
.zuoweiItem{
  width: 1.6rem;
  height: .5rem;
  background: #ffffff;
  text-align: center;
  border-radius: .08rem;
  position: relative;
  display: inline-block;
  margin: 0 .05rem;
  padding: 0;
}
.zuoweiItem::before{
  content: '';
  height: .14rem;
  width: .14rem;
  display: block;
  line-height: 0;
  position: absolute;
  left: 0;
  top:50%;
  margin-top: -.06rem;
  border-radius: .09rem;
  margin-left: -.07rem;
  background:#e5e5e5 ;
  z-index: 2;
}
.zuoweiItem span{
  display: inline-block;
  line-height: .5rem;
}
.zuoweiText{
  font-size: 10px;
}
</style>
