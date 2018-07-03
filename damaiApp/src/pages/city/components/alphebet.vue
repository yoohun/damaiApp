<template>
    <ul class="alphebet">
      <li class="alphebetLitem" v-for="(item,key) of allcity" :key="key">{{key}}</li>
    </ul>
</template>

<script>
export default {
  name: 'alphebet',
  props: {
    allcity: Object
  }
}
</script>

<style>
  .alphebet{
    display: flex;
    flex-direction: column;
    justify-content: center;
    position: fixed;
    right: 0;
    top:.78rem;
    bottom: 0;
    width: .4rem;
    text-align: center;
  }
  .alphebetLitem{
    font-size: .1rem;
    line-height: .3rem;
  }
</style>
