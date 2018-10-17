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
          <div class="fingerclick" v-show="!showair" @click="firstfinger">
            <div class="finger">
              <img src="http://res.beanhomestay.com/static/m/service/img/finger.png" alt="">
            </div>
            <div class="circle"></div>
            <div class="circle2"></div>
          </div>
        </div>
      </transition-group>
      <!-- 展示接机服务后 第二次加载 -->
      <div class="service2" v-show="showair" style="min-height:100%">
        <div class="service2-zhan" style="height: 0.82rem;"></div>
        <transition-group
        tag="div"
        >
          <div v-show="showair" class="item animated fadeInLeft" key="1"><img src="http://res.beanhomestay.com/static/m/service/img/steward5.jpg" alt=""></div>
          <div v-show="showair" class="item animated fadeInRight" key="2"><img src="http://res.beanhomestay.com/static/m/service/img/steward6.jpg" alt=""></div>
          <div v-show="showair" class="item animated fadeInLeft" key="3"><img src="http://res.beanhomestay.com/static/m/service/img/steward7.jpg" alt=""></div>
          <div v-show="showair" class="item animated fadeInLeft" key="4"><img src="http://res.beanhomestay.com/static/m/service/img/steward8.jpg" alt=""></div>
        </transition-group>
      </div>
      <!-- 第65天 -->
      <div class="sixthfive_day" v-show="showapproval">
        <div class="service2-zhan" style="height: 0.82rem;"></div>
        <h2>第65天</h2>
        <div class="content">
          <transition-group
            tag="div"
            >
            <div v-show="showapproval" class="item animated fadeInUp" key="0"><p><span>出游审批</span></p></div>
            <div v-show="showapproval" class="item animated fadeInRight" key="1"><img src="http://res.beanhomestay.com/static/m/service/img/65day1.jpg" alt=""></div>
            <div v-show="showapproval" class="item animated fadeInRight" key="2">
              <img src="http://res.beanhomestay.com/static/m/service/img/65day2.jpg" alt="">
              <div class="fingerclick" v-show="!showpase" @click="secondfinger">
                <div class="finger">
                  <img src="http://res.beanhomestay.com/static/m/service/img/finger.png" alt="">
                </div>
                <div class="circle"></div>
                <div class="circle2"></div>
              </div>
            </div>
          </transition-group>
          <div class="item pass_item">
            <transition enter-active-class="fadeInLeft">
              <img v-show="showpase" class="animated" key="1" src="http://res.beanhomestay.com/static/m/service/img/65day3.jpg" alt="">
            </transition>
            <div style="display:none" class="aflip animated" key="2"></div>
          </div>
        </div>
      </div>
      <div class="zhan" style="height: 0.8rem"></div>
    </div>
  </div>
</template>

<script>
import $ from 'jquery'
export default {
  name: 'ServiceOne',
  props: {
    showval: Boolean,
    showair: Boolean,
    showpase: Boolean
  },
  data () {
    return {
      scroll: '',
      timer: null,
      airshows: true,
      airitem2: false,
      showapproval: false
    }
  },
  methods: {
    firstfinger: function () {
      this.$emit('arishowfun', this.airshows)
    },
    secondfinger: function () {
      this.$emit('approvalshowfun', true)
    }
  },
  watch: {
    showval: function () {
      this.box = this.$refs.conbox
      setTimeout(() => {
        $(this.box).animate({scrollTop: this.$refs.conbox.scrollHeight}, 1500)
      }, 3500)
    },
    showair: function () {
      this.box = this.$refs.conbox
      $(this.box).animate({scrollTop: this.$refs.conbox.scrollHeight}, 1500)
      setTimeout(() => {
        this.showapproval = true
        $(this.box).animate({scrollTop: this.$refs.conbox.scrollHeight}, 1500)
      }, 6000)
    },
    showpase: function () {
      this.box = this.$refs.conbox
      $(this.box).animate({scrollTop: this.$refs.conbox.scrollHeight}, 1500)
      setTimeout(() => {
        $('.aflip').addClass('flipInY').show()
        this.$emit('chooserolefun', true)
      }, 1500)
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
      min-height: 100%
      h2
        font-size: 0.72rem
        color: #544f4f
        text-align: center
        margin-top: 0.2rem
      .pass_item
        position: relative
        .aflip
          width: 1.41rem
          height: 0.93rem
          background: url('http://res.beanhomestay.com/static/m/service/img/pass.png')
          background-size: 100% 100%
          position: absolute
          top: 0.6rem
          left: 4.42rem
</style>
