<template>
  <div>
    <div class="jump" :style="{ display: finishval }" @click="jumppage">跳过</div>
    <transition-group tag="div" leave-active-class="fadeOutUp" enter-active-class="fadeInDown">
      <div class="service animated" :key="6" v-show="page1show">
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
      <!-- 对话 -->
      <service-one :showval="page2show" :showair="page3show"  :showpase="approvalpase" @approvalshowfun="getapproval"  @arishowfun="getairshow" @chooserolefun="getroleshow" v-show="page2show" :key="8" class="animated"></service-one>
      <!-- 角色选择 -->
      <choose-role :showval="roleshow" @choosenum="choosenumfun" v-show="roleshow" :key="11" class="animated fadeInRight"></choose-role>
      <!-- 表单 -->
      <choose-form :showval="formshow" :formnum="formnum" v-show="formshow" :key="12" class="animated fadeInRight"></choose-form>
    </transition-group>
    <!-- 接机服务 -->
    <airport-service :showval="airshow" @airsavefun="getairsave" v-show="airshow"></airport-service>
    <!-- 家长批准 -->
    <approval-home :showval="approvalshow" @passfun="getpassfun" v-show="approvalshow"></approval-home>
  </div>
</template>

<script>
import ServiceOne from './components/ServiceOne'
import airportService from './components/airportService'
import approvalHome from './components/approvalHome'
import chooseRole from './components/chooseRole'
import chooseForm from './components/chooseForm'
export default {
  name: 'service',
  data () {
    return {
      finishval: 'none',
      show: false,
      showicon: false,
      page2show: false,
      page1show: true,
      airshow: false,
      approvalshow: false,
      roleshow: false,
      formshow: false,
      page3show: false,
      page4show: false,
      approvalpase: false,
      formnum: 0
    }
  },
  components: {
    ServiceOne,
    airportService,
    approvalHome,
    chooseRole,
    chooseForm
  },
  methods: {
    jumppage () {
      this.roleshow = true
      this.finishval = 'none'
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
    },
    getairshow (msg) {
      this.airshow = msg
    },
    getairsave (msg) {
      setTimeout(() => {
        this.page3show = msg
        this.airshow = false
      }, 1000)
    },
    getapproval (msg) {
      this.approvalshow = msg
    },
    getpassfun (msg) {
      this.approvalpase = msg
      this.approvalshow = false
    },
    getroleshow (msg) {
      setTimeout(() => {
        this.roleshow = true
      }, 1000)
    },
    choosenumfun (num) {
      this.formnum = num
      this.formshow = true
    }
  },
  mounted () {
    this.finishan()
  }
}
</script>

<style lang="stylus" scoped>
@import '~styles/commonsty.styl'
.jump
  width: 1rem;
  padding: 0.08rem 0;
  text-align: center;
  border-radius: 0.15rem;
  background: rgba(0,0,0,0.3);
  font-size: 0.32rem;
  color: #fff;
  position: fixed;
  top: 1rem;
  right: 0.3rem;
  z-index: 99;
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
