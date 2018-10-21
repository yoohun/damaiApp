<template>
  <div>
    <dingdanheader :componenttitle="componenttitle"></dingdanheader>
    <div class="damailogo">
      <span class="iconfont">&#xe65d;</span>
    </div>
    <div class="inforform">
      <form action="">
        <div class="border-bottom">
          <input type="text" placeholder="用户名由4到16位（字母，数字，下划线）组成" v-model="username" >
        </div>
        <div class="border-bottom">
          <input type="password" placeholder="密码由6-12位数字字母组合" v-model="userpsw">
        </div>
        <div class="border-bottom">
          <input type="password" placeholder="请确认密码" v-model="userpswagain">
        </div>
        <input disabled class="hadregist" v-model="informsg">
        <button class="sgreeregist" @click.prevent="sureinfor">确认</button>
      </form>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import dingdanheader from '../../components/dingdanheader'
export default {
  name: 'setuserinfor',
  components: {
    dingdanheader
  },
  data () {
    return {
      componenttitle: '修改用户信息',
      username: '',
      userpsw: '',
      userpswagain: '',
      informsg: ''
    }
  },
  watch: {
    username (value) {
      if (value) {
        var reg = /^[a-zA-Z0-9_-]{4,16}$/
        if (!reg.test(value)) {
          this.informsg = '请输入4到16位（字母，数字，下划线）'
        } else {
          this.informsg = ''
        }
      }
    },
    userpsw (value) {
      if (value) {
        var reg = /^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{6,12}$/
        if (!reg.test(value)) {
          this.informsg = '请输入正确的密码'
        } else {
          this.informsg = ''
        }
      }
    },
    userpswagain () {
      if (this.userpsw === this.userpswagain) {
        this.informsg = ''
      } else {
        this.informsg = '输入错误'
      }
    }
  },
  methods: {
    sureinfor () {
      if (!this.username) {
        this.informsg = '请输入你的用户名'
      } else if (!this.userpsw) {
        this.informsg = '请输入你的密码'
      } else if (!this.userpswagain) {
        this.informsg = '请确认你的密码'
      } else if (this.username && this.userpsw && this.userpswagain && !this.informsg) {
        var phone = localStorage.getItem('loginphone')
        axios({
          url: 'http://localhost:80/setuserinfor.php',
          method: 'post',
          data: {phone: phone, psw: this.userpsw, name: this.username},
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
          }
        })
          .then(this.showuserinfor)
          .catch(function (error) {
            console.log(error)
          })
      }
    },
    showuserinfor (res) {
      console.log(res.data)
    }
  }
}
</script>

<style>
  body{
    background: white;
  }
  .damailogo{
    display: flex;
    justify-content: center;
    align-items: center;
    line-height: 1.6rem;
    margin-top: .3rem;
  }
  .damailogo .iconfont{
    font-size: 1rem;
    color: #ff447c;
  }
  .inforform{
    padding: .2rem;
  }
  input::-webkit-input-placeholder{
    color: #cacaca;
    font-size: .3rem;
  }
  .inforform .border-bottom{
    padding: .1rem;
    box-sizing: border-box;
    margin-bottom: .1rem;
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
    margin-top: .4rem;
  }
  .inforform input{
    width: 100%;
    height: .66rem;
  }
  .inforform div{
    display: flex;
    justify-content: space-between;
    margin-top: .3rem;
  }
  .hadregist{
    color: red;
    line-height: .8rem;
    background: white;
  }
</style>
