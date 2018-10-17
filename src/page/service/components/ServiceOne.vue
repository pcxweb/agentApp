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
      <!-- 第一次加载 -->
      <transition-group
        enter-active-class="fadeInLeft"
        tag="div"
        name="lists"
        >
        <div v-show="showval" class="item animated" :key="1"><img src="http://res.beanhomestay.com/static/m/service/img/steward1.jpg" alt=""></div>
        <div v-show="showval" class="item animated" :key="2"><img src="http://res.beanhomestay.com/static/m/service/img/steward2.jpg" alt=""></div>
        <div v-show="showval" class="item animated" :key="3"><img src="http://res.beanhomestay.com/static/m/service/img/steward3.jpg" alt=""></div>
        <div v-show="showval" ref="foursdiv" class="item animated" :key="4">
          <img src="http://res.beanhomestay.com/static/m/service/img/steward4.jpg" alt="">
          <div class="fingerclick">
            <div class="finger">
              <img src="http://res.beanhomestay.com/static/m/service/img/finger.png" alt="">
            </div>
            <div class="circle"></div>
            <div class="circle2"></div>
          </div>
        </div>
      </transition-group>
      <!-- 展示接机服务后 第二次加载 -->
      <div class="service2">
        <div class="service2-zhan" style="height: 0.82rem;"></div>
        <div class="item"><img src="http://res.beanhomestay.com/static/m/service/img/steward5.jpg" alt=""></div>
        <div class="item"><img src="http://res.beanhomestay.com/static/m/service/img/steward6.jpg" alt=""></div>
        <div class="item"><img src="http://res.beanhomestay.com/static/m/service/img/steward7.jpg" alt=""></div>
        <div class="item"><img src="http://res.beanhomestay.com/static/m/service/img/steward8.jpg" alt=""></div>
      </div>
      <!-- 第65天 -->
      <div class="sixthfive_day">
        <div class="service2-zhan" style="height: 0.82rem;"></div>
        <h2>第65天</h2>
        <div v-show="showval" class="item"><p><span>出游审批</span></p></div>
        <div class="content">
          <div class="item"><img src="http://res.beanhomestay.com/static/m/service/img/65day1.jpg" alt=""></div>
          <div class="item animated">
            <img src="http://res.beanhomestay.com/static/m/service/img/65day2.jpg" alt="">
            <div class="fingerclick">
              <div class="finger">
                <img src="http://res.beanhomestay.com/static/m/service/img/finger.png" alt="">
              </div>
              <div class="circle"></div>
              <div class="circle2"></div>
            </div>
          </div>
        </div>
      </div>
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
  data () {
    return {
      scroll: '',
      timer: null
    }
  },
  watch: {
    showval: function () {
      this.box = this.$refs.conbox
      setTimeout(() => {
        this.box.scrollTop = this.$refs.conbox.scrollHeight
      }, 4000)
    }
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
    transition: all 0.5s
    .item
      padding-bottom: 0.24rem
      position: relative
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
      .fingerclick
        width: 2rem
        position: relative
        bottom: 3rem
        left: 52%
        .finger
          position: absolute
          display: inline-block
          top: 0.5rem
          right: 10%
          animation: finger 0.99s infinite
          img
            width: 1rem
            height: 1rem
        .circle
          width: 0.3rem
          height: 0.3rem
          border-radius: 50%
          position: absolute
          top: 6%
          left: 5%
          animation: red-wave1 1s infinite
        .circle2
          border-radius: 50%
          width: 0.3rem
          height: 0.3rem
          border-radius: 50%
          position: absolute
          top: 6%
          left: 5%
          animation: red-wave2 1s infinite
    .sixthfive_day
      h2
        font-size: 0.72rem;
        color: #544f4f;
        text-align: center;
        margin-top: 0.2rem;
</style>
