export default {
  changeCity (status, city) {
    this.state.city = city
    try {
      localStorage.city = city
    } catch (e) {}
  },
  changeIcon (icon) {
    this.state.iconChoose = icon
  },
  clickguanzhu (aa) {
    this.state.activeclass = aa
    try {
      localStorage.activeclass = aa
    } catch (e) {}
  },
  iconclick (iconname) {
    this.state.iconChoose = iconname
  },
  showdetail (iconid) {
    this.state.iconid = iconid
    console.log(this.state.iconid)
  },
  setToken (ctx, logininfor) {
    if (window.localStorage) {
      localStorage.setItem('loginphone', logininfor['loginphone'])
      this.state.islogin = true
    } else {
      alert('This browser does NOT support localStorage')
    }
  },
  getToken (status) {
    var token = localStorage.getItem('loginphone')
    if (token) {
      this.state.islogin = true
      console.log(this.state.islogin)
      console.log(token)
    } else {
      this.state.islogin = false
      console.log(this.state.islogin)
    }
  },
  delToken () {
    localStorage.removeItem('loginphone')
    console.log('已删除')
  },
  isLogin (state, msg) {
    state.isLogin = msg
    this.setToken('isLogin', msg)
  }
}
