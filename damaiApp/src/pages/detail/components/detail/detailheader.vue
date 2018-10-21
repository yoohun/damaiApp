<template>
  <div>
    <div class="detailHeader detailHeaderTop" v-show="this.headerup">
      <div class="detailTop">
        <span class="iconfont" @click="backto">&#xe625;</span>
        <span class="iconfont">&#xe624;</span>
      </div>
    </div>
    <div class="detailHeader" v-show="!this.headerup">
      <div class="detailTop">
        <span class="iconfont" @click="backto">&#xe625;</span>
        <span class="detailTitle">{{this.$store.state.iconitemtitle}}</span>
        <span class="iconfont">&#xe624;</span>
      </div>
      <div class="detailIcon">
        <div class="iconItem" v-for="(item, index) of headerNav" :key="index" @click="clicknav(index)" :class="{choosenav:index == classnum}">
          <span class="iconfont" :class="{choosenav:index == classnum}">&#xe645;</span>
          <span>{{item.content}}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'detailheader',
  props: {
    headerup: Boolean,
    xqheight: Number,
    xzheight: Number,
    tjheight: Number,
    indexNum: Number
  },
  data () {
    return {
      headerNav: [{id: '001', content: '简介'}, {id: '002', content: '详情'}, {id: '003', content: '须知'}, {id: '004', content: '推荐'}],
      classnum: 0
    }
  },
  methods: {
    clicknav (index) {
      this.classnum = index
      switch (index) {
        case 0:
          window.scrollTo(0, 0)
          break
        case 1:
          window.scrollTo(0, this.xqheight)
          break
        case 2:
          window.scrollTo(0, this.xzheight)
          break
        case 3:
          window.scrollTo(0, this.tjheight)
          break
        default:
          console.log('出错了')
          break
      }
    },
    backto () {
      this.$router.go(-1)
    }
  },
  watch: {
    indexNum (value) {
      if (value === 1) {
        this.classnum = 1
      } else if (value === 2) {
        this.classnum = 2
      } else if (value === 3) {
        this.classnum = 3
      } else if (value === 0) {
        this.classnum = 0
      }
    }
  }
}
</script>

<style>
  body{
    background: #ffffff;
  }
.detailHeader{
  background: rgba(255,255,255,1);
  padding: .06rem .14rem;
  box-sizing: border-box;
  position: fixed;
  top:0;
  left: 0;
  right: 0;
  z-index:10;
}
.detailHeaderTop{
  background: rgba(255,255,255,0);
  position: fixed;
  top:0;
  left: 0;
  right: 0;
}
.detailHeaderTop .detailTop .iconfont{
  color: white;
}
.detailTop{
  height: .64rem;
  line-height: .64rem;
  display: flex;
  justify-content: space-between;
}
.detailTop .iconfont{
  color: #686868;
  font-size: .34rem;
  width: .5rem;
  text-align: center;
  display: inline-block;
  font-weight: bold;
}
.detailTop .detailTitle{
  display: inline-block;
  flex: 1;
  text-align: center;
  font-size: .26rem;
}
.detailIcon{
  display: flex;
  justify-content: space-between;
}
.iconItem{
  width: 25%;
  line-height: .6rem;
  text-align: center;
}
.iconItem .iconfont{
  color: white;
}
.detailHeader .detailIcon .choosenav{
  color: #fd136a;
}
</style>
