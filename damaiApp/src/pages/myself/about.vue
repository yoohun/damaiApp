<template>
  <div>
    <dingdanheader :componenttitle="componenttitle"></dingdanheader>
    <div class="allabout">
      <div class="aboutLogo">
        <img src="../../../static/imgs/damailogo.png" alt="">
      </div>
      <p>大麦网成立于2004年，是全球华语排名领先的知名票务品牌，我们致力于为用户提供演唱会、音乐会、话剧、体育比赛
      等上万种门票订购服务。我们在为用户提供真实票源的同时，持续创新售前导购能力并着力提升售后服务，用“一张票”拉近
        用户与现场娱乐的距离，通过现场娱乐为生活带去更多新鲜与乐趣。
      </p>
      <p>在大麦APP，我们引入了丰富的演出项目与咨询、方便用户快速找到感兴趣的演出；支持在线选座、支持支付宝支付、微信支付
      等多种支付方式方便您的支付；在取票验票时，我们支持电子票、纸质票快递等多种方式，使演出观看更为便捷。
      </p>
      <p>感谢您对大麦网的支持，如果在购买过程中有任何疑问，请拨打客服热线1010-3721。</p>
      <div class="aboutdown">
        <span class="aboutbottom">手机版6.9.1.1</span>
        <span class="aboutbottom">版权所有 北京红马传媒文化发展有限公司</span>
      </div>
    </div>
  </div>
</template>

<script>
import dingdanheader from '../../components/dingdanheader'
export default {
  name: 'about',
  components: {
    dingdanheader
  },
  data () {
    return {
      componenttitle: '关于大麦'
    }
  }
}
</script>

<style>
html{
  background: #f5f5f5;
}
.allabout{
  margin: .2rem;
  background: #ffffff;
  padding: 0 .15rem .2rem;
}
.aboutLogo{
  height: 1rem;
  text-align: center;
  padding: .2rem 0;
  box-sizing: border-box;
  margin-bottom: .4rem;
}
.aboutLogo img{
  margin: auto;
  height: 100%;
}
.allabout p{
  letter-spacing: .01rem;
  line-height: .45rem;
  text-indent: 2em;
}
.aboutdown{
  margin-top: 1rem;
}
.aboutbottom{
  line-height: .5rem;
  text-align: center;
  display: block;
}
</style>
