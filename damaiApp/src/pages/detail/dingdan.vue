<template>
  <div class="ticketdiv">
    <ddheader></ddheader>
    <ticketcontent :title="title" :place="place" :detailtime="detailtime"></ticketcontent>
    <getticket></getticket>
    <getaddress></getaddress>
    <payfor></payfor>
    <dingdanbottom :ticketprice="ticketprice"></dingdanbottom>
  </div>
</template>

<script>
import ddheader from './components/dingdan/ddheader'
import ticketcontent from './components/dingdan/ticketcontent'
import getticket from './components/dingdan/getticket'
import getaddress from './components/dingdan/getaddress'
import payfor from './components/dingdan/payfor'
import dingdanbottom from './components/dingdan/dingdanbottom'
export default {
  name: 'dingdan',
  components: {
    ddheader,
    ticketcontent,
    getticket,
    getaddress,
    payfor,
    dingdanbottom
  },
  data () {
    return {
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
