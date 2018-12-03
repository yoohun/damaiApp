<template>
  <div class="ticketdiv">
    <dingdanheader :componenttitle="componenttitle" :linka="linka"></dingdanheader>
    <ticketcontent :title="title" :place="place" :detailtime="detailtime"></ticketcontent>
    <getticket></getticket>
    <getaddress></getaddress>
    <payfor></payfor>
    <dingdanbottom :ticketprice="ticketprice"></dingdanbottom>
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
      linka: 'detail',
      title: '',
      place: '',
      detailtime: '',
      ticketprice: 0
    }
  },
  mounted () {
    this.title = this.$store.state.detailtitle
    this.place = this.$store.state.place
    this.detailtime = this.$store.state.detailtime
    this.ticketprice = this.$store.state.ticketprice
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
