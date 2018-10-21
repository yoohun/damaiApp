<template>
  <div>
    <div class="ticket">
      <div class="ticketContent">
        <span class="ticketHeaderTitle">张杰2018"未·LIVE"巡回演唱会·深圳站</span>
        <div class="ticketALL">
          <span class="ticketTPN">
            <span class="iconfont">&#xe78b;</span>
            2018.09.08 | 周六 | 19:30
          </span>
          <span class="ticketTPN">
            <span class="iconfont">&#xe645;</span>
            深圳 · 华润深圳湾体育中心"春茧"体育场
          </span>
          <span class="ticketTPN">
            <span class="iconfont">&#xe63e;</span>
            1张票
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ticketcontent'
}
</script>

<style>
.ticket{
  height:3rem;
  margin: .2rem;
  background: #ffffff;
  box-sizing: border-box;
  position: relative;
}
.ticket::before{
  content: '';
  display: block;
  width: .3rem;
  height: .3rem;
  background: #f7f7f7;
  position: absolute;
  left: 0;
  top:1rem;
  margin-left: -.15rem;
  border-radius: .15rem;
}
.ticket::after{
  content: '';
  display: block;
  width: .3rem;
  height: .3rem;
  background: #f4f4f4;
  position: absolute;
  right: 0;
  top:1rem;
  margin-right: -.15rem;
  border-radius: .15rem;
}
.ticketContent{
  height: 1.15rem;
  padding: .4rem;
}
.ticketContent>span{
  display: block;
}
.ticketHeaderTitle{
  display: block;
  border-bottom: 1px dashed #dddddd;
  padding-bottom: .45rem;
  font-size: .24rem;
  color: #333333;
}
.ticketALL{
  padding: .15rem 0;
}
.ticketTPN{
  line-height: .5rem;
  font-size: 10px;
  display: block;
  color: #333333;
}
.ticketTPN .iconfont{
  margin-right: .2rem;
  font-size: 14px;
  color: #333333;
}
</style>
