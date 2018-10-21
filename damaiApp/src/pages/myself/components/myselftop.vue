<template>
  <div>
    <div class="myheader">
      <div class="headerTop">
        <router-link to="/myself/setting" class="headerlink">
          <span>设置</span>
        </router-link>
        <span class="iconfont" @click="clickmsg">
          &#xe637;
          <span class="xinxinum" v-show="this.$store.state.islogin">9+</span>
        </span>
      </div>
      <div class="headerbottom">
        <div class="headerlink" @click="clicktx">
          <div class="headerbottomuser">
            <div class="headerbottomloginuser" v-show="this.$store.state.islogin">
              <div class="headerbottomuserimg">
                <img src="../../../../static/imgs/damaiimg.png" alt="">
              </div>
              <span>欲盖弥彰</span>
            </div>
            <div class="headerbottomnouser" v-show="!this.$store.state.islogin">
              <div class="headerbottomuserimg nologinimg">
                <img src="../../../../static/imgs/weidengluimg.png" alt="">
              </div>
              <span>登录 / 注册</span>
            </div>
        </div>
        </div>
        <div v-show="this.$store.state.islogin">
          个人主页
          <span class="iconfont">&#xe631;</span>
        </div>
      </div>
    </div>
    <div class="myhuiyuan">
      <div class="huiyuan border-bottom">
        <div class="huiyuanleft border-right">
          <span class="iconfont">&#xe65e;</span>
          会员中心
        </div>
        <div class="huiyuanright">
          <span>查看会员权益</span>
          <span>享受更多会员惊喜好礼</span>
        </div>
      </div>
      <div class="huiyuandown">
        <div>
          <span>0.00元</span>
          <span>电子钱包</span>
        </div>
        <div>
          <span>0张</span>
          <span>优惠券</span>
        </div>
        <div>
          <span>0分</span>
          <span>积分</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'myselftop',
  methods: {
    clickmsg () {
      if (this.$store.state.loginin) {
        console.log('消息列表')
      } else {
        this.$router.go('/myself/login')
      }
    },
    clicktx () {
      if (localStorage.getItem('loginphone')) {
        console.log('有')
      } else {
        this.$router.push('./myself/changezh')
      }
    }
  }
}
</script>

<style>
  .myheader{
    height: 2.5rem;
    background: -webkit-linear-gradient(left, #ff42a5, #fd1d6a); /* Safari 5.1 - 6.0 */
    background: -o-linear-gradient(right, #ff42a5, #fd1d6a); /* Opera 11.1 - 12.0 */
    background: -moz-linear-gradient(right, #ff42a5, #fd1d6a); /* Firefox 3.6 - 15 */
    background: linear-gradient(to right, #ff42a5 , #fd1d6a); /* 标准的语法 */
  }
  .headerTop{
    display: flex;
    justify-content: space-between;
    line-height: 1rem;
    color: #ffffff;
    font-size: .3rem;
    padding: 0 .2rem;
  }
  .headerTop .iconfont{
    font-size: .5rem;
    position: relative;
    padding: 0 .2rem;
  }
  .headerTop .xinxinum{
    background: #ffffff;
    display: inline-block;
    border-radius: .2rem;
    color: deeppink;
    font-size: 10px;
    line-height: .26rem;
    padding: 0 .08rem;
    position: absolute;
    right: 0;
    top:.2rem;
  }
  .headerbottom{
    display: flex;
    justify-content: space-between;
    color: #ffffff;
    line-height: 1.4rem;
    padding: 0 .2rem;
    position: relative;
  }
  .headerlink{
    color: white;
  }
  .headerbottomuser{
    width: 50%;
  }
  .headerbottomuserimg{
    height: 1.3rem;
    width: 1.3rem;
    border-radius: .65rem;
    border: 1px solid white;
    margin-top: .2rem;
    background: #e3e3e3;
    overflow: hidden;
    position: relative;
    bottom: -.1rem;
  }
  .headerbottomuserimg img{
    height: 1.3rem;
    position: absolute;
    top:0;
    left: 50%;
    margin-left: -.42rem;
  }
  .headerbottomuser span{
    position: absolute;
    left: 1.8rem;
    top:0;
  }
  .myhuiyuan{
    height: 2.4rem;
    background: #ffffff;
    padding: 0 .2rem;
  }
  .huiyuan{
    font-size: .3rem;
    color: #dfbb5f;
    display: flex;
    justify-content: space-between;
    padding: .2rem 0 .2rem .4rem;
  }
  .huiyuan .iconfont{
    color: #dfbb5f;
    font-size: .48rem;
    margin-right: .1rem;
  }
  .huiyuanleft{
    padding-right: .2rem;
    display: inline-block;
    margin: .2rem 0;
  }
  .huiyuanright{
    flex: 1;
    display: inline-block;
    height: 1rem;
    padding: .1rem 0 .1rem .3rem;
    box-sizing: border-box;
  }
  .huiyuanright span{
    font-size: .26rem;
    color: #000000;
    display: block;
    line-height: .4rem;
  }
  .huiyuanright span:last-child{
    color: #cacaca;
    font-size: 10px;
  }
  .huiyuandown{
    display: flex;
    justify-content: space-between;
  }
  .huiyuandown>div{
    width: 33.33%;
    text-align: center;
    height: 1rem;
    box-sizing: border-box;
    padding-top: .1rem;
  }
  .huiyuandown>div span{
    display: inline-block;
    width: 100%;
    line-height: .4rem;
    font-size: 10px;
  }
  .nologinimg img{
    height: 1.2rem;
    top:.09rem;
    margin-left: -.55rem;
  }
</style>
