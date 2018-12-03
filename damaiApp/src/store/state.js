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
    defaultphone = localStorage.loginphone
  }
} catch (e) {
}
export default {
  city: defaultCity,
  iconChoose: '',
  iconclassNum: -1,
  activeclass: false,
  iconid: '',
  iconkind: '',
  loginphone: defaultphone,
  islogin: false,
  homenavnum: 1,
  position: [121.5923289, 31.21215074],
  detailtitle: '',
  detailtime: '',
  place: '',
  ticketprice: 0
}
