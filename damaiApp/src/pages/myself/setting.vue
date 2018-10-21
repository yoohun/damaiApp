<template>
  <div>
    <div class="settingtop">
      <dingdanheader :componenttitle="componenttitle"></dingdanheader>
      <div class="settingli" @click="Account_security">
        <span class="iconfont">&#xe608;</span>
        <span>账号安全</span>
      </div>
    </div>
    <div class="settingtop">
      <div class="settingli border-bottom">
        <span class="iconfont">&#xe650;</span>
        <span>清空缓存</span>
      </div>
      <div class="settingli">
        <span class="iconfont">&#xe65a;</span>
        <span>检查更新</span>
      </div>
    </div>
    <div class="settingtop newmessage">
      <div class="settingli">
        <span class="iconfont">&#xe661;</span>
        <span>接受新消息通知</span>
      </div>
      <span>已开启</span>
    </div>
    <span class="settinglitle">您可以在设置>通知>大麦中关闭新信息通知</span>
    <div class="settingtop">
      <router-link to="help" class="settingli border-bottom linkstyle">
        <span class="iconfont">&#xe62c;</span>
        <span>帮助中心</span>
      </router-link >
      <div class="settingli border-bottom">
        <router-link to="about" class="linkstyle">
          <span class="iconfont">&#xe656;</span>
          <span>关于大麦</span>
        </router-link>
      </div>
      <div class="settingli newmessage">
        <div>
          <span class="iconfont">&#xe628;</span>
          <span>客服电话</span>
        </div>
        <span>1010 3721</span>
      </div>
    </div>
    <span class="exitlogin" @click="Exit" v-show="this.$store.state.islogin">退出登录</span>
  </div>
</template>

<script>
import dingdanheader from '../../components/dingdanheader'
export default {
  name: 'setting',
  components: {
    dingdanheader
  },
  data () {
    return {
      componenttitle: '设置'
    }
  },
  methods: {
    Exit () {
      console.log('退出')
      this.$store.commit('delToken')
      this.$store.state.islogin = false
      this.$router.push('./')
    },
    Account_security () {
      if (this.$store.state.islogin) {
        this.$router.push('./setuserinfor')
      } else {
        this.$router.push('./changezh')
      }
    }
  }
}
</script>

<style>
html{
  background: #f5f5f5;
}
body{
  background: #f5f5f5;
}
.settingli{
  display: block;
  line-height: 1rem;
  padding: 0 .2rem;
  font-size: .3rem;
}
.settingli .iconfont{
  margin-right: .1rem;
  font-size: .34rem;
}
.settingtop{
  margin-bottom: .2rem;
  background: #ffffff;
}
.newmessage{
  display: flex;
  justify-content: space-between;
}
.newmessage>span{
  line-height: 1rem;
  margin-right: .2rem;
  font-size: 10px;
  color: #9c9c9c;
  letter-spacing: .04rem;
}
.settinglitle{
  font-size: 10px;
  color: #9c9c9c;
  line-height: .3rem;
  letter-spacing: .03rem;
  padding-left: .2rem;
  margin-bottom: .6rem;
  display: inline-block;
}
.exitlogin{
  line-height: .8rem;
  text-align: center;
  margin: .2rem;
  background: deeppink;
  color: white;
  font-size: .2rem;
  display: block;
  border-radius: .05rem;
}
.linkstyle{
  color: #000000;
}
</style>
