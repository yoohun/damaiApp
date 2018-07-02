<template>
  <div class="hjyyj">
    <div class="mainTitle">
      <span class="mainTitle-left">话剧音乐剧</span>
      <span class="mainTitle-right">更多 <span class="iconfont">&#xe631;</span> </span>
    </div>
    <div class="ychTop">
      <img src="../../../../static/imgs/7.png" alt="">
    </div>
    <div class="ychbtm">
      <div class="ychRow">
        <div class="ychItem" v-for="item of tyItem" :key="item.id">
          <img :src="item.imgUrl" alt="">
          <div class="hwxcDivName">
            <div class="hwxcDivNameAll">
              <div class="hwxcDivNameTop">{{item.tyTitle}}</div>
              <div class="hwxcDivNameBottom">{{item.tyDesc}}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'hjyyj',
  data () {
    return {
      tyItem: [{
        id: '001',
        imgUrl: '../../../../static/imgs/10.png',
        tyTitle: '2018华晨宇“火星”鸟巢演唱会',
        tyDesc: '2018.09.08 19:00'
      }, {
        id: '002',
        imgUrl: '../../../../static/imgs/9.png',
        tyTitle: '2018华晨宇“火星”鸟巢演唱会',
        tyDesc: '2018.09.08 19:00'
      }, {
        id: '003',
        imgUrl: '../../../../static/imgs/8.png',
        tyTitle: '2018华晨宇“火星”鸟巢演唱会',
        tyDesc: '2018.09.08 19:00'
      }, {
        id: '004',
        imgUrl: '../../../../static/imgs/9.png',
        tyTitle: '2018华晨宇“火星”鸟巢演唱会',
        tyDesc: '2018.09.08 19:00'
      }, {
        id: '005',
        imgUrl: '../../../../static/imgs/10.png',
        tyTitle: '2018华晨宇“火星”鸟巢演唱会',
        tyDesc: '2018.09.08 19:00'
      }, {
        id: '006',
        imgUrl: '../../../../static/imgs/8.png',
        tyTitle: '2018华晨宇“火星”鸟巢演唱会',
        tyDesc: '2018.09.08 19:00'
      }, {
        id: '007',
        imgUrl: '../../../../static/imgs/10.png',
        tyTitle: '2018华晨宇“火星”鸟巢演唱会',
        tyDesc: '2018.09.08 19:00'
      }]
    }
  }
}
</script>

<style>
  .hjyyj{
    padding: 0;
    margin: 0;
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
    font-size: .1rem;
  }
  .mainTitle-right .iconfont{
    font-size: .1rem;
  }
  .ychTop img{
    width: 100%;
    margin-bottom: 0.15rem;
  }
  .ychRow{
    height: 0;
    padding-bottom: 120%;
    overflow: hidden;
  }
  .ychItem{
    color: black;
    padding-left: .2rem;
    padding-right: .2rem;
    padding-bottom: 60%;
    box-sizing: border-box;
    width: 32%;
    float: left;
    height: 0;
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
    font-size: .1rem;
    color: #7b7b7b;
    overflow: hidden;
    text-overflow:ellipsis;
    white-space: nowrap;
  }
</style>
