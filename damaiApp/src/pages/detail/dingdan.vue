<template>
  <div class="ticketdiv">
    <dingdanheader :componenttitle="componenttitle" :linka="linka"></dingdanheader>
    <ticketcontent></ticketcontent>
    <getticket></getticket>
    <getaddress></getaddress>
    <payfor></payfor>
    <dingdanbottom></dingdanbottom>
  </div>
</template>

<script>
import dingdanheader from '../../components/dingdanheader'
import ticketcontent from './components/dingdan/ticketcontent'
import getticket from './components/dingdan/getticket'
import getaddress from './components/dingdan/getaddress'
import payfor from './components/dingdan/payfor'
import dingdanbottom from './components/dingdan/dingdanbottom'
export default {
  name: 'dingdan',
  components: {
    dingdanheader,
    ticketcontent,
    getticket,
    getaddress,
    payfor,
    dingdanbottom
  },
  data () {
    return {
      componenttitle: '订单确认',
      linka: 'detail'
    }
  }
}
</script>

<style>
.ticketdiv{
  width: 100%;
  height: 100%;
  background: #f7f7f7;
}
</style>
