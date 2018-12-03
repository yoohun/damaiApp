<template>
  <div class="hwsc">
    <div class="mainTitle">
      <span class="mainTitle-left">看展去</span>
      <span class="mainTitle-right">更多 <span class="iconfont">&#xe631;</span> </span>
    </div>
    <div class="ychbtm">
      <div class="ychRow">
        <div class="ychItem" @click="toDeatil(item.id, item.kind)">
          <div class="ychimgtext">
          <img src="../../../../static/imgs/31.png" alt="">
          <!--<span class="ychdowntext">asdasdasd</span>-->
        </div>
          <div class="hwxcDivName">
            <div class="hwxcDivNameAll">
              <div class="hwxcDivNameTop">林奕华年度大戏《非常林奕华》</div>
              <div class="hwxcDivNameBottom hjyyjTime">2018.17.07-12.08</div>
            </div>
          </div>
        </div>
        <div class="ychItem" @click="toDeatil(item.id, item.kind)">
          <img src="../../../../static/imgs/31.png" alt="">
          <div class="hwxcDivName">
            <div class="hwxcDivNameAll">
              <div class="hwxcDivNameTop">林奕华年度大戏《非常林奕华》</div>
              <div class="hwxcDivNameBottom hjyyjTime">2018.17.07-12.08</div>
            </div>
          </div>
        </div>
        <div class="ychItem" @click="toDeatil(item.id, item.kind)">
          <img src="../../../../static/imgs/31.png" alt="">
          <div class="hwxcDivName">
            <div class="hwxcDivNameAll">
              <div class="hwxcDivNameTop">林奕华年度大戏《非常林奕华》</div>
              <div class="hwxcDivNameBottom hjyyjTime">2018.17.07-12.08</div>
            </div>
          </div>
        </div>
        <div class="ychItem" @click="toDeatil(item.id, item.kind)">
          <img src="../../../../static/imgs/31.png" alt="">
          <div class="hwxcDivName">
            <div class="hwxcDivNameAll">
              <div class="hwxcDivNameTop">林奕华年度大戏《非常林奕华》</div>
              <div class="hwxcDivNameBottom hjyyjTime">2018.17.07-12.08</div>
            </div>
          </div>
        </div>
        <div class="ychItem" @click="toDeatil(item.id, item.kind)">
          <img src="../../../../static/imgs/31.png" alt="">
          <div class="hwxcDivName">
            <div class="hwxcDivNameAll">
              <div class="hwxcDivNameTop">林奕华年度大戏《非常林奕华》</div>
              <div class="hwxcDivNameBottom hjyyjTime">2018.17.07-12.08</div>
            </div>
          </div>
        </div>
        <div class="ychItem" @click="toDeatil(item.id, item.kind)">
          <img src="../../../../static/imgs/31.png" alt="">
          <div class="hwxcDivName">
            <div class="hwxcDivNameAll">
              <div class="hwxcDivNameTop">林奕华年度大戏《非常林奕华》</div>
              <div class="hwxcDivNameBottom hjyyjTime">2018.17.07-12.08</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'hwsc',
  props: {
    hwscList: Array
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
      this.$store.state.iconChoose = '话剧音乐剧'
      this.$store.state.iconclassNum = 2
      console.log(this.$store.state.iconChoose)
      console.log(this.$store.state.iconclassNum)
      this.$router.push('/icon')
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
  .hwxcDiv img{
    width: 100%;
  }
  .hwxcDivName{
    height: auto;
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

  .ychbtm{
    display: flex;
    justify-content: center;
    height: 0;
    padding-bottom: 130%;
    /*align-items: center;*/
  }
  .ychTop img{
    width: 100%;
    margin-bottom: 0.15rem;
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
    font-size: .1rem;
    color: #7b7b7b;
    overflow: hidden;
    text-overflow:ellipsis;
    white-space: nowrap;
  }
  .hwxcDivNameAll .hjyyjTime{
    font-size: .1rem;
    color: #7b7b7b;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  .hwxcDivNameAll .hwxcDivNameTop{
    font-size: .32rem;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
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
    right: .1rem;
    bottom: .1rem;
    z-index: 20;
  }
</style>
