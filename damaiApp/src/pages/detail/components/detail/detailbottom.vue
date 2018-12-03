<template>
  <div>
    <div class="detailbottom">
      <div class="detailbottomleft">
        <span class="kefu border-right" @click="kefu">
          <span class="iconfont">&#xe628;</span>
          <span class="kfText">客服</span>
        </span>
        <span class="guanzhu" @click="gz()" >
          <span class="iconfont" :class="{active:activecla}">&#xe60a;</span>
          <span class="gzText">关注</span>
        </span>
      </div>
      <div class="detailbottomright" @click="chooseweizi">
        <div >选座购买</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'detailbottom',
  data () {
    return {
      activecla: ''
    }
  },
  methods: {
    chooseweizi () {
      this.$router.push('./detail/chooseweizi')
    },
    gz (a) {
      this.activecla = !this.activecla
    },
    kefu () {
      console.log('客服')
    }
  },
  mounted () {
  },
  watch: {
    activecla () {
      this.$store.commit('clickguanzhu', this.activecla)
    }
  }
}
</script>

<style>
  body{
    background: #ffffff;
  }
.detailbottom{
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  background: #ffffff;
  display: flex;
  justify-content: space-between;
}
.detailbottomleft{
  width: 1.6rem;
  display: flex;
  justify-content: space-between;
  border: 1px solid #d7d7d7;
}
.detailbottomleft .kefu,.detailbottomleft .guanzhu{
  display: inline-block;
  color: #919191;
  text-align: center;
  line-height: .32rem;
}
.detailbottomleft .border-right{
  border-right: 1px solid #d7d7d7;
}
.detailbottom .border{
  border: 1px solid #d7d7d7;
}
.detailbottomright{
  flex: 1;
  background: #fd136a;
}
.detailbottomleft .iconfont{
  width: .78rem;
  display: inline-block;
  padding-top: .1rem;
}
.kfText,.gzText{
  font-size: 8px;
}
.detailbottomright{
  text-align: center;
  color: #ffffff;
  font-size: .32rem;
  line-height: .8rem;
  letter-spacing: .06rem;
}
.guanzhu .active{
  color: deeppink;
}
</style>
