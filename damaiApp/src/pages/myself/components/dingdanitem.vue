<template>
  <div>
    <div class="dingdanItem">
      <div class="dingdanheader">
        <span>订单编号：123123123123123123</span>
        <span>交易关闭</span>
      </div>
      <div class="dingdanmsg">
        <div class="dingdanmsgImg">
          <img src="../../../../static/imgs/57.png" alt="">
        </div>
        <div class="dingdanmsgText">
          <span class="dingdanTitle">张杰2018"未·LIVE"巡回演唱会·深圳站</span>
          <span>2018.09.15 19:30</span>
          <span>厦门市 / 厦门工人体育馆</span>
          <span class="dingdanlr">
            <span>1张</span>
            <span class="hanyunfei">¥798 <span>(含运费 ¥ 18.00)</span> </span>
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'dingdanitem'
}
</script>

<style>
  .dingdanItem{
    margin-top: .2rem;
    background: #ffffff;
    padding: .2rem .2rem;
  }
  .dingdanheader{
    display: flex;
    justify-content: space-between;
    font-size: 10px;
    color: black;
    line-height: .4rem;
    border: 1px solid;
    align-items: center;
  }
  .dingdanheader span:first-child{
    color: #9c9c9c;
  }
  .dingdanmsg{
    display: flex;
    justify-content: space-between;
  }
  .dingdanmsgImg{
    height: 2.5rem;
    margin-right: .2rem;
  }
  .dingdanmsgImg img{
    height: 100%;
  }
  .dingdanmsgText{
    flex: 1;
    border: 1px solid red;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
  .dingdanmsgText span{
    display: block;
  }
  .dingdanTitle{
    line-height: .42rem;
    font-size: .32rem;
  }
  .dingdanmsgText .dingdanlr span{
    display: inline-block;
  }
  .dingdanmsgText .dingdanlr{
    display: flex;
    justify-content: space-between;
  }
  .hanyunfei{
    color: #9c9c9c;
    font-size: .3rem;
  }
  .hanyunfei span{

  }
</style>
