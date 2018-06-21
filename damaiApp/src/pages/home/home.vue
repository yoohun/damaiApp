<template>
  <div>
    <homeheader></homeheader>
    <homeswiper></homeswiper>
    <homeicon></homeicon>
  </div>
</template>

<script>
import homeheader from './components/homeheader'
import homeswiper from './components/homeswiper'
import homeicon from './components/homeicon'
export default {
  name: 'home',
  components: {
    homeheader,
    homeswiper,
    homeicon
  }
}
</script>

<style>
</style>
