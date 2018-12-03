<template>
  <div>
    <dingdanheader :componenttitle="componenttitle"></dingdanheader>
    <zuowei></zuowei>
    <p class="sure" @click="sureticket">确认</p>
  </div>
</template>

<script>
import dingdanheader from '../../components/dingdanheader'
import zuowei from './components/zuowei/zuowei'
export default {
  name: 'chooseweizi',
  components: {
    dingdanheader,
    zuowei
  },
  data () {
    return {
      componenttitle: '选择区域'
    }
  },
  methods: {
    sureticket () {
      this.$router.push('./dingdan')
    }
  }
}
</script>

<style>
.sure{
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  line-height: .7rem;
  background: deeppink;
  text-align: center;
  font-size: .34rem;
  color: white;
}
</style>
