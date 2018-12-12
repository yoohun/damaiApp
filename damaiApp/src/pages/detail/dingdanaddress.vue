<template>
  <div>
    <div>
      <div class="dingdanheader">
        <router-link to="/detail/dingdan">
          <span class="iconfont">&#xe625;</span>
        </router-link>
        <span class="xwTitle">新增收货地址</span>
        <span @click="saveMessage">保存</span>
      </div>
      <div class="addressContent">
        <form action="">
          <div class="getPeople">
            <span>收货人</span>
            <input type="text" placeholder="请填写收货人姓名" id="shIpt" v-model="user">
          </div>
          <div class="phoneNum">
            <span>手机号</span>
            <input type="text" placeholder='请填写你的手机号' v-model="userphone">
          </div>
          <div class="index">
            <div class="page-content">
              <mt-cell title="省市区:" :value="areaString" is-link @click.native="handlerArea"></mt-cell>
              <mt-popup v-model="areaVisible" class="area-class" position="bottom">
                <mt-picker :slots="slots" @change="onValuesChange"></mt-picker>
              </mt-popup>
            </div>
          </div>
          <div class="street">
            <span>街道</span>
          </div>
          <div class="cleanAddress">
            <textarea name=""  placeholder="请填写详细地址，不少于4个字" id="addressIpt" v-model="stree"></textarea>
          </div>
        </form>
      </div>
    </div>
    <div class="fullmsg" v-show="fullms">请填写完整的信息</div>
  </div>
</template>

<script>
import data from '../../../static/mock/data.json'
let index = 0
let index2 = 0
let index3 = 0
// 初始化省
let province = data.map(res => {
  return res.name
})
// 初始化市
let city = data[index].childs.map(res => {
  return res.name
})
// 初始化区
let area = data[index].childs[index2].childs.map(res => {
  return res.name
})
export default {
  name: 'dingdanaddress',
  data () {
    return {
      fullms: false,
      useraddress: '',
      user: '',
      userphone: '',
      stree: '',
      areaVisible: false,
      areaString: '请选择',
      slots: [{
        flex: 1,
        values: province,
        className: 'slot1',
        textAlign: 'left'
      }, {
        divider: true,
        content: '-',
        className: 'slot2'
      }, {
        flex: 1,
        values: city,
        className: 'slot3',
        textAlign: 'left'
      }, {
        divider: true,
        content: '-',
        className: 'slot4'
      }, {
        flex: 1,
        values: area,
        className: 'slot5',
        textAlign: 'left'
      }]
    }
  },
  methods: {
    handlerArea () {
      this.areaVisible = true
    },
    onValuesChange (picker, values) {
      let one = values[0]
      let two = values[1]
      let three = values[2]
      index = province.indexOf(one)
      if (index >= 0 && province.length > 0) {
        city = data[index].childs.map(res => {
          return res.name
        })
        picker.setSlotValues(1, city)
        two = values[1]
      }
      index2 = city.indexOf(two)
      if (index2 >= 0 && city.length > 0) {
        area = data[index].childs[index2].childs.map(res => {
          return res.name
        })
        picker.setSlotValues(2, area)
        three = values[2]
      }
      index3 = area.indexOf(three)
      this.areaString = values.join(' ')
    },
    saveMessage () {
      console.log('点击')
      if (this.user === '' || this.userphone === '' || this.stree === '') {
        this.fullms = true
      } else {
        this.useraddress = this.areaString + this.stree
        this.fullms = false
        localStorage.setItem('address', this.useraddress)
        this.$router.push('./dingdan')
        console.log(this.useraddress)
      }
    }
  }
}
</script>

<style>
  .fullmsg{
    margin-top: .5rem;
    text-align: center;
    line-height: .6rem;
    font-size: .36rem;
    color: red;
  }
  .area-class {
    width: 100%;
    height: 50%;
  }
  .mint-cell .mint-cell-mask{
    display: none;
  }
  .mint-cell-value{
    flex: 1;
  }
  .mint-cell-wrapper{
    margin: 0;
    padding: 0;
  }
  .dingdanheader{
    height: .8rem;
    background: white;
    padding: 0 .2rem;
    display: flex;
    border-bottom: 1px solid #e8e8e8;
  }
  .dingdanheader .iconfont{
    color: #cacaca;
    display: inline-block;
  }
  .dingdanheader span{
    line-height: .8rem;
  }
  .dingdanheader span:last-child{
    font-size: 10px;
  }
  .xwTitle{
    display: inline-block;
    text-align: center;
    flex: 1;
  }
  .addressContent{
    padding: .2rem;
    background: #ffffff;
    border-bottom: 1px solid #eaeaea;
  }
  .addressContent div{
    line-height: .8rem;
    border-bottom: 1px solid #eaeaea;
  }
  .addressContent div span{
    width: 1.5rem;
    display: inline-block;
    color: #969696;
  }
  .addressContent div:last-child{
    border: none;
  }
  ::-webkit-input-placeholder{
    color: #cbcbcb;
  }    /* 使用webkit内核的浏览器 */

  :-moz-placeholder{
    color: #cbcbcb;
  }                  /* Firefox版本4-18 */

  ::-moz-placeholder{
    color: #cbcbcb;
  }                  /* Firefox版本19+ */

  :-ms-input-placeholder{
    color: #cbcbcb;
  }           /* IE浏览器 */
  .addressContent div input{
    color: black;
  }
  #addressIpt{
    height: 1rem;
    white-space: pre-wrap;
    width: 100%;
    line-height: .4rem;
    resize: none;
    padding-top: .2rem;
  }
  .mint-cell-title{
    width: 1.5rem;
    flex: 0;
    border-bottom:none;
  }
  .mint-cell-title span {
    width: 1.5rem;
    border-bottom:none;
  }
  .mint-cell-wrapper .mint-cell-value span{
    display: inline-block;
    width: 100%;
    border-bottom: none;
  }
  .addressContent .index{
    border-bottom: none;
  }
  .mint-cell-value.is-link{
    border-bottom: none;
  }
  .mint-cell-wrapper .mint-cell-title{
    border-bottom: none;
  }
</style>
