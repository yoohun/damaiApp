<template>
  <nav>
    <span class="navIcon" @click="shouye" :class="{active:sy==this.$store.state.homenavnum}">
      <span class="navClick">
        <span class="iconfont">&#xe635;</span>
        <span class="navText">首页</span>
      </span>
    </span>
    <span class="navIcon" @click="faxian" :class="{active:fax==this.$store.state.homenavnum}">
      <span class="navClick">
        <span class="iconfont">&#xe65b;</span>
        <span class="navText">发现</span>
      </span>
    </span>
    <span class="navIcon" @click="huiyuan" :class="{active:hy==this.$store.state.homenavnum}">
      <span class="navClick">
        <span class="iconfont">&#xe602;</span>
        <span class="navText">票夹</span>
      </span>
    </span>
    <span class="navIcon" @click="wo" :class="{active:wd==this.$store.state.homenavnum}">
      <span class="navClick">
        <span class="iconfont">&#xe634;</span>
        <span class="navText">我的</span>
      </span>
    </span>
  </nav>
</template>

<script>
export default {
  name: 'homenav',
  data () {
    return {
      sy: 1,
      fax: 2,
      hy: 3,
      wd: 4
    }
  },
  methods: {
    shouye: function () {
      this.$store.state.homenavnum = 1
      this.$router.push('/')
    },
    faxian: function () {
      this.$store.state.homenavnum = 2
    },
    huiyuan: function () {
      this.$store.state.homenavnum = 3
    },
    wo: function () {
      this.$store.state.homenavnum = 4
      this.$router.push('/myself')
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
