let defaultCity = '赣州'
try {
  if (localStorage.city) {
    defaultCity = localStorage.city
  }
} catch (e) {
}
let defaultphone = ''
try {
  if (localStorage.loginphone) {
    defaultCity = localStorage.loginphone
  }
} catch (e) {
}
export default {
  city: defaultCity,
  iconChoose: '',
  iconclassNum: -1,
  activeclass: false,
  iconid: '',
  iconitemtitle: '',
  loginphone: defaultphone,
  islogin: false,
  homenavnum: 1
}
