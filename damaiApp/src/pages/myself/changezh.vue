<template>
  <div>
    <div class="loginHeader">
      <router-link to="/myself">
        <span class="iconfont">&#xe657;</span>
      </router-link>
    </div>
    <div class="damailogo">
      <span class="iconfont">&#xe65d;</span>
    </div>
    <div class="zhucediv">
      <div class="border-bottom">
        <span class="border-right" @click="chosecity" :choosecity="choosecity">{{quhao}} <span class="iconfont">&#xe632;</span> </span>
        <input type="text" placeholder="请输入手机号" v-model="loginphone">
      </div>
      <div class="border-bottom" v-show="dlway">
        <input type="text" placeholder="请输入验证码" v-model="loginyzm">
        <button class="changegetyzm" disabled>获取验证码</button>
      </div>
      <div class="border-bottom mima" v-show="!dlway">
        <input type="password" placeholder="请输入你的密码" v-model="loginpsw">
      </div>
      <input disabled class="hadregist" v-model="showmsg">
      <button class="sgreeregist" @click="loginin">登录</button>
      <div class="pswlogin">
        <span @click="msglogin" v-show="dlway">账户密码登录</span>
        <span @click="msglogin" v-show="!dlway">短信验证码登录</span>
        <span v-show="!dlway">忘记密码</span>
        <router-link to="/myself/regist">
          <span>新用户注册</span>
        </router-link>
      </div>
    </div>
    <choseqh @choseqhnumber="choseqh" :choosecity="choosecity" @hidecity="hidecity" ></choseqh>
  </div>
</template>

<script>
import axios from 'axios'
import choseqh from './components/choseqh'
export default {
  name: 'changezh',
  components: {
    choseqh
  },
  data () {
    return {
      choosecity: 0,
      quhao: '+86',
      dlway: true,
      showmsg: '',
      loginphone: '',
      loginpsw: '',
      loginyzm: ''
    }
  },
  methods: {
    hidecity () {
      this.choosecity = 0
    },
    chosecity () {
      this.choosecity = 1
    },
    msglogin () {
      this.dlway = !this.dlway
    },
    choseqh (index) {
      switch (index) {
        case 0:
          this.quhao = '+86'
          break
        case 1:
          this.quhao = '+852'
          break
        case 2:
          this.quhao = '+886'
          break
        case 3:
          this.quhao = '+853'
          break
        default:
          console.log('出错了')
      }
    },
    loginin () {
      if (!this.loginphone) {
        this.showmsg = '请输入手机号'
      } else if (this.dlway && this.loginphone && !this.loginyzm) {
        this.showmsg = '请输入验证码'
      } else if (!this.dlway && this.loginphone && !this.loginpsw) {
        this.showmsg = '请输入密码'
      } else if (!this.dlway && this.loginphone && this.loginpsw) {
        this.showmsg = ''
        axios({
          url: 'http://localhost:80/login.php',
          method: 'post',
          data: {phone: this.loginphone, psw: this.loginpsw},
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
          }
        })
          .then(this.logininpsw)
          .catch(function (error) {
            console.log(error)
          })
      } else if (this.dlway && this.loginphone && this.loginyzm) {
        this.showmsg = ''
        axios({
          url: 'http://localhost:80/loginyzm.php',
          method: 'post',
          data: {phone: this.loginphone, psw: this.loginpsw},
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
          }
        })
          .then(this.logininyzm)
          .catch(function (error) {
            console.log(error)
          })
      }
    },
    logininpsw (res) {
      if (res.data === false) {
        this.showmsg = '密码错误'
      } else if (res.data === true) {
        this.$store.commit('setToken', {'loginphone': this.loginphone})
        this.$router.push('./')
      } else {
        this.showmsg = '该手机号未注册'
      }
    },
    logininyzm (res) {
      if (res.data === 0) {
        this.showmsg = '该手机号未注册'
      } else if (res.data === 1) {
        this.$store.commit('setToken', {'loginphone': this.loginphone})
        this.$router.push('./')
      }
    }
  },
  watch: {
    loginphone (value) {
      if (value) {
        var reg = /^((13[0-9])|(14[5|7])|(15([0-3]|[5-9]))|(18[0,5-9]))\d{8}$/
        if (!reg.test(value)) {
          this.showmsg = '请输入正确的手机号'
        } else {
          this.showmsg = ''
        }
      }
    }
  },
  mounted () {
    console.log('验证')
    this.$store.commit('getToken')
  }
}
</script>

<style type="text/css">
  html{
    background: #ffffff;
    padding: 0;
    margin: 0;
  }
  body{
    height: 100%;
    background: white;
  }
  .loginHeader{
    display: flex;
    justify-content: space-between;
    line-height: 1rem;
    color: #000000;
    padding: 0 .2rem;
  }
  .loginHeader .iconfont{
    color: #000000;
  }
  .loginHeader span:last-child{
    font-size: .3rem;
  }
  .damailogo{
    display: flex;
    justify-content: center;
    align-items: center;
    line-height: 1.6rem;
  }
  .damailogo .iconfont{
    font-size: 1rem;
    color: #ff447c;
  }
  .zhucediv{
    padding: .2rem;
  }
  .zhucediv .border-right{
    display: inline-block;
    padding-right: .2rem;
    margin: .2rem 0;
  }
  .zhucediv .border-right::before{
    border-color: #7a7a7a;
  }
  .zhucediv input{
    flex: 1;
    text-indent: .2rem;
    margin: .2rem 0;
  }
  .zhucediv>div:nth-child(1){
    display: flex;
    justify-content: center;
    padding: .2rem;
  }
  .zhucediv .changegetyzm{
    background: #ffdddc;
    color:  #ff1f62;
    font-size: 10px;
    padding: 0 .2rem;
    border-radius: .4rem;
    display: inline-block;
    height: .64rem;
    margin-top: .1rem;
  }
  .zhucediv .border-bottom:nth-child(2){
    display: flex;
    justify-content: space-between;
    padding: .1rem;
  }
  .zhucediv .border-bottom:nth-child(1){
    display: flex;
    padding: .2rem;
  }
  .sgreeregist{
     display: block;
     line-height: .7rem;
     text-align: center;
     background: #ff1f62;
     color: white;
     width: 100%;
     font-size: .32rem;
     border-radius: .06rem;
     margin-top: .2rem;
   }
  .pswlogin{
      justify-content: space-between;
      display: flex;
  }
  .pswlogin span{
    line-height: 1rem;
    letter-spacing: .02rem;
    color: #8d8d8d;
  }
  .mima input{
    margin: .3rem 0;
  }
  .zhucediv .hadregist{
    color: red;
    background: white;
    margin-top: .2rem;
    margin-bottom: 0;
  }
</style>
