<template>
  <div class="midIcon">
    <div class="icon" v-for="item of iconList" :key="item.id">
      <div class="iconImg">
        <img :src="item.iconImg" alt="" class="icon-imgs">
      </div>
      <p class="iconDesc">{{item.iconDesc}}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'homeicon',
  props: {
    iconList: Array
  }
}
</script>

<style>
  .midIcon{
    height: 0;
    padding-bottom: 40%;
    overflow: hidden;
  }
  .icon{
    padding-bottom: 20%;
    width: 25%;
    float: left;
    height: 0;
    position: relative;
  }
  .iconImg{
    position: absolute;
    top:0;
    left:0;
    right: 0;
    bottom: .24rem;
    text-align: center;
    box-sizing: border-box;
    padding: .03rem;
  }
  .icon-imgs{
    height: 55%;
    display: block;
    margin: auto auto;
    position: absolute;
    left: 0;
    right: 0;
    bottom: 20%;
  }
  .iconDesc{
    position: absolute;
    bottom:0;
    left: 0;
    right: 0;
    line-height: .44rem;
    height: .44rem;
    text-align: center;
    font-size: .16rem;
  }
  /*.midIcon-row{*/
    /*display: flex;*/
  /*}*/
  /*.midIcon-span{*/
    /*height: 1rem;*/
    /*background: #007aff;*/
    /*width: auto;*/
    /*line-height: 1.6rem;*/
    /*flex: 1;*/
    /*justify-content: space-between;*/
    /*background: url("../../../../static/imgs/11.png") no-repeat -13% -15%;*/
    /*background-size: 380%;*/
    /*text-align: center;*/
    /*font-size: .18rem;*/
  /*}*/
  /*.midIcon-row .hjgj{*/
    /*background: url("../../../../static/imgs/11.png") no-repeat 25% -15%;*/
    /*background-size: 380%;*/
  /*}*/
  /*.midIcon-row .yyh{*/
    /*background: url("../../../../static/imgs/11.png") no-repeat 68% -15%;*/
    /*background-size: 380%;*/
  /*}*/
  /*.midIcon-row .ty{*/
    /*background: url("../../../../static/imgs/11.png") no-repeat 113% -15%;*/
    /*background-size: 380%;*/
  /*}*/
  /*.midIcon-row .qyzt{*/
    /*background: url("../../../../static/imgs/11.png") no-repeat -13% 142%;*/
    /*background-size: 380%;*/
  /*}*/
  /*.midIcon-row .qz{*/
    /*background: url("../../../../static/imgs/11.png") no-repeat 25% 142%;*/
    /*background-size: 380%;*/
  /*}*/
  /*.midIcon-row .zlxx{*/
    /*background: url("../../../../static/imgs/11.png") no-repeat 68% 142%;*/
    /*background-size: 380%;*/
  /*}*/
  /*.midIcon-row .dy{*/
    /*background: url("../../../../static/imgs/11.png") no-repeat 114% 142%;*/
    /*background-size: 380%;*/
  /*}*/
</style>
