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
  props: {
    tyItem: Array
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
  .tyjjImg{
    padding: 0 .1rem;
  }
  .tyRow{
    height: 0;
    padding-bottom: 92.5%;
    overflow: hidden;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  }
  .tyItem{
    color: black;
    padding-bottom: 46.25%;
    width: 48%;
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
