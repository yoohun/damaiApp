<template>
  <div>
    <homeheader></homeheader>
    <homeswiper></homeswiper>
  </div>
</template>

<script>
import homeheader from './components/homeheader'
import homeswiper from './components/homeswiper'
export default {
  name: 'home',
  components: {
    homeheader,
    homeswiper
  }
}
</script>

<style>
</style>
