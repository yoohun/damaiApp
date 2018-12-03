<template>
  <div class="tyjj">
    <div class="mainTitle">
      <span class="mainTitle-left">体育竞技</span>
      <span class="mainTitle-right" @click="tomore">更多 <span class="iconfont">&#xe631;</span> </span>
    </div>
    <div class="tyjjImg">
      <div class="tyRow">
        <div class="tyItem" v-for="item of tyItem" :key="item.id"  @click="toDetail(item.id, item.kind)">
          <img :src="item.imgUrl" alt="">
          <div class="hwxcDivName">
            <div class="hwxcDivNameAll">
              <div class="hwxcDivNameTop">{{item.tyTitle}}</div>
              <div class="hwxcDivNameBottom">{{item.tyDesc}}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'tyjj',
  props: {
    tyItem: Array
  },
  methods: {
    toDetail (id, kind) {
      this.$router.push({
        name: 'detail',
        query: {
          id: id
        }
      })
      this.$store.state.iconid = id
      this.$store.state.iconkind = kind
    },
    tomore () {
      this.$store.state.iconChoose = '体育比赛'
      this.$store.state.iconclassNum = 4
      this.$router.push('/icon')
    }
  }
}
</script>

<style>
  .tyjj{
    padding: 0 .1rem;
  }
  .mainTitle{
    padding: 0 0.1rem;
  }
  .tyjjImg{
    padding: 0 .1rem;
  }
  .tyRow{
    height: 0;
    padding-bottom: 92.5%;
    overflow: hidden;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  }
  .tyItem{
    color: black;
    padding-bottom: 46.25%;
    width: 48%;
    float: left;
    height: 0;
  }
  .tyItem img{
    width: 100%;
  }
  .tyItem .hwxcDivNameImg img{
    width: .5rem;
    height: .5rem;
  }
  .tyItem .hwxcDivNameAll .hwxcDivNameBottom{
    font-size: .22rem;
    color: #000000;
    display: block;
    overflow: hidden;
    text-overflow:ellipsis;
    white-space: nowrap;
  }
  .hwxcDivNameTop{
    overflow: hidden;
    text-overflow:ellipsis;
    white-space: nowrap;
    margin: .2rem 0;
    font-size: .22rem;
  }
  .hwxcDivNameAll{
    width: 100%;
    display: block;
  }
  .tyjjbanner img{
    height: 1.2rem;
  }
</style>
