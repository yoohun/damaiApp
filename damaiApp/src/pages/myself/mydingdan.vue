<template>
  <div>
    <dingdanheader :componenttitle="componenttitle"></dingdanheader>
    <div class="dingdannav">
      <span :class="{ddnavclass:index==navclass}" v-for="(item, index) of dingdannavList" :key="index" @click="choseddnav(index)">{{item.name}}</span>
    </div>
    <div>
      <dingdanitem></dingdanitem>
    </div>
  </div>
</template>

<script>
import dingdanheader from '../../components/dingdanheader'
import dingdanitem from './components/dingdanitem'
export default {
  name: 'mydingdan',
  components: {
    dingdanheader,
    dingdanitem
  },
  data () {
    return {
      componenttitle: '大麦订单',
      navclass: 6,
      dingdannavList: [{id: '001', name: '全部'}, {id: '002', name: '代付款'}, {id: '003', name: '待收货'}, {id: '004', name: '待评价'}]
    }
  },
  methods: {
    choseddnav (index) {
      this.navclass = index
    }
  }
}
</script>

<style>
html{
  background: #f3f3f3;
}
.dingdannav{
  display: flex;
  justify-content: space-between;
  color: #9c9c9c;
  background: #ffffff;
  padding: 0 .2rem;
  line-height:.8rem;
}
.dingdannav span{
  display: block;
  flex: 1;
  text-align: center;
}
.dingdannav .ddnavclass::after{
  content: "";
  display: block;
  width: 30%;
  height: .03rem;
  background: #ff1f62;
  margin: 0 auto;
}
.dingdannav .ddnavclass{
  color: #000000;
}
</style>
