<template>
  <div>
    <transition-group tag="div" leave-active-class="fadeOutUp" enter-active-class="fadeInDown">
      <div class="service animated" :key="6" v-show="page1show">
        <div class="jump" :style="{ display: finishval }" @click="jumppage">跳过</div>
        <div class="content">
          <transition-group
            enter-active-class="fadeInUp"
            tag="div"
            name="list"
          >
            <p v-show="show" class="animated" :key="1"><img src="http://res.beanhomestay.com/static/m/service/img/welcome1.png" alt=""></p>
            <p v-show="show" class="animated p-img2" :key="2"><img src="http://res.beanhomestay.com/static/m/service/img/welcome2.png" alt=""></p>
            <p v-show="show" class="animated p-img3" :key="3"><img src="http://res.beanhomestay.com/static/m/service/img/welcome3.png" alt=""></p>
          </transition-group>
        </div>
        <div class="downicon" @click="showpage" v-show="showicon">
          <span class="iconfont icon-down"></span>
        </div>
      </div>
      <!-- <service-one :showval="page2show" v-show="page2show" :key="8" class="animated"></service-one> -->
      <!-- <airport-service :showval="page2show" v-show="page2show" :key="9" class="animated"></airport-service> -->
      <approval-home :showval="page2show" v-show="page2show" :key="10" class="animated"></approval-home>
    </transition-group>
  </div>
</template>

<script>
import ServiceOne from './components/ServiceOne'
import airportService from './components/airportService'
import approvalHome from './components/approvalHome'
export default {
  name: 'service',
  data () {
    return {
      finishval: 'none',
      show: false,
      showicon: false,
      page2show: false,
      page1show: true
    }
  },
  components: {
    ServiceOne,
    airportService,
    approvalHome
  },
  methods: {
    jumppage () {
      alert(1)
    },
    finishan () {
      setTimeout(() => {
        this.finishval = 'block'
        this.show = true
      }, 1100)
      setTimeout(() => {
        this.showicon = true
      }, 2500)
    },
    showpage () {
      this.page1show = false
      this.page2show = true
    }
  },
  mounted () {
    this.finishan()
  }
}
</script>

<style lang="stylus" scoped>
@import '~styles/commonsty.styl'
.service
  position: fixed
  left:0
  top:0
  bottom:0
  right:0
  background: url('http://res.beanhomestay.com/static/m/service/img/steward2x.jpg') no-repeat
  background-size: cover
  z-index:1
  &:before
    content: ""
    display: block
    position: absolute
    left: 50%
    top: 50%
    width: 1px
    height: 1px
    border-radius: 50%
    box-shadow: 0px 0px 0px 15px #fff
    border: 7.5rem solid #fff
    transform: translate(-50%,-50%)
    animation: circles 1.2s linear 0s 1
    animation-fill-mode:forwards
    z-index:2
  .jump
    position: absolute
    right: 0.5rem
    top: 0.8rem
    z-index:3
    background-color: rgba(0,0,0,0.6)
    color: #fff
    padding: 0.1rem 0.14rem
    border-radius: 0.14rem
  .content
    position: absolute
    top: 68%
    left: 50%
    width: 90%
    margin-left: -45%
    p
      img
        width:100%
    .p-img2
      animation-delay: 0.5s
    .p-img3
      animation-delay: 0.8s
  .downicon
    position: absolute
    display:inline-block
    bottom: 5%
    left:50%
    transform: translateX(-50%)
    text-align: center
    color: #fff
    animation: updowns 1s linear infinite alternate
    z-index:6
    span
      font-size: 0.6rem
</style>
