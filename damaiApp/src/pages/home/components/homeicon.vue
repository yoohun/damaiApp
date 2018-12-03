<template>
  <div class="midIcon">
    <router-link to="/icon" class="acolor">
      <div class="icon" v-for="(item,index) of iconLista" :key="index" @click="homechooseIcon(index, item.iconDesc)">
        <div class="iconImg">
          <img :src="item.iconImg" alt="" class="icon-imgs">
        </div>
        <p class="iconDesc">{{item.iconDesc}}</p>
      </div>
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'homeicon',
  props: {
    iconList: Array
  },
  data () {
    return {
      iconLista: [{
        id: '0001',
        iconImg: '../../../../static/imgs/icon1.png',
        iconDesc: '演唱会'
      }, {
        id: '0002',
        iconImg: '../../../../static/imgs/icon2.png',
        iconDesc: '话剧歌剧'
      }, {
        id: '0003',
        iconImg: '../../../../static/imgs/icon3.png',
        iconDesc: '音乐会'
      }, {
        id: '0004',
        iconImg: '../../../../static/imgs/icon4.png',
        iconDesc: '体育'
      }, {
        id: '0005',
        iconImg: '../../../../static/imgs/icon8.png',
        iconDesc: '曲苑杂坛'
      }, {
        id: '0006',
        iconImg: '../../../../static/imgs/icon7.png',
        iconDesc: '亲子'
      }, {
        id: '0007',
        iconImg: '../../../../static/imgs/icon6.png',
        iconDesc: '展览休闲'
      }, {
        id: '0008',
        iconImg: '../../../../static/imgs/icon5.png',
        iconDesc: '电影'
      }]
    }
  },
  methods: {
    homechooseIcon (index, iconname) {
      this.$store.state.iconChoose = iconname
      this.$store.state.iconclassNum = ++index
    }
  }
}
</script>

<style>
  body{
    background: #ffffff;
  }
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
    height: 45%;
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
    font-size: .24rem;
  }
  .acolor{
    color: black;
  }
</style>
