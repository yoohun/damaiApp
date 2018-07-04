<template>
    <ul class="alphebet">
      <li class="alphebetLitem"
          v-for="item of letters"
          :key="item" @click="getLetter"
          @touchstart="letterStart"
          @touchmove="letterMove"
          @touchend="letterEnd"
          :ref="item">{{item}}</li>
    </ul>
</template>

<script>
export default {
  name: 'alphebet',
  props: {
    allcity: Object
  },
  data () {
    return {
      letterStatus: false
    }
  },
  computed: {
    letters () {
      const letters = []
      for (let i in this.allcity) {
        letters.push(i)
      }
      return letters
    }
  },
  methods: {
    getLetter (e) {
      this.$emit('change', e.target.innerHTML)
      console.log(e.target.innerHTML)
    },
    letterStart () {
      this.letterStatus = true
    },
    letterMove (e) {
      if (this.letterStatus) {
        const startY = this.$refs['A'][0].offsetTop
        const moveY = e.touches[0].clientY - 40
        const index = Math.floor((moveY - startY) / 15)
        if (index >= 0 && index < this.letters.length) {
          this.$emit('change', this.letters[index])
        }
      }
    },
    letterEnd () {
      this.letterStatus = false
    }
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
