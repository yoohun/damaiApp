<template>
  <div class="nesgj">
    <div class="necessarygj">
      <span class="gzTitle border-bottom">必要工具</span>
      <div class="gzList">
        <div class="gjItem border-bottom">
          <span class="iconfont">&#xe645;</span>
          <span>地址管理</span>
        </div>
        <div class="gjItem border-bottom">
          <span class="iconfont">&#xe643;</span>
          <span>常用购票人</span>
        </div>
        <div class="gjItem border-bottom">
          <span class="iconfont">&#xe660;</span>
          <span>关注的人</span>
        </div>
        <div class="gjItem border-bottom">
          <span class="iconfont">&#xe64e;</span>
          <span>关注的演出</span>
        </div>

        <div class="gjItem border-bottom">
          <span class="iconfont">&#xe628;</span>
          <span>在线客服</span>
        </div>
        <div class="gjItem border-bottom">
          <span class="iconfont">&#xe65f;</span>
          <span>意见反馈</span>
        </div>
      </div>
    </div>
    <div class="mybanner">
      <img src="../../../../static/imgs/mybanner.png" alt="">
    </div>
  </div>
</template>

<script>
export default {
  name: 'necessarygj'
}
</script>

<style>
.gzTitle{
  line-height: .8rem;
  color: #000000;
  font-size: .26rem;
  padding-left: .2rem;
  display: block;
}
.nesgj{
  margin-bottom:1rem;
}
.necessarygj{
  background: #ffffff;
  height: auto;
}
.gzList{
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  margin-bottom: .2rem;
}
.gjItem{
  width: 33.33%;
  text-align: center;
  padding: .3rem 0;
}
.gjItem span{
  display: block;
  color: #9c9c9c;
}
.gjItem .iconfont{
  margin-bottom: .2rem;
  font-size: .46rem;
  color: deeppink;
}
.mybanner{
  width: 100%;
  margin-top: .2rem;
}
.mybanner img{
  width: 100%;
}
</style>
