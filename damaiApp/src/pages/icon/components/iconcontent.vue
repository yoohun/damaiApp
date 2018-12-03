<template>
  <div class="iconContent" ref="wrapper">
    <div>
      <div class="iconitem" v-for="item of afterList " :key="item.id" @click="clickiconitem(item.iconid, item.iconitemtitle)">
        <div class="iconImgs">
          <img :src="item.imgUrl" alt="">
        </div>
        <div class="contentText">
          <span class="contentTitle">{{item.iconitemtitle}}</span>
          <div class="contentJt">
            <span class="contentProvince">{{item.iconitemprovince}}</span>
            <span class="contentTime">{{item.iconitemtime}}</span>
            <span class="contentPlace">{{item.iconitemplace}}</span>
          </div>
          <div class="contentPrice">{{item.iconitemprice}}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'iconcontent',
  props: {
    paixunum: Number,
    iconList: Array,
    hidenum: Number,
    clickdate: String
  },
  data () {
    return {
      num: 2,
      dateday: ''
    }
  },
  methods: {
    clickiconitem (iconid) {
      this.$router.push({
        name: 'detail',
        query: {
          id: iconid
        }
      })
      this.$store.state.iconid = iconid
    }
  },
  watch: {
    hidenum () {
      this.num = this.hidenum
    },
    clickdate () {
      this.dateday = this.clickdate
      console.log()
    }
  },
  computed: {
    afterList () {
      var obj = {}
      obj = JSON.parse(JSON.stringify(this.iconList))
      if (this.num === 1 && !this.dateday) {
        return obj.sort((a, b) => a.iconitemtime - b.iconitemtime)
      } else if (this.num === 0 && !this.dateday) {
        return this.iconList
      } else if (this.dateday) {
        var obj2 = {}
        for (var k in this.iconList) {
          if (this.iconList[k]['iconitemDate'] === this.dateday) {
            obj2[k] = this.iconList[k]
          }
        }
        return obj2
      }
      return obj
    }
  },
  beforeDestroy () {
    this.num = 2
    this.dateday = ''
  }
}
</script>

<style scoped="scoped">
.iconContent{
  position: absolute;
  top:1rem;
  left: .2rem;
  right: .2rem;
  bottom: 0;
  padding-bottom: 1rem;
}
.iconitem{
  height: 2.4rem;
  margin: .6rem 0;
  box-sizing: border-box;
  position: relative;
  padding-top: .5rem;
}
.iconitem::after{
  content: '';
  height: 0;
  width: 0;
  font-size: 0;
  border: 0;
  clear: both;
}
.iconImgs{
  height: 2rem;
  margin-right: .28rem;
  display: inline-block;
  float: left;
}
.iconImgs img{
  height: 100%;
}
.contentTitle{
  display: inline-block;
  font-size: .3rem;
  line-height: .4rem;
  flex: 1;
  overflow: hidden;
  text-overflow:ellipsis;
  white-space:nowrap
}
.contentText{
  width: 68.5%;
  overflow: hidden;
  text-overflow:ellipsis;
  white-space:nowrap;
  float: left;
}
.contentJt{
  width: 100%;
  font-size: .24rem;
  overflow: hidden;
  margin-top: .1rem;
  text-overflow:ellipsis;
  white-space:nowrap
}
.contentJt span{
  margin: .01rem;
}
.contentPrice{
  position: absolute;
  bottom: 0;
  font-size: 14px;
}
</style>
