<template>
  <div class="mainych">
    <div class="mainTitle">
      <span class="mainTitle-left">{{nameprops}}</span>
      <span class="mainTitle-right" @click="tomore">更多 <span class="iconfont">&#xe631;</span> </span>
    </div>
    <div class="ychbtm">
      <swiper :options="swiperOption">
        <swiper-slide v-for="(page, index) of pages" :key="index">
          <div class="ychbtmItem" v-for="itemList of page" :key="itemList.id" @click="toDetail(itemList.id, itemList.kind)">
            <div class="ychimgtext">
              <img :src="itemList.img" alt="">
              <!--<span class="ychdowntext">asdasdasd</span>-->
            </div>
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
      <div class="mainychImg" v-for="item of ychSImg" :key="item.id" @click="toDetail(item.id, item.kind)">
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
  name: 'homecont',
  props: {
    ychSImg: Array,
    ychItem: Array,
    nameprops: String
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
    },
    tomore () {
      this.$store.state.iconChoose = this.nameprops
      this.$store.state.iconclassNum = 1
      console.log(this.$store.state.iconChoose)
      console.log(this.$store.state.iconclassNum)
      this.$router.push('/icon')
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
  .ychimgtext{
    position: relative;
  }
  .ychdowntext{
    font-size: .2rem;
    padding: 0.02rem .08rem;
    display: inline-block;
    color: deeppink;
    background: #ffffff;
    border-radius: .05rem;
    position: absolute;
    right: 0;
    bottom: 0;
    z-index: 20;
  }
</style>

