<template>
  <div>
    <myselftop></myselftop>
    <homenav></homenav>
    <allticket></allticket>
    <necessarygj></necessarygj>
  </div>
</template>

<script>
import myselftop from './components/myselftop'
import homenav from '../../components/homenav'
import allticket from './components/allticket'
import necessarygj from './components/necessarygj'

export default {
  name: 'myself',
  components: {
    myselftop,
    homenav,
    allticket,
    necessarygj
  },
  mounted () {
    this.$store.commit('getToken')
  }
}
</script>

<style>
html{
  background: #f5f5f5;
}
</style>
