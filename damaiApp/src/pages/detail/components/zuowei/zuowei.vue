<template>
  <div ref="scrollZW">
    <div class="zuowei">
      <div class="zuoweiItem" v-for="(item, index) of price" :key="item" @click="choseprice(index, item)">
        <span class="zuoweiIcon iconfont" :class="{active:index == classnum}">&#xe63f;</span>
        <span class="zuoweiText">{{item}}元</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'zuowei',
  data () {
    return {
      price: [480, 580, 680, 980, 1080],
      classnum: -1
    }
  },
  methods: {
    choseprice (index, item) {
      this.classnum = index
      this.$store.state.ticketprice = item
    }
  }
}
</script>

<style>
.zuowei{
  width: 100%;
  height: auto;
  background: #e5e5e5;
  padding: .09rem;
  box-sizing: border-box;;
  overflow: hidden;
  display: flex;
  flex-wrap: wrap;
}
.zuoweiItem{
  width: 1.5rem;
  line-height: .6rem;
  background: #ffffff;
  text-align: center;
  border-radius: .08rem;
  position: relative;
  display: inline-block;
  margin: .1rem .1rem;
  padding: 0;
}
.zuoweiItem::before{
  content: '';
  height: .14rem;
  width: .14rem;
  display: block;
  line-height: 0;
  position: absolute;
  left: 0;
  top:50%;
  margin-top: -.06rem;
  border-radius: .09rem;
  margin-left: -.07rem;
  background:#e5e5e5 ;
  z-index: 2;
}
.zuoweiItem span{
  display: inline-block;
  line-height: .5rem;
}
.active{
  color: deeppink;
}
.zuoweiText{
  font-size: 10px;
}
</style>
