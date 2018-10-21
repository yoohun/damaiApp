<template>
  <div class="iconContent" ref="wrapper">
    <div>
      <div class="iconitem" v-for="item of iconList" :key="item.id" @click="clickiconitem(item.iconid, item.iconitemtitle)">
        <div class="iconImgs">
          <img :src="item.imgUrl" alt="">
        </div>
        <div class="contentText">
          <div class="contentTitle">{{item.iconitemtitle}}</div>
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
    iconList: Array
  },
  data () {
    return {
    }
  },
  methods: {
    clickiconitem (iconid, iconitemtitle) {
      this.$router.push({
        name: 'detail',
        query: {
          id: iconid
        }
      })
      this.$store.state.iconid = iconid
      this.$store.state.iconitemtitle = iconitemtitle
    }
  }
}
</script>

<style scoped="scoped">
.iconContent{
  position: absolute;
  top:1rem;
  left: 0;
  right: 0;
  bottom: 0;
  padding-bottom: 1rem;
}
.iconitem{
  height: 2.4rem;
  margin: .6rem .3rem;
  box-sizing: border-box;
  display: flex;
  position: relative;
  padding-top: .5rem;
}
.iconImgs{
  height: 2rem;
  margin-right: .28rem;
}
.iconImgs img{
  height: 100%;
}
.contentTitle{
  line-height: .4rem;
}
.contentJt{
  width: 100%;
  font-size: 10px;
  overflow: hidden;
  margin-top: .1rem;
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
