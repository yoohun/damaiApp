<template>
  <div class="cnxh">
    <div class="cnxhTitle">
      <span class="iconfont">&#xe659;</span>
      <span>猜你喜欢</span>
    </div>
    <div class="cnxhContent">
      <div class="cnxhRow">
        <div class="cnxhItem" v-for="item of cnxhItem" :key="item.id">
          <img :src="item.cnxhImg" alt="">
          <div class="cnxhText">
            <div class="cnxhDes">
              <span class="cnxhTextTitle">{{item.cnxhTitle}}</span>
              <span class="cnxhFg cnxhFj">{{item.cnxhFj}}</span>
              <span class="cnxhFg">{{item.cnxhTime}}</span>
            </div>
            <div class="cnxhDesText">
              {{item.cnxhDesc}}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'cnxh',
  props: {
    cnxhItem: Array
  }
}
</script>

<style>
  .cnxh{
    background: #f6f6f6;
    padding: 0 0.2rem .6rem;
    margin-bottom: 1rem;
  }
  .cnxhTitle{
    text-align: center;
    color: #000000;
    font-size: .3rem;
    line-height: 1rem;
    position: relative;
  }
  .cnxhTitle::before{
    content: "";
    display: block;
    width: 15px;
    height: 2px;
    background: #000000;
    position: absolute;
    left: 30%;
    top: 50%;
  }
  .cnxhTitle::after{
    content: "";
    display: block;
    width: 15px;
    height: 2px;
    background: #000000;
    position: absolute;
    left: 65%;
    top: 50%;
  }
  .cnxhTitle .iconfont{
    font-size: .3rem;
  }
  .cnxhRow{
    height: auto;
    overflow: hidden;
    display: flex;
    justify-content:space-between;
    flex-wrap: wrap;
    margin-top: 0.2rem;
  }
  .cnxhItem{
    background: #ffffff;
    color: black;
    width: 49%;
    padding-bottom: 110%;
    float: left;
    height: 0;
    margin-bottom: .2rem;
  }
  .cnxhItem img{
    width: 100%;
  }
  .cnxhDes{
    height: 1rem;
    border-bottom: 1px solid #e7e7e7;
    margin: 0 0.2rem ;
    padding-bottom: 0.2rem;
  }
  .cnxhText{
    height: auto;
  }
  .cnxhTextTitle{
    line-height: .7rem;
    font-size: .25rem;
    display: block;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    font-weight: bold;
  }
  .cnxhFg{
    width: auto;
    height: auto;
    padding: 0.05rem;
    font-size: 0.1rem;
    border: 1px solid #b4b4b4;
    border-radius: 0.05rem;
    color: #777777;
  }
  .cnxhFj{
    border: 1px solid #f8166a;
    color: #f8166a;
  }
  .cnxhDesText{
    padding: 0 0.2rem;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    overflow: hidden;
    font-size: .24rem;
    margin-top: 0.2rem;
    line-height: .3rem;
  }
  .clear{
    height: 0;
    clear: both;
  }
</style>
