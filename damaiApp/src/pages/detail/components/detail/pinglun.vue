<template>
  <div class="pl" ref="pingluntop">
    <div class="plUp">
      <span class="bigTitle">评论</span>
      <span class="writepl">写评论</span>
    </div>
    <div class="plItem" v-for="item of plItem" :key="item.id">
      <div class="userinfor">
        <div class="userimg">
          <img :src="item.userimg" alt="">
        </div>
        <div class="usernametime">
          <span class="username">{{item.username}}</span>
          <span class="usertime">{{item.usertime}}</span>
        </div>
        <span class="iconfont usershare">&#xe600;</span>
      </div>
      <span class="plcontent">{{item.plneirong}}</span>
      <div class="hfz">
        <div class="huifu" @click="huifu">
          <span>{{item.huifu}}</span>
          <span class="iconfont">&#xe637;</span>
        </div>
        <div class="dianzan" @click="zan">
          <span>{{item.zan}}</span>
          <span class="iconfont">&#xe60c;</span>
        </div>
      </div>
    </div>
    <div class="diankaipl" v-if="this.plItem.length>5">
      <span>查看全部{{this.plItem.length}}条评论</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'pinglun',
  data () {
    return {
      plItem: [{
        id: '001', userimg: '../../../../static/imgs/geshouimg.jpg', username: '吴世勋', usertime: '1分钟前', plneirong: '吴世勋吴世勋吴世勋吴世勋吴世勋吴世勋吴世勋吴世勋吴世勋吴世勋吴世勋吴世勋吴世勋吴世勋吴世勋吴世勋吴世勋吴世勋吴世勋吴世勋吴世勋吴世勋吴世勋吴世勋吴世勋吴世勋吴世勋吴世勋吴世勋', huifu: '回复', zan: '赞'}, {
        id: '002', userimg: '../../../../static/imgs/geshouimg.jpg', username: 'sehun', usertime: '10分钟前', plneirong: '吴世勋吴世勋吴世勋世勋吴世勋吴世勋', huifu: '1', zan: '5'}, {
        id: '003', userimg: '../../../../static/imgs/geshouimg.jpg', username: 'sehun', usertime: '10分钟前', plneirong: '吴世勋吴世勋吴世勋世勋吴世勋吴世勋', huifu: '1', zan: '5'}, {
        id: '004', userimg: '../../../../static/imgs/geshouimg.jpg', username: 'sehun', usertime: '10分钟前', plneirong: '吴世勋吴世勋吴世勋世勋吴世勋吴世勋', huifu: '1', zan: '5'}]
    }
  },
  methods: {
    huifu (e) {
      console.log(e.target.innerText)
    },
    zan (e) {
      console.log(e.target.innerText)
    }
  },
  mounted () {
    this.$emit('getplheight', this.$refs.pingluntop.offsetHeight)
  }
}
</script>

<style>
  body{
    background: #ffffff;
  }
  .plUp{
    display: flex;
    justify-content: space-between;
  }
  .writepl{
    width: 1.2rem;
    height: .4rem;
    line-height: .4rem;
    text-align: center;
    border: 1px solid deeppink;
    color: deeppink;
    margin-top: .38rem;
    font-size: 10px;
    border-radius: .2rem;
  }
  .plItem{
    padding-bottom: .8rem;
  }
  .userinfor{
    display: flex;
    justify-content: space-between;
  }
  .userimg{
    width: 1rem;
  }
  .userimg img{
    width: 100%;
    height: 1rem;
    border-radius: .5rem;
  }
  .usernametime{
    flex: 1;
    padding-left: .3rem;
    padding-top: .1rem;
  }
  .usernametime span{
    display: block;
    line-height: .4rem;
  }
  .username{
    font-size: .26rem;
  }
  .usertime{
    font-size: 10px;
    color: #999999;
  }
  .usershare{
    color: #999999;
    width: .5rem;
    line-height: .6rem;
    text-align: center;
  }
  .plcontent{
    display: block;
    color: #000000;
    font-size: .28rem;
    padding: .2rem 0;
    line-height: .36rem;
  }
  .hfz{
    width: 100%;
    display: flex;
    justify-content: flex-end;
  }
  .hfz div{
    padding: 0 .16rem;
    color: #999999;
  }
  .hfz .iconfont{
    font-size: .34rem;
    color: #999999;
  }
  .diankaipl{
    margin: 0 auto .4rem;
    display: flex;
    justify-content: center;
  }
  .diankaipl span{
    height: .4rem;
    line-height: .4rem;
    padding: 0 .3rem;
    text-align: center;
    border-radius: .3rem;
    color: #bfbfbf;
    font-size: 12px;
    border: 1px solid;
    letter-spacing: .03rem;
  }
</style>
