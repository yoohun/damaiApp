<template>
  <div>
    <div class="dingdanheader">
      <router-link to="/detail/dingdan">
        <span class="iconfont">&#xe625;</span>
      </router-link>
      <span class="xwTitle">新增收货地址</span>
      <span>保存</span>
    </div>
    <div class="addressContent">
      <form action="">
        <div class="getPeople">
          <span>收货人</span>
          <input type="text" placeholder="请填写收货人姓名" id="shIpt">
        </div>
        <div class="phoneNum">
          <span>手机号</span>
          <input type="text" placeholder="a">
        </div>
        <div class="place">
          <span>所在地区</span>
        </div>
        <div class="street">
          <span>街道</span>
        </div>
        <div class="cleanAddress">
          <textarea name=""  placeholder="请填写详细地址，不少于4个字" id="addressIpt"></textarea>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: 'dingdanaddress'
}
</script>

<style>
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
</style>
