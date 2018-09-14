<template>
  <div class="footer">
    <div class="space"></div>
    <div class="fixbox">
      <div class="custom">
        <span class="iconfont icon-customer"></span>
        <p>客服</p>
      </div>
      <div class="phone">
        <span class="iconfont icon-phone"></span>
        <p>电话</p>
      </div>
      <div class="order">预约招生官</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Footer'
}
</script>

<style lang="stylus" scoped>
@import '~styles/samecolor.styl'
.space
  height: 0.9rem
.fixbox
  display: flex
  height: 0.88rem
  background-color: #fff
  align-items: center
  position: fixed
  box-shadow: 0 0 0.2rem 0 rgba(0,0,0,.1);
  z-index: 2
  bottom: 0
  left: 0
  right: 0
  .custom
  .phone
    width: 1.5rem
    text-align: center
    color: #666
    font-size: 0.24rem
    p
      margin-top: 0.06rem
  .order
    height: 100%
    line-height: 0.88rem
    flex: 1
    color: #fff
    text-align: center
    background-color: $maincolor
</style>
