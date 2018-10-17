<template>
  <div class="airports">
    <div class="title">
      <span class="iconfont icon-back"></span>
      <h3>接机服务</h3>
    </div>
    <div class="air-content">
      <div class="message">
        <div class="top">
          <div class="left">
            <h3>接机服务1/3</h3>
            <p>pick up and check in process</p>
          </div>
          <div class="right"><span>进行中</span></div>
        </div>
        <div class="center"><span>负责人</span><span>管家</span></div>
        <div class="bottom">
          <p><span>发布时间</span><span>7月5日</span></p>
          <p>非常紧急</p>
        </div>
      </div>
      <div class="s_plan">
        <div class="s_title">学生出游计划</div>
        <img src="http://res.beanhomestay.com/static/m/service/img/head2x.png" alt="">
      </div>
      <div class="formbox">
        <div class="f-item">
          <div class="left">
            <span>航空公司</span>
            <p ref="company"></p>
          </div>
          <div class="right">
            <span class="iconfont icon-more"></span>
          </div>
        </div>
        <div class="f-item">
          <div class="left">
            <span>航班号</span>
            <p ref="airnum"></p>
          </div>
          <div class="right">
            <span class="iconfont icon-more"></span>
          </div>
        </div>
        <div class="f-item">
          <div class="left">
            <span>出发时间</span>
            <p ref="godate"></p>
          </div>
          <div class="right">
            <span class="iconfont icon-more"></span>
          </div>
        </div>
        <div class="f-item">
          <div class="left">
            <span>到达时间</span>
            <p ref="arrivaldate"></p>
          </div>
          <div class="right">
            <span class="iconfont icon-more"></span>
          </div>
        </div>
      </div>
    </div>
    <transition-group tag="div" enter-active-class="fadeInRight" leave-active-class="fadeOutLeft">
      <div v-show="sgo" key="2-1" class="date_item go-off animated" animate-duration="2s">
        <img src="http://res.beanhomestay.com/static/m/service/img/date.png" alt="">
        <div class="active" v-show="sgochoose"><img src="http://res.beanhomestay.com/static/m/service/img/22.png" alt=""></div>
      </div>
      <div v-show="sarrival" key="2-2" class="date_item arrival animated">
        <img src="http://res.beanhomestay.com/static/m/service/img/time.png" alt="">
        <div class="clickan"></div>
      </div>
    </transition-group>
    <div v-show="airsave" class="air-bottom">
      <button type="button">保存</button>
      <div class="ripple"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'airportService',
  props: {
    showval: Boolean
  },
  data () {
    return {
      startnum: false,
      sgo: false,
      sgochoose: false,
      sarrival: false,
      airsave: false
    }
  },
  methods: {
    typeword (ev, contentArr, callbackfun) {
      let content = ''
      let index = 0
      ev.innerHTML = ''
      let timer = setInterval(() => {
        content += contentArr[index]
        ev.innerHTML = content + '|'
        index++
        if (index === contentArr.length) {
          ev.innerHTML = content
          clearInterval(timer)
          // this.startnum = true
          callbackfun()
        }
      }, 150)
    },
    sildean () {
      if (this.sgo) {
        setTimeout(() => {
          this.sgo = false
          this.sgochoose = true
          this.$refs.godate.innerHTML = '2018-09-09  13:40'
          this.$refs.arrivaldate.innerHTML = '|'
        }, 1000)
        setTimeout(() => {
          this.sarrival = true
        }, 2500)
      }
    }
  },
  watch: {
    showval: function () {
      let company = this.$refs.company
      setTimeout(() => {
        this.typeword(company, 'X X X航空公司', () => {
          this.startnum = true
        })
      }, 500)
    },
    startnum: function () {
      let airnum = this.$refs.airnum
      this.typeword(airnum, 'MJ908329', () => {
        this.sgo = true
        this.$refs.godate.innerHTML = '|'
      })
    },
    sgo: function () {
      this.sildean()
    },
    sarrival: function () {
      setTimeout(() => {
        this.sarrival = false
        this.$refs.arrivaldate.innerHTML = '2018-09-10  22:40'
        this.airsave = true
      }, 1500)
    }
  }
}
</script>

<style lang="stylus" scoped>
@import '~styles/commonsty.styl'
@import '~styles/samecolor.styl'
.airports
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
  .air-content
    padding: 0.4rem 0.28rem 0
    background-color: #fff
    .message
      background-image: linear-gradient(90deg, #ff7600 0%, #f59217 21%, #ea9042 41%, #f1b255 100%), linear-gradient(#f7f7f7, #f7f7f7)
      box-shadow: -4px 2px 24px 0px rgba(175, 177, 212, 0.75);
      border-radius: 0.3rem;
      color: #fff;
      font-size: 0.26rem;
      padding: 0.4rem 0.3rem;
      position: relative;
      .top
        display: flex
        align-items: center
        justify-content: space-between
        .left
          h3
            font-size: 0.3rem
            font-weight: bold
        .right
          span
            font-size: 0.45rem
      .center
        margin-top: 0.5rem
        span
          margin-right: 0.12rem
      .bottom
        display: flex
        align-items: center
        justify-content: space-between
        margin-top: 0.12rem
        span
          margin-right: 0.12rem
    .s_plan
      margin: 0.8rem 0
      position: relative
      .s_title
        padding: 10px 0.24rem
        border-radius: 0.24rem
        background-color: #eee
        color: #000
        text-align: center
        margin-left:0.6rem
      img
        width: 1.38rem
        height: 1.38rem
        position: absolute
        left:0
        bottom:0
    .formbox
      .f-item
        padding:0.12rem 0.24rem
        border-bottom: 1px solid #e2e2e2
        color: #aeb7c3
        display: flex
        align-items: center
        justify-content: space-between
        margin-top: 0.3rem
        .left
          p
            font-size: 0.36rem
            color: #33507a
            margin-top: 0.2rem
            height: 0.24rem
            padding-bottom:0.2rem
  .air-bottom
    position: absolute
    bottom:0
    left:0
    right:0
    overflow:hidden
    button
      width: 100%
      height: 100%
      text-align: center
      padding:0.2rem 0
      font-size: 0.4rem
      color: #fff
      background-color:#ff9900
      font-weight:bold
    .ripple
      position: absolute
      left: 50%
      top: 0
      background-color:rgba(0,0,0,0)
      width: 1.4rem
      height: 100%
      margin-left: -0.7rem
      border-radius: 50%
      animation: airRipple 0.5s linear 0.5s 1
  .date_item
    position: fixed
    width: 100%
    height: 100%
    left: 0
    top: 0
    background-color: rgba(0,0,0,0.3)
    z-index: 15
    img
      width: 100%
      position: absolute
      bottom:0
      left:0
    .active
      width: 0.5rem
      height: 0.5rem
      position: absolute
      bottom: 1.3rem
      left: 4.5rem
      img
        width: 100%
    .clickan
      position: fixed
      left: 50%
      bottom: 2.5rem
      width: 0.28rem
      height: 0.28rem
      border-radius: 50%
      animation: blue-wave1 0.5s ease-in 1s
</style>
