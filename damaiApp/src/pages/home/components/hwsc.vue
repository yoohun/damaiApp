<template>
  <div class="hwsc">
    <div class="mainTitle">
      <span class="mainTitle-left">海外现场</span>
      <span class="mainTitle-right">更多 <span class="iconfont">&#xe631;</span> </span>
    </div>
    <div class="hwxcDiv">
      <div class="hwxcDiv-item" v-for="item of hwscList" :key="item.id">
        <img :src="item.imgUrl" alt="">
        <div class="hwxcDivName">
          <div class="hwxcDivNameImg">
            <img :src="item.userImg" alt="">
          </div>
          <div class="hwxcDivNameAll">
            <div class="hwxcDivNameTop">{{item.userTitle}}</div>
            <div class="hwxcDivNameBottom">{{item.userDesc}}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'hwsc',
  data () {
    return {
      hwscList: [{
        id: '001',
        imgUrl: '../../../../static/imgs/12.png',
        userImg: '../../../../static/imgs/14.png',
        userTitle: '香港 | 婕西',
        userDesc: '歌王 Jessie J'
      }, {
        id: '002',
        imgUrl: '../../../../static/imgs/13.png',
        userImg: '../../../../static/imgs/15.png',
        userTitle: '东方神起',
        userDesc: '香港！ 终于等到你'
      }]
    }
  }
}
</script>

<style>
  .hwsc{
    padding: 0 0.2rem 0.5rem;
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
  .hwxcDiv-item{
    display: inline-block;
    width: 48.5%;
  }
  .hwxcDiv-item:nth-child(2){
    margin-right: 0;
  }
  .hwxcDiv{
    display: flex;
    justify-content: space-between;
  }
  .hwxcDiv img{
    width: 100%;
  }
  .hwxcDivName{
    margin-top: .15rem;
    height: auto;
  }
  .hwxcDivNameImg{
    display: inline-block;
    width: .6rem;
    height: 100%;
    float: left;
  }
  .hwxcDivNameImg img{
    width: .5rem;
    height: .5rem;
  }
  .hwxcDivNameAll{
    display: inline-block;
    float: left;
  }
  .hwxcDivNameBottom{
    color: #f8166a;
    margin-top: .1rem;
    font-size: .1rem;
    width: 100%;
    overflow: hidden;
    text-overflow:ellipsis;
    white-space: nowrap;
  }
</style>
