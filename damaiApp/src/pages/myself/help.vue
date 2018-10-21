<template>
  <div>
    <dingdanheader :componenttitle="componenttitle"></dingdanheader>
    <ul class="helpul">
      <li class="helpli border-bottom" v-for="(item, index) in helplist" :key="index">
        <span class="iconfont">&#xe636;</span>
        {{item}}
      </li>
    </ul>
  </div>
</template>

<script>
import dingdanheader from '../../components/dingdanheader'
export default {
  name: 'help',
  components: {
    dingdanheader
  },
  data () {
    return {
      componenttitle: '帮助中心',
      helplist: ['订购方式', '订单说明', '支付方式', '配送方式', '账户安全', '售后服务', '大麦客户端', '大麦票夹', '特色服务', '大麦电影', '联系及合作', '企业荣誉']
    }
  }
}
</script>

<style>
body{
  background: white;
  height: 100%;
}
.helpul{
  background: #fbfbfb;
}
.helpli{
  line-height: .8rem;
  padding: 0 .3rem;
  display: block;
  font-size: .3rem;
}
.helpli .iconfont{
  color: deeppink;
  margin-right: .2rem;
  font-size: .24rem;
}
</style>
