<template>
  <div class="formbox">
    <div class="people"><img src="http://res.beanhomestay.com/static/m/service/img/head@2x.png" alt=""></div>
    <transition-group
      enter-active-class="fadeInRight"
      tag="div"
    >
      <div id="form-parStu" key="f1" v-show="formshow1" class="service-form animated">
        <input type="text" placeholder="如何称呼您">
        <input type="text" placeholder="您的手机号码">
        <input type="text" placeholder="预计留学时间">
        <input type="text" placeholder="留学中介机构">
        <input type="text" placeholder="中介老师姓名">
        <div class="btndiv">一键开启纳豆之家</div>
      </div>
      <div id="form-agent" key="f2" class="service-form animated" v-show="formshow2">
        <input type="text" placeholder="如何称呼您">
        <input type="text" placeholder="您的手机号码">
        <input type="text" placeholder="中介机构">
        <input type="text" placeholder="顾问邀请码，没有可不填">
        <div class="btndiv">一键开启纳豆之家</div>
      </div>
    </transition-group>
  </div>
</template>

<script>
export default {
  name: 'chooseForm',
  props: {
    showval: Boolean,
    formnum: Number
  },
  data () {
    return {
      formshow1: false,
      formshow2: false
    }
  },
  watch: {
    showval: function () {
      setTimeout(() => {
        if (this.formnum === 2) {
          this.formshow2 = true
        } else {
          this.formshow1 = true
        }
      }, 1000)
    }
  }
}
</script>

<style lang="stylus" scoped>
@import '~styles/commonsty.styl'
@import '~styles/samecolor.styl'
.formbox
  width: 100%
  height: 100%
  background-color: #fff
  padding-top: 1.09rem
  font-size: 0.3rem
  position: fixed
  top: 0
  left: 0
  z-index: 99
  .people
    width: 1.56rem
    height: 1.56rem
    border-radius: 100%
    overflow: hidden
    margin: 0 auto 0.78rem
    img
      width: 100%
  .service-form
    input
      display: block;
      width: 6rem;
      height: 0.76rem;
      background-color: rgba(255, 255, 255, 0.9);
      border-radius: 0.37rem;
      border: 1px solid rgba(240, 240, 240, 0.9);
      opacity: 0.9;
      color: #999;
      padding-left: 0.44rem;
      margin: 0 auto 0.38rem
    .btndiv
      width: 6rem;
      height: 0.76rem;
      line-height: 0.76rem;
      text-align: center;
      font-size: 0.34rem;
      color: #fff;
      background-color: #8db9dc;
      border-radius: 0.37rem;
      margin: 0.98rem auto 0.3rem;
</style>
