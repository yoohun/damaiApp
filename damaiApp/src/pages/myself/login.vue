<template>
  <div>
    <div class="loginHeader">
      <router-link to="/myself">
        <span class="iconfont">&#xe657;</span>
      </router-link>
      <span @click="clickmore">更多</span>
    </div>
    <div class="user">
      <div class="logindamaiimg">
        <img src="../../../static/imgs/damaiimg.png" alt="">
      </div>
      <span>{{this.phoneNumber}}</span>
    </div>
    <div class="message">
      <div class="yanzhengma border-bottom">
        <input type="text"  v-show="dxlogin" placeholder="请输入验证码" v-model="iptString">
        <input type="password" placeholder="请输入密码" v-show="!dxlogin" v-model="psw">
        <span class="loginspan" v-show="yanzhengma" @click="daojishi">获取验证码</span>
        <span v-show="huoquyanzhengma">{{yzNum}}s后重新获取</span>
      </div>
      <button @click="userlogin">登录</button>
      <div class="changedl" v-show="dxlogin">
        <span class="loginClick" @click="passwordlogin">账户密码登录</span>
      </div>
      <div class="pswlogin" v-show="!dxlogin">
        <span @click="msglogin">短信验证登录</span>
        <span>忘记密码</span>
      </div>
    </div>
    <div class=loginmoreDiv v-show="loginmoreDiv" @click="loginmoreHide">
      <div class="loginmoreList">
        <router-link to="/myself/changezh">
          <span class="border-bottom">切换账户</span>
        </router-link>
        <router-link to="/myself/regist">
          <span class="border-bottom">注册</span>
        </router-link>
        <span>取消</span>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'login',
  data () {
    return {
      iptString: '',
      dxlogin: true,
      phoneNumber: 15916484803,
      loginmoreDiv: false,
      yzm: '获取验证码',
      yzNum: 60,
      timer: null,
      yanzhengma: true,
      huoquyanzhengma: false,
      psw: ''
    }
  },
  methods: {
    clickmore () {
      this.loginmoreDiv = true
    },
    loginmoreHide () {
      this.loginmoreDiv = false
    },
    msglogin () {
      this.dxlogin = true
      this.yanzhengma = true
      this.timer = null
      this.huoquyanzhengma = false
    },
    passwordlogin () {
      this.dxlogin = false
      this.yanzhengma = false
      this.huoquyanzhengma = false
      this.iptString = ''
      clearInterval(this.timer)
      this.timer = null
    },
    daojishi () {
      const time = 60
      this.yzNum = time
      this.yanzhengma = false
      this.timer = setInterval(() => {
        this.yzNum--
        if (this.yzNum < 1) {
          this.yanzhengma = true
          clearInterval(this.timer)
          this.timer = null
        }
      }, 1000)
    },
    userlogin () {
      if (this.dxlogin) {
        console.log('验证码')
      } else if (!this.dxlogin) {
        console.log('密码')
        axios({
          url: 'http://localhost:80/login.php',
          method: 'post',
          data: {phone: this.phoneNumber, psw: this.psw},
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
          }
        })
          .then(function (response) {
            console.log(response)
            console.log(response.data)
          })
          .catch(function (error) {
            console.log(error)
          })
      } else {
        console.log('都没有')
      }
    }
  },
  mounted () {
  }
}
</script>

<style>
html{
  background: #ffffff;
  padding: 0;
  margin: 0;
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
.user{
  margin: 0 auto;
  padding: .5rem 0 .3rem;
}
.logindamaiimg{
  width: 1.4rem;
  height: 1.4rem;
  border-radius: .7rem;
  background: #e9e9e9;
  margin: 0 auto;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
}
.user img{
  height: 1.3rem;
  margin: auto;
}
.user span{
  line-height: 1rem;
  color: #8d8d8d;
  font-size: .4rem;
  text-align: center;
  display: block;
}
.message{
  padding: .3rem;
}
.yanzhengma{
  display: flex;
  justify-content: space-between;
  padding: .2rem 0;
  height: .65rem;
}
.yanzhengma input{
  flex: 1;
}
.yanzhengma input::-webkit-input-placeholder{
  color: #cacaca;
  font-size: .3rem;
}
.yanzhengma span{
  padding: .1rem .4rem;
  border-radius: .3rem;
  line-height: .46rem;
  background: #ffdddc;
  color:  #ff1f62;
}
.yanzhengma .loginspan{
}
.message button{
  display: block;
  line-height: .8rem;
  text-align: center;
  background: #ff1f62;
  color: white;
  width: 100%;
  margin-top: .4rem;
  font-size: .32rem;
}
.message .changedl{
  display: flex;
  justify-content: center;
}
.message .pswlogin{
  justify-content: space-between;
  display: flex;
}
.message .loginClick{
  display: inline-block;
  margin: 0 auto;
  text-align: center;
  line-height: 1rem;
  color: #8d8d8d;
  letter-spacing: .02rem;
}
.pswlogin span{
  line-height: 1rem;
  letter-spacing: .02rem;
  color: #8d8d8d;
}
.loginmoreDiv{
  background: rgba(0,0,0,.6);
  position: fixed;
  top: 0;
  left:0;
  right: 0;
  bottom: 0;
}
.loginmoreList{
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  margin: .2rem;
  background: #ffffff;
}
.loginmoreList span{
  line-height: .8rem;
  text-align: center;
  color: black;
  display: block;
}
</style>
