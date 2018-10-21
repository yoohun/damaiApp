<template>
  <div>
    <div class="detailcontent">
      <div class="detailcontentTop" ref="rollcontenttop" >
        <div class="content">
          <div class="detailImg">
            <img :src="detailcontent.detailImg" alt="">
          </div>
          <div class="detailText">
            <span class="detailTitle">{{detailcontent.iconitemtitle}}</span>
            <span class="detailPrice">{{detailcontent.iconitemprice}}</span>
          </div>
        </div>
        <div class="bgcover">
          <img :src="detailcontent.detailImg" alt="">
        </div>
      </div>
      <div class="detailmaincontent">
        <div class="detailxq" ref="rollcontent">
          <span class="detailtime">{{detailcontent.iconitemtitle}}</span>
          <div class="detailplace">
            <span class="detailplacespan"><span class="placeBlod">{{detailcontent.iconitemplace}}</span> {{detailcontent.iconitemjutiplace}}</span>
          </div>
          <div class="geshou">
            <div class="geshouimg">
              <img :src="detailcontent.yirenimg" alt="">
              <span class="geshouleibie">{{detailcontent.geshouleibie}}</span>
            </div>
            <div class="geshoujs">
              <div class="namegz">
                <span class="name">{{detailcontent.geshouname}}</span>
                <span class="follow">+ 关注</span>
              </div>
              <div class="jutijieshao">{{detailcontent.yirenjieshao}}</div>
            </div>
          </div>
        </div>
        <div class="xiangmuxiangq" ref="xiangmuxiangq">
          <span class="bigTitle">项目详情</span>
          <span class="littleTitle">演出简介</span>
          <div class="textStyle">{{detailcontent.yirenjieshao}}</div>
        </div>
        <pinglun @getplheight="getplheight"></pinglun>
        <div class="xuzhisx" ref="xuzhisx" :xzheight="xzheight">
          <span class="bigTitle" >须知事项</span>
          <div class="secondTitle">
            <span class="littleTitle">购票须知 </span><span class="iconfont">更多&#xe631;</span>
          </div>
          <div class="thirdTitle">
            <div class="xuzhiItem">
              <span class="iconfont">&#xe62b;</span>
              <span class="thirdTitleText">限购说明</span>
              <span class="textStyle" v-for="(item, index) of detailcontent.goupiaoxuzhi" :key="index">每个账号最多购买4张</span>
            </div>
            <div class="xuzhiItem">
              <span class="iconfont">&#xe62b;</span>
              <span class="thirdTitleText">儿童入场说明</span>
              <span class="textStyle" v-for="(item, index) of detailcontent.ertongruchang" :key="index">{{detailcontent.ertongruchang}}</span>
            </div>
            <div class="xuzhiItem">
              <span class="iconfont">&#xe62b;</span>
              <span class="thirdTitleText">选座</span>
              <span class="textStyle">
                <p v-for="(item, index) of detailcontent.zuowei" :key="index">{{item}}</p>
              </span>
            </div>
          </div>
          <div class="wxtx">
            <div class="secondTitle">
              <span class="littleTitle">温馨提示 </span><span class="iconfont">更多&#xe631;</span>
            </div>
            <div class="thirdTitle">
              <div class="xuzhiItem">
                <span class="iconfont">&#xe62b;</span>
                <span class="thirdTitleText">演出时长</span>
                <span class="textStyle">{{detailcontent.yanchushichang}}</span>
              </div>
            </div>
          </div>
        </div>
        <div class="cjwt">
          <div class="cjwtTitle">
            <span class="bigTitle">常见问题</span>
            <span class="iconfont">更多&#xe631;</span>
          </div>
          <div class="wenti"  ref="cjwenti">
            <span class="wentiSpan" v-for="(item, index) of detailcontent.problem" :key="index">{{item.problem}}</span>
          </div>
        </div>
        <div class="tuijian" ref="weinitj" :tjheight="tjheight">
          <span class="bigTitle">为你推荐</span>
          <div class="tjItem" v-for="item of detailcontent.tuijian" :key="item.id" @click="clickiconitem(item.iconid, item.iconitemtitle)">
            <div class="tiImg">
              <img :src="item.imgUrl" alt="">
            </div>
            <div class="tiText border-bottom">
              <div class="tuTextUp">
                <span class="tiTitle">{{item.iconitemtitle}}</span>
                <span class="tiTimeplace">{{item.tuijianpat}}</span>
                <span class="xuanzuo">选座</span>
                <span class="tiPrice">{{item.tuijiprice}}</span>
              </div>
              <span class="tuTextDown">
                {{item.tuijiantext}}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import pinglun from './pinglun'
export default {
  name: 'detailcontent',
  data () {
    return {
      detailcontent: {},
      xqheight: 0,
      xzheight: 0,
      tjheight: 0,
      plheight: 0,
      xq: 0
    }
  },
  components: {
    pinglun
  },
  methods: {
    clickiconitem (iconid, iconitemtitle) {
      this.$router.push({
        name: 'detail',
        query: {
          id: iconid
        }
      })
      this.$store.state.iconitemtitle = iconitemtitle
      axios.get('/api/detailmsg.json')
        .then(this.showInfor)
    },
    showInfor (res) {
      for (var k in res.data.data) {
        if (this.$store.state.iconChoose === k) {
          this.detailcontent = res.data.data[k]
          for (var m in res.data.data[k]) {
            if (this.$route.query.id === m) {
              this.detailcontent = res.data.data[k][m]
            }
          }
        }
      }
    },
    getplheight (height) {
      this.plheight = height
    }
  },
  mounted () {
    axios.get('/api/detailmsg.json')
      .then(this.showInfor)
  },
  updated () {
    this.xq = this.$refs.xiangmuxiangq.offsetHeight
    this.xqheight = this.$refs.rollcontenttop.offsetHeight + this.$refs.rollcontent.offsetHeight - 30
    this.xzheight = this.plheight + this.$refs.rollcontenttop.offsetHeight + this.$refs.rollcontent.offsetHeight + this.xq
    this.tjheight = this.plheight + this.$refs.rollcontenttop.offsetHeight + this.$refs.rollcontent.offsetHeight + this.xq + this.$refs.xuzhisx.offsetHeight + this.$refs.cjwenti.offsetHeight + 100
    this.$emit('showxq', this.xqheight)
    this.$emit('showxz', this.xzheight)
    this.$emit('showtj', this.tjheight)
  }
}
</script>

<style>
  body{
    background: #ffffff;
  }
.detailcontent{
  position: relative;
  top:0;
  left: 0;
  right: 0;
  bottom: 0;
}
.detailcontentTop{
  height: 4rem;
  position: relative;
}
.bgcover{
  position: absolute;
  top:0;
  left: 0;
  right: 0;
  bottom: 0;
  background: #cacaca;
  overflow: hidden;
  z-index: 1;
}
.bgcover img{
  width: 120%;
  margin-left: -10%;
  margin-top: -10%;
  filter:blur(20px);
  -webkit-filter:blur(20px);
  -moz-filter:blur(20px);
  -ms-filter:blur(20px);
  -o-filter:blur(20px);
}
.content{
  position: absolute;
  top:0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 3;
  padding-top: 1rem;
  padding-left: .3rem;
  padding-right: .3rem;
  display: flex;
  justify-content: space-between;
}
.content .detailImg{
  height: 2.7rem;
}
.content .detailImg img{
  height: 100%;
}
.content .detailText{
  flex: 1;
  height: 90%;
  padding-left: .2rem;
  position: relative;
  color: #ffffff;
}
.content .detailTitle{
  position: absolute;
  top:0;
  line-height: .4rem;
}
.content .detailPrice{
  position: absolute;
  bottom: 0;
}
.detailmaincontent{
  padding: .5rem .36rem;
  font-size: .28rem;
}
.detailplace{
  line-height: 1.5rem;
  font-size: .3rem;
}
.placeBlod{
  font-weight: bold;
}
.geshou{
  display: flex;
  justify-content: space-between;
  margin-bottom: .6rem;
}
.geshouimg{
  width: 25%;
  overflow: hidden;
  border-radius: 50%;
  position: relative;
  height: 25%;
}
.geshouleibie{
  position: absolute;
  bottom: .04rem;
  left: 0;
  right: 0;
  display: inline-block;
  background: rgba(0,0,0,.7);
  z-index: 5;
  width: 100%;
  text-align: center;
  line-height: .38rem;
  color: #f0f0f0;
  font-size: .2rem;
}
.geshouimg img{
  width: 100%;
}
.geshoujs{
  width: 70%;
}
.namegz{
  display: flex;
  justify-content: space-between;
  margin-bottom: .26rem;
}
.namegz .name{
  font-weight: bold;
  display: inline-block;
  line-height: .5rem;
}
.namegz .follow{
  display: inline-block;
  width: 1.2rem;
  line-height: .5rem;
  color: deeppink;
  border-radius: .25rem;
  text-align: center;
  font-size: 14px;
  border: 1px solid deeppink;
}
.jutijieshao,.textStyle{
  margin-top: .1rem;
  color: #adadad;
  line-height: .4rem;
  font-size: 10px;
  display: block;
}
.bigTitle{
  line-height: 1.2rem;
  font-size: .36rem;
  display: block;
}
.secondTitle{
  display: flex;
  justify-content: space-between;
  margin-bottom: .4rem;
}
.littleTitle{
  display: block;
  font-weight: bold;
  font-size: 14px;
}
.secondTitle .iconfont,.cjwtTitle .iconfont{
  font-size: 12px;
  color: #adadad;
}
.thirdTitle .iconfont{
  color: deeppink;
}
.thirdTitleText{
  color: #000000;
}
.tjItem{
  display: flex;
  justify-content: space-between;
  height: 3.9rem;
}
.tiImg{
  width:25%;
  max-height: 3.8rem;
  margin-right: .1rem;
}
.tiImg img{
  width: 100%;
  max-height: 3.8rem;
  max-width: 2.8rem;
}
.tiText{
  width: 75%;
  height: 3.4rem;
  margin-left: .16rem;
  position: relative;
}
.tiText span{
  display: block;
  line-height: .36rem;

}
.tiTitle{
  font-size: .28rem;
}
.tuTextUp .tiTitle{
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.tiTimeplace{
  display: block;
  overflow: hidden;
  text-overflow:ellipsis;
  white-space: nowrap;
  width: 100%;
  font-size: 10px;
}
.tuTextUp{
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 1.4rem;
}
.tiText .xuanzuo{
  display: block;
  width: .8rem;
  height: .46rem;
  line-height: .46rem;
  background: #b4b4b4;
  color: #ffffff;
  text-align: center;
  border-radius: .05rem .05rem .2rem .05rem;
  font-size: 8px;
}
.tiPrice{
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
}
.tiText .tuTextDown{
  position: absolute;
  bottom: .3rem;
  font-size: 10px;
  color: #9f9f9f;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  width: 100%;
}
.tjItem .border-bottom{
  border-bottom: 1px solid #ededed;
}
.textStyle{
  margin-top: .2rem;
}
.xuzhiItem .textStyle{
  margin-bottom: .2rem;
}
.xiangmuxiangq{
  margin-bottom: .6rem;
}
.xuzhisx{
  margin-bottom: .6rem;
}
.cjwtTitle{
  display: flex;
  justify-content: space-between;
}
.cjwtTitle .iconfont{
  line-height: 1.2rem;
}
.wentiSpan{
  padding: 0 .1rem;
  border: 1px solid gainsboro;
  display: inline-block;
  height: .52rem;
  line-height: .56rem;
  border-radius: .26rem;
  margin: .1rem .05rem;
  font-size: 10px;
  color: #b4b4b4;
}
.xuzhiItem{
  margin-bottom: .4rem;
}
.textStyle{
  margin-top: .2rem;
}
.xuzhiItem .textStyle{
  margin-bottom: .2rem;
}
.cjwtTitle .iconfont{
  font-size: 12px;
  color: #adadad;
}
.secondTitle{
  display: flex;
  justify-content: space-between;
  margin-bottom: .4rem;
}
.littleTitle{
  display: block;
  font-weight: bold;
  font-size: 14px;
}
.thirdTitleText{
  color: #000000;
}
</style>
