<template>
  <div class="tyjj">
    <div class="mainTitle">
      <span class="mainTitle-left">体育竞技</span>
      <span class="mainTitle-right">更多 <span class="iconfont">&#xe631;</span> </span>
    </div>
    <div class="tyjjImg">
      <div class="tyRow">
        <div class="tyItem" v-for="item of tyItem" :key="item.id">
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
  name: 'tyjj',
  data () {
    return {
      tyItem: [{
        id: '001',
        imgUrl: '../../../../static/imgs/19.png',
        tyTitle: '爱上水索道划水',
        tyDesc: '夏日新玩法，水上大作战'
      }, {
        id: '002',
        imgUrl: '../../../../static/imgs/20.png',
        tyTitle: '河北10K唐山站',
        tyDesc: '这场赛，值得你奋力一搏'
      }, {
        id: '003',
        imgUrl: '../../../../static/imgs/21.png',
        tyTitle: '小马快跑亲子嘉年华',
        tyDesc: '让孩子们在自然中狂欢'
      }, {
        id: '004',
        imgUrl: '../../../../static/imgs/22.png',
        tyTitle: '河北10K张家口站',
        tyDesc: '跑张家口，冬奥助力'
      }]
    }
  }
}
</script>

<style>
  .tyjj{
    padding: 0 .1rem;
  }
  .mainTitle{
    padding: 0 0.1rem;
  }
  .tyRow{
    height: 0;
    padding-bottom: 92.5%;
    overflow: hidden;
  }
  .tyItem{
    color: black;
    padding-bottom: 46.25%;
    padding-left: .1rem;
    padding-right: .1rem;
    box-sizing: border-box;
    width: 50%;
    float: left;
    height: 0;
  }
  .tyItem img{
    width: 100%;
  }
  .tyItem .hwxcDivNameImg img{
    width: .5rem;
    height: .5rem;
  }
  .tyItem .hwxcDivNameAll .hwxcDivNameBottom{
    font-size: .1rem;
    color: #000000;
    display: block;
    overflow: hidden;
    text-overflow:ellipsis;
    white-space: nowrap;
  }
  .hwxcDivNameTop{
    overflow: hidden;
    text-overflow:ellipsis;
    white-space: nowrap;
  }
  .hwxcDivNameAll{
    width: 100%;
    display: block;
  }
  .tyjjbanner img{
    height: 1.2rem;
  }
</style>
