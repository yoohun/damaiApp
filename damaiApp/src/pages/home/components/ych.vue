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
      <div class="ychbtmItem">
          <img src="../../../../static/imgs/10.png" alt="">
          <div class="ychbtmText">
            <div class="ychbtmTextT">2018华晨宇“火星”鸟巢演唱会</div>
            <div class="ychbtmTextTime">2018.09.08 19:00</div>
          </div>
        </div>
      <div class="ychbtmItem">
        <img src="../../../../static/imgs/10.png" alt="">
        <div class="ychbtmText">
          <div class="ychbtmTextT">2018华晨宇“火星”鸟巢演唱会</div>
          <div class="ychbtmTextTime">2018.09.08 19:00</div>
        </div>
      </div>
      <div class="ychbtmItem">
        <img src="../../../../static/imgs/10.png" alt="">
        <div class="ychbtmText">
          <div class="ychbtmTextT">2018华晨宇“火星”鸟巢演唱会</div>
          <div class="ychbtmTextTime">2018.09.08 19:00</div>
        </div>
      </div>
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
  data () {
    return {
      ychSImg: [{
        id: '001',
        imgUrl: '../../../../static/imgs/16.png',
        imgTitle: '孟京辉戏剧馆',
        imgDesc: '萌新老鸟必看'
      }, {
        id: '002',
        imgUrl: '../../../../static/imgs/16.png',
        imgTitle: '七幕人生',
        imgDesc: '百老汇音乐剧'
      }, {
        id: '003',
        imgUrl: '../../../../static/imgs/16.png',
        imgTitle: '羽泉粉丝征集令',
        imgDesc: '免费去现场'
      }]
    }
  }
}
</script>

<style>
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
  .ychbtm{
    display: flex;
  }
  .ychbtmItem{
    flex: 1;
    border: 1px solid;
  }
  .ychbtm img{
    height:  2.7rem;
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
  }
  .mainychImg{
    flex: 1;
    margin-right: .1rem;
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
