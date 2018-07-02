<template>
  <div class="cityAll">
    <cityheader></cityheader>
    <ddcity></ddcity>
    <alphebet></alphebet>
  </div>
</template>

<script>
import cityheader from './components/cityheader'
import ddcity from './components/dingdiancity'
import alphebet from './components/alphebet'
export default {
  name: 'city',
  components: {
    cityheader,
    ddcity,
    alphebet
  }
}
</script>

<style>
.cityAll{
  background: #F0F4F3;
}
</style>
