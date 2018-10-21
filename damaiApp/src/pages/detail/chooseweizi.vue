<template>
  <div>
    <dingdanheader :componenttitle="componenttitle" :linka="linka"></dingdanheader>
    <zuowei></zuowei>
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
      componenttitle: '选择区域',
      linka: 'detail'
    }
  }
}
</script>

<style>
</style>
