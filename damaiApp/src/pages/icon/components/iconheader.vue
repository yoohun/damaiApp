<template>
  <div class="icontop">
    <div class="headerTop">
      <div class="iconheader" >
        <router-link to='/'>
          <span class="iconfont iconback" @click="iconbackbtn">&#xe625;</span>
        </router-link>
        <span @click="showicon">
          {{this.$store.state.iconChoose}}
        </span>
        <span class="iconfont icondowm" v-show="iconD" @click="showicon">&#xe632;</span>
        <span class="iconfont iconup" v-show="iconU" @click="showicon">&#xe630;</span>
      </div>
      <div class="iconDiv" v-show="iconchoice" @click="changeIcon">
        <span class="iconSpan" v-for="(item, index) of choiceList" :class="{iconActive:index==classnum}" :key="index" @click="iconclick(index)">
          {{item.name}}
        </span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'iconheader',
  data () {
    return {
      classnum: -1,
      iconName: '',
      iconchoice: false,
      iconD: true,
      iconU: false,
      choiceList: [{
        id: '001',
        name: '全部'
      }, {
        id: '002',
        name: '演唱会'
      }, {
        id: '003',
        name: '话剧歌剧'
      }, {
        id: '004',
        name: '音乐会'
      }, {
        id: '005',
        name: '体育比赛'
      }, {
        id: '006',
        name: '曲苑杂坛'
      }, {
        id: '007',
        name: '儿童亲子'
      }, {
        id: '008',
        name: '展览休闲'
      }, {
        id: '009',
        name: '电影'
      }, {
        id: '010',
        name: '二次元'
      }, {
        id: '011',
        name: '旅游展览'}],
      iconchosename: ''
    }
  },
  methods: {
    showicon () {
      this.iconD = !this.iconD
      this.iconchoice = !this.iconchoice
      this.iconU = !this.iconU
    },
    changeIcon (e) {
      this.iconchoice = false
      this.iconD = true
      this.iconU = false
      this.$store.state.iconChoose = e.target.innerText
      console.log(this.$store.state.iconChoose)
      this.$store.state.iconclassNum = this.classnum
    },
    iconclick (index) {
      this.classnum = index
    },
    iconbackbtn () {
      this.iconD = true
      this.iconU = false
      this.iconchoice = false
    }
  },
  updated: function () {
    this.classnum = this.$store.state.iconclassNum
  }
}
</script>

<style>
.icontop{
  height: auto;
  width: 100%;
  position: fixed;
  top:0;
  left: 0;
  right: 0;
  z-index: 3;
}
.iconheader{
  height: .7rem;
  width: 100%;
  line-height: .7rem;
  font-size: .3rem;
  text-align: center;
  color: black;
  background: #ffffff;
  z-index: 3;
  position: relative;
  top:0;
}
.iconback{
  position: absolute;
  left: 0;
  width: .84rem;
  height: .84rem;
  background: #ffffff;
  color: #000000;
  font-weight: bold;
}
.iconDiv{
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  background: #ffffff;
  border-bottom: 1px solid #efefef;
  position: relative;
  top:.7rem;
  left: 0;
  right: 0;
  z-index: 20;
}
.iconDiv .iconSpan{
  display: inline-block;
  width: 25%;
  line-height: 1rem;
  text-align: center;
  font-size: .26rem;
  color: black;
}
.iconDiv .iconActive{
  color: deeppink;
}
.showUl{
  display: block;
}
</style>
