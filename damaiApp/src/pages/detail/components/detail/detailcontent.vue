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
            <span class="detailplacespan" @click="showmap(detailcontent.iconposition)"><span class="placeBlod">{{detailcontent.iconitemplace}}</span> {{detailcontent.iconitemjutiplace}}</span>
          </div>
          <div class="geshou" v-show="geshou">
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
          <div class="textStyle">{{detailcontent.yanchujianjie}}</div>
        </div>
        <pinglun @getplheight="getplheight"></pinglun>
        <div class="xuzhisx" ref="xuzhisx" :xzheight="xzheight">
          <span class="bigTitle" >须知事项</span>
          <div class="thirdTitle" v-show="gpxz">
            <div class="secondTitle">
              <span class="littleTitle">购票须知 </span><span class="iconfont">更多&#xe631;</span>
            </div>
            <div class="xuzhiItem"  v-for="(item, key) of detailcontent.购票须知" :key="key">
              <span class="iconfont">&#xe62b;</span>
              <span class="thirdTitleText">{{key}}</span>
              <span class="textStyle">{{item}}</span>
            </div>
          </div>
          <div class="wxtx" v-show="wxts">
            <div class="secondTitle">
              <span class="littleTitle">温馨提示 </span><span class="iconfont">更多&#xe631;</span>
            </div>
            <div class="thirdTitle">
              <div class="xuzhiItem"  v-for="(item, key) of detailcontent.温馨提示" :key="key">
                <span class="iconfont">&#xe62b;</span>
                <span class="thirdTitleText">{{key}}</span>
                <span class="textStyle">{{item}}</span>
              </div>
            </div>
          </div>
        </div>
        <div class="cjwt">
          <div class="cjwtTitle border-bottom">
            <span class="bigTitle">常见问题</span>
            <span class="iconfont">更多&#xe631;</span>
          </div>
          <div class="wenti"  ref="cjwenti">
            <span class="wentiSpan">有座位图可以查看吗</span>
            <span class="wentiSpan">我该怎么选座</span>
            <span class="wentiSpan">我想要订票怎么操作</span>
            <span class="wentiSpan">儿童也是全票吗</span>
            <span class="wentiSpan">入场时间是什么时候</span>
            <span class="wentiSpan">取票地址在哪里</span>
            <span class="wentiSpan">演出时长大概是多少呢</span>
            <span class="wentiSpan">我想了解退票规则</span>
          </div>
        </div>
        <div class="tuijian" ref="weinitj" :tjheight="tjheight">
          <span class="bigTitle">为你推荐</span>
          <div class="tjItem" v-for="item of detailcontent.tuijian" :key="item.id" @click="clickiconitem(item.id, item.iconid)">
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
      xq: 0,
      detailtitle: '',
      geshou: true,
      wxts: true,
      gpxz: true
    }
  },
  components: {
    pinglun
  },
  methods: {
    clickiconitem (iconid, iconkind) {
      this.$router.push({
        name: 'detail',
        query: {
          id: iconid
        }
      })
      this.$store.state.iconkind = iconkind
      axios.get('/api/detailmsg.json')
        .then(this.showInfor)
    },
    showInfor (res) {
      for (var k in res.data.data) {
        if (this.$store.state.iconChoose === k) {
          this.detailcontent = res.data.data[k]
          this.detailcontent = this.detailcontent[this.$route.query.id]
          if (this.detailcontent['geshouleibie']) {
            this.geshou = true
          } else {
            this.geshou = false
          }
          if (this.detailcontent['温馨提示']) {
            this.wxts = true
          } else {
            this.wxts = false
          }
          if (this.detailcontent['购票须知']) {
            this.gpxz = true
          } else {
            this.gpxz = false
          }
          this.$emit('settitle', this.detailcontent['iconitemtitle'])
        } else if (this.$store.state.iconkind === k) {
          this.detailcontent = res.data.data[k]
          this.detailcontent = this.detailcontent[this.$route.query.id]
          if (this.detailcontent['geshouleibie']) {
            this.geshou = true
          } else {
            this.geshou = false
          }
          if (this.detailcontent['温馨提示']) {
            this.wxts = true
          } else {
            this.wxts = false
          }
          if (this.detailcontent['购票须知']) {
            this.gpxz = true
          } else {
            this.gpxz = false
          }
          this.$emit('settitle', this.detailcontent['iconitemtitle'])
        }
      }
      console.log(this.detailcontent.iconitemtitle)
      this.$store.state.detailtitle = this.detailcontent.iconitemtitle
      this.$store.state.detailtime = this.detailcontent.iconitemtime + ' | ' + this.detailcontent.iconxq
      this.$store.state.place = this.detailcontent.iconitemplace + this.detailcontent.iconitemjutiplace
    },
    getplheight (height) {
      this.plheight = height
    },
    showmap (position) {
      this.$store.state.position.length = 0
      this.$store.state.position.push(position[0])
      this.$store.state.position.push(position[1])
      this.$router.push('./detail/eachmap')
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
  overflow: hidden;
  height: 2.5rem;
}
.geshouimg{
  width: 1.6rem;
  height: 1.6rem;
  overflow: hidden;
  border-radius: 50%;
  position: relative;
}
.geshouleibie{
  position: absolute;
  bottom: 0;
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
  font-size: .24rem;
  display: block;
}
.jutijieshao{
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp:3;
    overflow: hidden;
}
.bigTitle{
  line-height: 1rem;
  font-size: .36rem;
  margin-bottom: .3rem;
  display: block;
  border: none;
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
.cjwtTitle .bigTitle{
  border: none;
  margin-bottom: 0;
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
  font-size: .24rem;
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
  font-size: .2rem;
}
.wenti{
  margin-top: .2rem;
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
  width: 100%;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  overflow: hidden;
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
