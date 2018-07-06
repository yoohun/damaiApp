export default {
  changeCity (status, city) {
    this.state.city = city
    try {
      localStorage.city = city
    } catch (e) {}
  }
}
