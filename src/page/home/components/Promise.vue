<template>
  <div class="promiseBox">
    <div class="title">GEA服务承诺</div>
    <ul class="item-box">
      <li class="items">
        <span class="iconfont icon-footschool"></span>
        <p>优选学校</p>
      </li>
      <li class="items">
        <span class="iconfont icon-firsthome"></span>
        <p>一手住家</p>
      </li>
      <li class="items">
        <span class="iconfont icon-manager"></span>
        <p>无忧管家</p>
      </li>
      <li class="items">
        <span class="iconfont icon-service"></span>
        <p>在线服务</p>
      </li>
      <li class="items">
        <span class="iconfont icon-safe"></span>
        <p>GEA监管</p>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HomePromise'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus" scoped>
.promiseBox
  width: 100%
  height: 3.09rem
  background: url('http://res.beanhomestay.com/static/m/img/页尾默认图2@.32ae10e.png')
  background-size: 100% 100%
  padding: .47rem .32rem .56rem
  text-align: center
  box-sizing: border-box
  .title
    text-align: center
    font-size: 0.36rem
    margin-bottom: 0.38rem
    color: #fff
  .item-box
    display: flex
    justify-content: space-between
    padding:0.2rem 0.16rem
    .items
      color: #fff
      text-align: center
      .iconfont
        display: inline-block
        color: #ff9800
        margin-bottom: 0.32rem
        font-size: 0.45rem
      p
        font-size: 0.24rem
</style>
