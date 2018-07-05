<template>
  <div class="mainych">
    <div class="mainTitle">
      <span class="mainTitle-left">演唱会</span>
      <span class="mainTitle-right">更多 <span class="iconfont">&#xe631;</span> </span>
    </div>
    <div class="ychTop">
      <img src="../../../../static/imgs/7.png" alt="">
    </div>
    <div class="ychbtm">
      <swiper :options="swiperOption">
        <swiper-slide v-for="(page, index) of pages" :key="index">
          <div class="ychbtmItem" v-for="itemList of page" :key="itemList.id">
            <img :src="itemList.img" alt="">
            <div class="ychbtmText">
              <div class="ychbtmTextT">{{itemList.title}}</div>
              <div class="ychbtmTextTime">{{itemList.time}}</div>
            </div>
          </div>
        </swiper-slide>
        <div class="swiper-pagination"  slot="pagination"></div>
      </swiper>
    </div>
    <div class="mainychBImg">
      <div class="mainychImg" v-for="item of ychSImg" :key="item.id">
        <img :src="item.imgUrl" alt="">
        <div class="mainychImgText">
          <span class="mainychImgTextB">{{item.imgTitle}}</span>
          <span>{{item.imgDesc}}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ych',
  props: {
    ychSImg: Array,
    ychItem: Array
  },
  data () {
    return {
      swiperOption: {
        pagination: '.swiper-pagination'
      }
    }
  },
  computed: {
    pages () {
      const pages = []
      this.ychItem.forEach((item, index) => {
        const page = Math.floor(index / 6)
        if (!pages[page]) {
          pages[page] = []
        }
        pages[page].push(item)
      })
      return pages
    }
  }
}
</script>

<style>
  .ychbtm .swiper-container{
    width: 100%;
    padding: 0;
    height: 0;
    padding-bottom: 128%;
  }
  .ychbtm .swiper-slide{
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
  }
  .ychbtm .swiper-pagination-bullet{
    width: .4rem;
    height: .05rem;
    border-radius: .025rem;
    background: #f8166a;
  }
  .mainych{
    height: auto;
    padding: 0 0.2rem 0.5rem;
  }
  .ychTop img{
    width: 100%;
    margin-bottom: 0.15rem;
  }
  .ychImg img{
    height: 2.7rem;
  }
  .ychbtmItem{
    width: 32%;
    display: inline-block;
    margin-bottom: .2rem;
  }
  .ychbtm img{
    width: 100%;
  }
  .ychbtmTextT{
    font-size: .22rem;
    overflow: hidden;
    text-overflow:ellipsis;
    white-space: nowrap;
    line-height: .4rem;
    margin-top: .15rem;
    display: inline-block;
    width: 100%;
  }
  .ychbtmTextTime{
    font-size: .1rem;
    color: #7b7b7b;
    overflow: hidden;
    text-overflow:ellipsis;
    white-space: nowrap;
  }
  .mainychBImg{
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  }
  .mainychImg{
    width: 32%;
    position: relative;
  }
  .mainychImg:nth-child(3){
    margin-right:0
  }
  .mainychBImg .mainychImg img{
    width: 100%;
  }
  .mainychImgText{
    font-size: .1rem;
    text-align: center;
    position: absolute;
    top:.4rem;
    color: #ffffff;
  }
  .mainychImgText span{
    display: inline-block;
  }
  .mainychImgText .mainychImgTextB{
    font-size: .26rem;
  }
</style>
