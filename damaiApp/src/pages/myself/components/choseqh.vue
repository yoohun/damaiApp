<template>
  <div class="countryList" v-show="choosecity" @click="hidecity">
    <div>
      <span class="countryListTitle">选择国家和地区</span>
      <span class="countryLi border-bottom " v-for="(item, index) of countries" :key="index" :class="{active:index==cityclass}" @click="phonecity(index)">
          <span>{{item.cityname}}</span>
          <span class="iconfont" v-if="index==cityshow ? 1 : 0">&#xe63c;</span>
        </span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'choseqh',
  props: {
    choosecity: Number
  },
  data () {
    return {
      yzmdisable: 'disabled',
      cityshow: 0,
      cityclass: 0,
      countries: [{id: '001', cityname: '中国大陆 +86'}, {id: '001', cityname: '中国香港 +852'}, {id: '001', cityname: '中国台湾 +886'}, {id: '001', cityname: '中国澳门 +853'}]
    }
  },
  methods: {
    hidecity () {
      this.$emit('hidecity')
    },
    phonecity (index) {
      this.$emit('choseqhnumber', index)
      this.cityclass = this.cityshow = index
    }
  }
}
</script>

<style>
  .countryList{
    position: fixed;
    left: 0;
    right: 0;
    top:0;
    bottom: 0;
    background: rgba(0,0,0,.5);
  }
  .countryList>div{
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    height: 4.4rem;
    background: #ffffff;
  }
  .countryListTitle{
    display: block;
    text-align: center;
    line-height: .8rem;
    font-size: .3rem;
  }
  .countryList .countryLi{
    display: flex;
    justify-content: space-between;
    line-height: .5rem;
    padding: .2rem;
    box-sizing: border-box;
  }
  .countryLi .iconfont{
    font-size: 10px;
  }
  .countryList>div .active{
    color: deeppink;
  }
  .countryListTitle>span:last-child{
    border: none;
  }
</style>
