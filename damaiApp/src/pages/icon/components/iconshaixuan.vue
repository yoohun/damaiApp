<template>
  <div class="allDiv">
    <div class="tiaojian border-bottom" >
      <div class="tiaojianItem" @click="showPx">
        最新排序
        <span class="iconfont" v-show="paixuU">&#xe632;</span>
        <span class="iconfont" v-show="!paixuU">&#xe630;</span>
      </div>
      <div class="tiaojianItem" @click="showSj">
        全部时间
        <span class="iconfont" v-show="timeU">&#xe632;</span>
        <span class="iconfont" v-show="!timeU">&#xe630;</span>
      </div>
      <div class="tiaojianItem">
        最新上架
      </div>
      <div class="tiaojianItem" @click="shaixuanBtn">
          <span class=" shaixuan ">筛选
            <span class="iconfont">&#xe639;</span>
          </span>
      </div>
    </div>
    <div class="sxHide" v-show="showSx" @click="hideSxBtn">
      <div class="sxDiv" ref="rollsx">
        <div class="shaixuanDiv">
          <div class="zilei">
            <span class="shaixuanTitle">子类</span>
            <div class="zileiDiv" >
              <span class="zileiItem " v-for="(item, index) of zileimingcheng" :key="index" @click.stop="chooseZiLei(index)" :class="{chosezilei: index==chosezlnum}">
                {{item.content}}
              </span>
            </div>
          </div>
          <div class="zilei cities" @click="choseCity">
            <div class="rmcs">
              <span class="shaixuanTitle">热门城市</span>
              <div class="zileiDiv">
                <span class="zileiItem hocityItem">
            北京
          </span>
                <span class="zileiItem hocityItem">
            上海
          </span>
                <span class="zileiItem hocityItem">
            深圳
          </span>
                <span class="zileiItem hocityItem">
            广州
          </span>
                <span class="zileiItem hocityItem">
            杭州
          </span>
                <span class="zileiItem hocityItem">
            天津
          </span>
                <span class="zileiItem hocityItem">
                  重庆
                </span>
                <span class="zileiItem hocityItem">
                  成都
                </span>
                <span class="zileiItem hocityItem">
                  西安
                </span>
              </div>
            </div>
            <div class="allCity">
              <div class="cityItem">
                <span class="shaixuanTitle">东北</span>
                <div class="zileiDiv">
          <span class="zileiItem hocityItem">
            北京
          </span>
                  <span class="zileiItem hocityItem">
            上海
          </span>
                  <span class="zileiItem hocityItem">
            深圳
          </span>
                  <span class="zileiItem hocityItem">
            广州
          </span>
                  <span class="zileiItem hocityItem">
            杭州
          </span>
                  <span class="zileiItem hocityItem">
            天津
          </span>
                  <span class="zileiItem hocityItem">
            重庆
          </span>
                  <span class="zileiItem hocityItem">
            成都
          </span>
                  <span class="zileiItem hocityItem">
            西安
          </span>
                </div>
              </div>
              <div class="cityItem">
                <span class="shaixuanTitle">东北</span>
                <div class="zileiDiv">
          <span class="zileiItem hocityItem">
            北京
          </span>
                  <span class="zileiItem hocityItem">
            上海
          </span>
                  <span class="zileiItem hocityItem">
            深圳
          </span>
                  <span class="zileiItem hocityItem">
            广州
          </span>
                  <span class="zileiItem hocityItem">
            杭州
          </span>
                  <span class="zileiItem hocityItem">
            天津
          </span>
                  <span class="zileiItem hocityItem">
            重庆
          </span>
                  <span class="zileiItem hocityItem">
            成都
          </span>
                  <span class="zileiItem hocityItem">
            西安
          </span>
                </div>
              </div>
              <div class="cityItem">
                <span class="shaixuanTitle">东北</span>
                <div class="zileiDiv">
          <span class="zileiItem hocityItem">
            北京
          </span>
                  <span class="zileiItem hocityItem">
            上海
          </span>
                  <span class="zileiItem hocityItem">
            深圳
          </span>
                  <span class="zileiItem hocityItem">
            广州
          </span>
                  <span class="zileiItem hocityItem">
            杭州
          </span>
                  <span class="zileiItem hocityItem">
            天津
          </span>
                  <span class="zileiItem hocityItem">
            重庆
          </span>
                  <span class="zileiItem hocityItem">
            成都
          </span>
                  <span class="zileiItem hocityItem">
            西安
          </span>
                </div>
              </div>
              <div class="cityItem">
                <span class="shaixuanTitle">东北</span>
                <div class="zileiDiv">
          <span class="zileiItem hocityItem">
            北京
          </span>
                  <span class="zileiItem hocityItem">
            上海
          </span>
                  <span class="zileiItem hocityItem">
            深圳
          </span>
                  <span class="zileiItem hocityItem">
            广州
          </span>
                  <span class="zileiItem hocityItem">
            杭州
          </span>
                  <span class="zileiItem hocityItem">
            天津
          </span>
                  <span class="zileiItem hocityItem">
            重庆
          </span>
                  <span class="zileiItem hocityItem">
            成都
          </span>
                  <span class="zileiItem hocityItem">
            西安
          </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="reset">
        <span @click="chongzhi">重置</span>
        <span @click.stop="wancheng">完成</span>
      </div>
    </div>
    <div class="hideXX">
      <ul class="paixu hideClass" v-show="!paixuU" >
        <li class="paixuLi" v-for="(item,index) of paixudata" :key="index" @click="paixuchoose(index)" :class="{dagouXZ:index==paixudataClass}">
          <span>
            {{item.content}}
          </span>
          <span class="iconfont dagou">&#xe63c;</span>
        </li>
      </ul>
      <Calendar
        v-if="hackReset"
        v-show="!timeU"
        v-on:choseDay="clickDay"
        class="date"
      ></Calendar>
      <div class="hideBack" v-show="hidebackN"></div>
    </div>
  </div>
</template>

<script>
import Calendar from 'vue-calendar-component'
import Bscroll from 'better-scroll'
export default {
  name: 'iconshaixuan',
  components: {
    Calendar
  },
  data () {
    return {
      hackReset: false,
      arr: [{date: '2018/4/1', className: 'mark1'}, {date: '2018/4/13', className: 'mark2'}],
      chosezlnum: -1,
      paixuU: true,
      timeU: true,
      hidebackN: false,
      shijian: false,
      showSx: false,
      finallChose: null,
      paixudata: [{id: '001', content: '推荐排序'}, {id: '003', content: '最近开场'}],
      paixudataClass: 0,
      zileimingcheng: [{id: '01', content: '流行'}, {id: '02', content: '摇滚'}, {id: '03', content: '民族'}, {id: '04', content: '音乐节'}, {id: '05', content: '其他'}]
    }
  },
  methods: {
    clickDay (data) {
      console.log(data)
      this.$emit('clickDay', data)
      this.timeU = true
    },
    resetall () {
      this.paixuU = true
      this.timeU = true
    },
    showPx () {
      this.paixuU = !this.paixuU
      this.hideUl = !this.hideUl
      this.timeU = true
    },
    showSj () {
      this.timeU = !this.timeU
      this.hideUl = !this.hideUl
      this.paixuU = true
    },
    shaixuanBtn () {
      this.showSx = true
    },
    hideSxBtn () {
      this.showSx = false
    },
    chooseZiLei (index) {
      this.chosezlnum = index
    },
    wancheng () {
      if (this.finallChose) {
        this.finallChose = null
        this.showSx = false
      }
      console.log(this.finallChose)
    },
    paixuchoose (index) {
      this.$emit('paixu', index)
      this.paixudataClass = index
      this.$emit('chosehide', index)
      this.paixuU = true
      console.log(index)
    },
    choseCity (e) {
      this.$store.state.defaultCity = e.target.innerText
    },
    chongzhi () {
      this.paixudataClass = 0
      this.chosezlnum = -1
      this.resetall()
    }
  },
  mounted () {
    this.scroll = new Bscroll(this.$refs.rollsx, {
      click: true
    })
  },
  activated () {
    this.paixudataClass = 0
    this.paixuU = true
    this.timeU = true
    this.hackReset = false
    this.$nextTick(() => {
      this.hackReset = true
    })
  }
}
</script>

<style>
  .allDiv{
    position: fixed;
    top:.7rem;
    left: 0;
    right: 0;
    background: #ffffff;
    z-index: 6;
  }
  .date .wh_content_all[data-v-59b8f458]{
    background: #f9f9f9;
  }
  .date .wh_content_item .wh_other_dayhide[data-v-59b8f458]{
    color: #a4a4a4;
  }
  .date .wh_content_item .wh_isToday[data-v-59b8f458]{
    background: #ffa3a7;
    border-radius: 0;
    color: white;
  }
  .date .wh_content_item .wh_chose_day[data-v-59b8f458]{
    background:deeppink;
    border-radius: 0;
    color: white;
  }
  .wh_top_tag[data-v-59b8f458]{
    color: black;
  }
  .wh_item_date[data-v-59b8f458]{
    color: black;
  }
  .date .wh_jiantou1[data-v-59b8f458]{
    border-top: 2px solid black;
    border-left: 2px solid black;
  }
  .date .wh_jiantou2[data-v-59b8f458]{
    border-top: 2px solid black;
    border-right: 2px solid black;
  }
  .date .wh_top_changge li[data-v-59b8f458]{
    color: black;
  }
  .shaixuanDiv{
    position: absolute;
    right: 0;
    top:0;
    background: #ffffff;
    z-index: 3;
    padding: .6rem .2rem;
    box-sizing: border-box;
  }
  .shaixuanTitle{
    color: #898989;
  }
  .zileiDiv{
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    margin-top: .3rem;
    padding-right: .8rem;
    padding-bottom: .4rem;
  }
  .zileiItem{
    display: inline-block;
    width: 1.8rem;
    height: .9rem;
    background: #c5c5c5;
    border-radius: .05rem;
    text-align: center;
    line-height: .9rem;
    margin-bottom: .2rem;
    font-size: .2rem;
  }
  .reset{
    width: 80%;
    line-height: .7rem;
    position: fixed;
    bottom: 0;
    right: 0;
    z-index: 13;
    display: flex;
    font-size: .2rem;
    text-align: center;
  }
  .reset span:first-child{
    width: 30%;
    background: pink;
    color: deeppink;
    display: inline-block;
  }
  .reset span:last-child{
    display: inline-block;
    width: 70%;
    background: deeppink;
    color: #ffffff;
  }
  .tiaojian{
    display: flex;
    justify-content: space-around;
    text-align: center;
    line-height: .7rem;
    background: #ffffff;
    padding: 0 .1rem;
    position: relative;
    top: 0;
    z-index: 5;
  }
  div .border-bottom{
    border: #efefef;
  }
  .shaixuan{
    padding-left: .5rem;
    box-sizing: border-box;
  }
  .shaixuan .iconfont{
    font-size: 12px;
  }
  .tiaojianItem{
    color: #898989;
    position: relative;
    font-size: 14px;
  }
  .hideXX{
    position: relative;
    height: auto;
    top: 0;
    left: 0;
    right: 0;
    z-index: 10;
  }
  .hideXX ul{
    background: #ffffff;
    padding: .2rem .16rem;
    position: absolute;
    top: 0;
    left:0;
    right: 0;
  }
  .hideXX span{
    line-height: .8rem;
    display: block;
    color: #898989;
  }
  .hideBack{
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0,0,0,.5);
    z-index: -10;
  }
  .paixuLi{
    display: flex;
    justify-content: space-between;
    padding-right: .2rem;
  }
  .sxHide{
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0,0,0,.5);
    z-index: 10;
    overflow: hidden;
  }
  .sxDiv{
    position: absolute;
    top:0;
    bottom: 0;
    right: 0;
    z-index: 11;
    width: 80%;
    background: #ffffff;
  }
  .hideXX .dagouXZ a,.hideXX .dagouXZ span{
    color: deeppink;
  }
  .hideXX .dagou{
    color: white;
    line-height: .8rem;
    font-size: .2rem;
  }
  .allDiv .zileiDiv .chosezilei{
    background: pink;
    color: deeppink;
  }
</style>
