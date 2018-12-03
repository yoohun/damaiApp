<template>
  <div class="dingdanheader">
    <span class="iconfont" @click="linkclick">&#xe625;</span>
    <span class="xwTitle">{{this.componenttitle}}</span>
  </div>
</template>

<script>
export default {
  name: 'dingdanheader',
  props: {
    componenttitle: String,
    linka: String
  },
  methods: {
    linkclick () {
      this.$router.go(-1)
    }
  }
}
</script>

<style>
.dingdanheader{
  height: .8rem;
  background: white;
  padding: 0 .2rem;
  display: flex;
}
.dingdanheader .iconfont{
  color: #cacaca;
  display: inline-block;
  line-height: .8rem;
}
.xwTitle{
  line-height: .8rem;
  display: inline-block;
  text-align: center;
  flex: 1;
  font-size: .32rem;
}
</style>
