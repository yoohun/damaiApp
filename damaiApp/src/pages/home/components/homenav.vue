<template>
  <nav>
    <span class="navIcon">
      <span class="navClick" @click="shouye" :class="{activeS:sy}">
        <span class="iconfont">&#xe635;</span>
        <span class="navText">首页</span>
      </span>
    </span>
    <span class="navIcon" @click="faxian" :class="{active:fax}">
      <span class="navClick">
        <span class="iconfont">&#xe65b;</span>
        <span class="navText">发现</span>
      </span>
    </span>
    <span class="navIcon" @click="huiyuan" :class="{active:hy}">
      <span class="navClick">
        <span class="iconfont">&#xe648;</span>
        <span class="navText">会员</span>
      </span>
    </span>
    <span class="navIcon" @click="wo" :class="{active:wd}">
        <span class="iconfont">&#xe634;</span>
        <span class="navText">我的</span>
    </span>
  </nav>
</template>

<script>
export default {
  name: 'homenav',
  data () {
    return {
      sy: false,
      fax: false,
      hy: false,
      wd: false
    }
  },
  methods: {
    shouye: function () {
      this.sy = false
      this.fax = false
      this.hy = false
      this.wd = false
    },
    faxian: function () {
      this.sy = true
      this.fax = true
      this.hy = false
      this.wd = false
    },
    huiyuan: function () {
      this.sy = true
      this.fax = false
      this.hy = true
      this.wd = false
    },
    wo: function () {
      this.sy = true
      this.fax = false
      this.hy = false
      this.wd = true
    }
  }
}
</script>

<style>
  nav{
    height: 1rem;
    border-top: 1px solid #f3f3f3;
    display: flex;
    justify-content: space-around;
    align-items: center;
    position: fixed;
    bottom: 0;
    left: 0;
    right:0;
    background: #ffffff;
    z-index:10
  }
  .navIcon{
    color: #7b7b7b;
  }
  .navIcon:nth-child(1){
    color: #f8166a;
  }
  nav .iconfont{
    padding: 0 .4rem;
    width: auto;
    font-size: .4rem;
    margin-bottom: .1rem;
  }
  nav span{
    display: block;
  }
  .navText{
    text-align: center;
    font-size: .1rem;
  }
  .active{
    color:#f8166a
  }
  .activeS{
    color: #7b7b7b;
  }
</style>
