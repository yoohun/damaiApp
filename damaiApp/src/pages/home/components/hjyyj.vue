<template>
  <div class="hjyyj">
    <div class="mainTitle">
      <span class="mainTitle-left">话剧音乐剧</span>
      <span class="mainTitle-right" @click="tomore">更多 <span class="iconfont">&#xe631;</span> </span>
    </div>
    <div class="ychbtm">
      <div class="ychRow">
        <swiper :options="swiperOption">
          <swiper-slide v-for="(papage, index) of pages" :key="index">
            <div class="ychItem" v-for="item of papage" :key="item.id" @click="toDeatil(item.id, item.kind)">
              <img :src="item.img">
              <div class="hwxcDivName">
                <div class="hwxcDivNameAll">
                  <div class="hwxcDivNameTop">{{item.title}}</div>
                  <div class="hwxcDivNameBottom hjyyjTime">{{item.time}}</div>
                </div>
              </div>
            </div>
          </swiper-slide>
          <div class="swiper-pagination"  slot="pagination"></div>
        </swiper>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'hjyyj',
  props: {
    hjyyjItem: Array
  },
  data () {
    return {
      swiperOption: {
        pagination: '.swiper-pagination',
        lazyLoading: true
      }
    }
  },
  computed: {
    pages () {
      const pages = []
      this.hjyyjItem.forEach((item, index) => {
        const page = Math.floor(index / 6)
        if (!pages[page]) {
          pages[page] = []
        }
        pages[page].push(item)
      })
      return pages
    }
  },
  methods: {
    toDeatil (id, kind) {
      this.$router.push({
        name: 'detail',
        query: {
          id: id
        }
      })
      this.$store.state.iconid = id
      this.$store.state.iconkind = kind
    },
    tomore () {
      this.$store.state.iconChoose = '话剧音乐剧'
      this.$store.state.iconclassNum = 2
      this.$router.push('/icon')
    }
  }
}
</script>

<style>
  .hjyyj{
    padding: 0;
    margin: 0 .2rem;
  }
  .hjyyj .swiper-container{
    width: 100%;
    padding: 0;
    height: 0;
    padding-bottom: 130%;
  }
  .hjyyj .swiper-slide{
    width: 100%;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
  }
  .hjyyj .swiper-pagination-bullet{
    width: .4rem;
    height: .05rem;
    border-radius: .025rem;
    background: #f8166a;
  }
  .mainTitle{
    line-height: .8rem;
  }
  .mainTitle-left{
    font-size: .32rem;
  }
  .mainTitle-right{
    float: right;
    color: #acacac;
    font-size: .24rem;
  }
  .mainTitle-right .iconfont{
    font-size: .24rem;
  }
  .ychbtm{
    display: flex;
    justify-content: center;
    height: 0;
    padding-bottom: 130%;
    /*align-items: center;*/
  }
  .ychRow{
    height: 0;
    width: 100%;
    padding-bottom: 140%;
    overflow: hidden;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  }
  .ychItem{
    color: black;
    padding-bottom: 60%;
    box-sizing: border-box;
    float: left;
    height: 0;
    width: 32%;
    display: inline-block;
    margin-bottom: .2rem;
  }
  .ychbtmTextT{
    font-size: .22rem;
    overflow: hidden;
    text-overflow:ellipsis;
    white-space: nowrap;
    line-height: .4rem;
    margin-top: .15rem;
  }
  .ychbtmTextTime{
    font-size: .22rem;
    color: #7b7b7b;
    overflow: hidden;
    text-overflow:ellipsis;
    white-space: nowrap;
  }
  .hwxcDivNameAll .hjyyjTime{
    font-size: .22rem;
    color: #7b7b7b;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  .hwxcDivNameAll .hwxcDivNameTop{
    font-size: .22rem;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
</style>
