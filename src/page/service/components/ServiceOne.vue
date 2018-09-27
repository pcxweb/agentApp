<template>
  <div v-show="showval" class="service1">
    <div class="title">
      <span class="iconfont icon-back"></span>
      <h3>飞飞海外服务群</h3>
    </div>
    <div class="content" ref="conbox">
      <transition  enter-active-class="fadeInUp">
        <div v-show="showval" class="item animated"><p><span>学生要开启美国学习之路啦~</span></p></div>
      </transition>
      <transition-group
        enter-active-class="fadeInLeft"
        tag="div"
        name="lists"
      >
        <div v-show="showval" class="item animated" :key="1"><img src="http://res.beanhomestay.com/static/m/service/img/steward1.jpg" alt=""></div>
        <div v-show="showval" class="item animated" :key="2"><img src="http://res.beanhomestay.com/static/m/service/img/steward2.jpg" alt=""></div>
        <div v-show="showval" class="item animated" :key="3"><img src="http://res.beanhomestay.com/static/m/service/img/steward3.jpg" alt=""></div>
        <div v-show="showval" class="item animated" :key="4"><img src="http://res.beanhomestay.com/static/m/service/img/steward4.jpg" alt=""></div>
      </transition-group>
      <div class="zhan" style="height: 0.8rem"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ServiceOne',
  props: {
    showval: Boolean
  },
  mounted () {
    // var ele = this.$ref.conbox
    // setTimeout(() => {
    //   ele.scrollTop = ele.scrollHeight
    // }, 3400)
  }
}
</script>

<style lang="stylus" scoped>
@import '~styles/commonsty.styl'
@import '~styles/samecolor.styl'
.service1
  position:fixed
  left:0
  top:0
  bottom:0
  right:0
  .title
    position: relative
    height: 0.8rem
    padding:0 0.24rem
    box-sizing:border-box
    line-height: 0.8rem
    text-align: center
    color: #fff
    background-color: $maincolor
    span
      float: left
    h3
      font-size: 0.35rem
  .content
    width: 100%
    height: 100%
    background-color: #f2f2f2
    overflow-y: scroll
    overflow-x: hidden
    .item
      padding-bottom: 0.24rem
      p
        text-align: center
        padding:0.5rem
        span
          padding: 0.05rem 0.14rem
          border-radius: 0.2rem
          color: #fff
          font-size:0.24rem
          background-color: rgba(190,190,190,.5)
      img
        width: 100%
        height: auto
    .item
      &:nth-child(1)
        animation-delay: 1.6s
      &:nth-child(2)
        animation-delay: 2.2s
      &:nth-child(3)
        animation-delay: 2.8s
      &:nth-child(4)
        animation-delay: 3.4s
</style>
