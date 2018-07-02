<template>
    <ul class="alphebet">
      <li class="alphebetLitem">A</li>
      <li class="alphebetLitem">B</li>
      <li class="alphebetLitem">C</li>
      <li class="alphebetLitem">D</li>
      <li class="alphebetLitem">E</li>
      <li class="alphebetLitem">F</li>
      <li class="alphebetLitem">G</li>
      <li class="alphebetLitem">H</li>
      <li class="alphebetLitem">A</li>
      <li class="alphebetLitem">B</li>
      <li class="alphebetLitem">C</li>
      <li class="alphebetLitem">D</li>
      <li class="alphebetLitem">E</li>
      <li class="alphebetLitem">F</li>
      <li class="alphebetLitem">G</li>
      <li class="alphebetLitem">H</li>
      <li class="alphebetLitem">I</li>
    </ul>
</template>

<script>
export default {
  name: 'alphebet'
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
    background: #25a4bb;
    text-align: center;
  }
  .alphebetLitem{
    font-size: .26rem;
    line-height: .38rem;
  }
</style>
