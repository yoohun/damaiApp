<template>
  <div id="regist">
    <dingdanheader :componenttitle="componenttitle"></dingdanheader>
    <div class="country">
      <span>国家地区</span>
      <span @click="chosecity" :choosecity="choosecity">{{quhao}} <span class="iconfont">&#xe632;</span> </span>
    </div>
    <div class="message">
      <form action="">
        <div class="border-bottom">
          <input type="text" placeholder="请输入手机号" v-model="registpone">
        </div>
        <p v-show="zqphone">请输入正确的手机号</p>
        <div class="border-bottom sryzm">
          <input type="text" placeholder="请输入验证码" v-model="registyzm">
          <button class="getyzm" v-show="yanzhengma" @click="daojishi">获取验证码</button>
          <span class="getyzm" v-show="!yanzhengma">{{yzNum}}s后重新获取</span>
        </div>
        <button class="sgreeregist" @click.prevent="agreRegist">同意协议并注册</button>
        <input  disabled class="hadregist" v-model="hadregistphone" v-show="showregistphone">
        <div></div>
      </form>
    </div>
    <span class="readaccept">我已阅读接受 <span class="deeppink">《大麦网会员服务协议》</span>和<span class="deeppink">《隐私权转款条款》</span>并同意主动注册成为会员 </span>
    <choseqh @choseqhnumber="choseqh" :choosecity="choosecity" @hidecity="hidecity" ></choseqh>
  </div>
</template>

<script>
import axios from 'axios'
import dingdanheader from '../../components/dingdanheader'
import choseqh from './components/choseqh'
export default {
  name: 'regist',
  components: {
    dingdanheader,
    choseqh
  },
  data () {
    return {
      componenttitle: '新用户注册',
      linka: 'myself/login',
      quhao: '+86',
      registpone: '',
      choosecity: 0,
      registyzm: '',
      zqphone: false,
      yanzhengma: true,
      yzNum: '',
      allphone: [],
      hadregistphone: '',
      showregistphone: false
    }
  },
  methods: {
    hidecity () {
      this.choosecity = 0
    },
    chosecity () {
      this.choosecity = 1
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
    agreRegist () {
      if (this.registpone === '') {
        this.showregistphone = true
        this.hadregistphone = '请输入手机号'
      } else if (this.registpone && !this.registyzm) {
        this.showregistphone = true
        this.hadregistphone = '请输入验证码'
      } else if (this.registpone && this.registyzm && !this.zqphone) {
        axios({
          url: 'http://localhost:80/regist.php',
          method: 'post',
          data: {phone: this.registpone, psw: this.registyzm},
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
          }
        })
          .then(this.afteragreRegist)
          .catch(function (error) {
            console.log(error)
          })
      } else {
        console.log('有一个没有写好')
      }
    },
    afteragreRegist (response) {
      console.log(response.data)
      if (response.data === 1) {
        console.log('账号存在')
        this.showregistphone = true
        this.hadregistphone = '该手机号已注册'
      } else if (response.data === 0) {
        console.log('账号不存在')
        this.showregistphone = false
        this.$router.push('./setuserinfor')
      }
    },
    daojishi () {
      const time = 60
      this.yzNum = time
      this.yanzhengma = false
      this.huoquyanzhengma = true
      this.timer = setInterval(() => {
        this.yzNum--
        if (this.yzNum < 1) {
          this.yanzhengma = true
          this.huoquyanzhengma = false
          clearInterval(this.timer)
          this.timer = null
        }
      }, 1000)
    }
  },
  watch: {
    registpone (value) {
      if (value) {
        var reg = /^((13[0-9])|(14[5|7])|(15([0-3]|[5-9]))|(18[0,5-9]))\d{8}$/
        if (!reg.test(value)) {
          this.zqphone = true
        } else {
          this.zqphone = false
        }
      }
    }
  }
}
</script>

<style>
html{
  background: #ffffff;
}
.readaccept .deeppink{
  color: deeppink;
  font-size: 10px;
}
.country{
  display: flex;
  justify-content: space-between;
  padding: .2rem;
  color: #9c9c9c;
  font-size: .3rem;
  margin-top: 1rem;
  line-height: .5rem;
}
.readaccept{
  display: block;
  padding: .2rem;
  line-height: .4rem;
  color: #9c9c9c;
}
.message{
  padding: .2rem;
}
.hadregist{
  color: red;
  line-height: .8rem;
  background: white;
}
.message .sgreeregist{
  display: block;
  line-height: .7rem;
  text-align: center;
  background: #ff1f62;
  color: white;
  width: 100%;
  font-size: .32rem;
  border-radius: .06rem;
  margin-top: .4rem;
}
.message input::-webkit-input-placeholder{
  color: #cacaca;
  font-size: .3rem;
}
.message input{
  flex: 1;
}
.message>div{
  display: flex;
  justify-content: space-between;
}
.message .getyzm{
  padding: .1rem .3rem;
  border-radius: .3rem;
  line-height: .36rem;
  background: #ffdddc;
  color:  #ff1f62;
  font-size: 10px;
}
.message .border-bottom{
  padding: .1rem;
  box-sizing: border-box;
  margin-bottom: .1rem;
}
.message p{
  line-height: .8rem;
  color: red;
}
.sryzm{
  display: flex;
  justify-content: space-between;
}
.sryzm input{
  flex: 1;
}
</style>
