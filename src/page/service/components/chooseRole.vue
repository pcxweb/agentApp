<template>
  <div class="role">
    <div class="title">请选择您的角色</div>
    <div class="items">
      <div class="item" @click="chooserole(1)">
        <div class="ripple11"></div>
        <div class="ripple12"></div>
        <div>我是家长</div>
      </div>
      <div class="item" @click="chooserole(1)">
        <div class="ripple21"></div>
        <div class="ripple22"></div>
        <div>我是学生</div>
      </div>
      <div class="item" @click="chooserole(2)">
        <div class="ripple31"></div>
        <div class="ripple32"></div>
        <div>我是顾问</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'chooseRole',
  methods: {
    chooserole (num) {
      this.$emit('choosenum', num)
    }
  }
}
</script>

<style lang="stylus" scoped>
@import '~styles/commonsty.styl'
@import '~styles/samecolor.styl'
.role
  width: 100%
  height: 100%
  background-color: #fff
  font-size: 0.34rem
  padding-top: 15%
  position: fixed
  top: 0
  left: 0
  z-index: 98
  .title
    font-size: 0.48rem
    color: $maincolor
    text-align: center
    margin-bottom: 6%
    font-weight: bold
  .items
    .item
      width: 3rem
      height: 3rem
      text-align: center
      border-radius: 50%
      color: #fff
      margin: 0 auto 2.9%
      position: relative
      div
        width: 2.36rem
        height: 2.36rem
        line-height: 2.36rem
        border-radius: 50%
        position: absolute
        left: 0.32rem
        top: 0.32rem
      &:nth-child(1)
        div
          background-image: linear-gradient(90deg, #ffa957 0%, #ff8366 50%, #fe5d76 100%), linear-gradient(#5982f9, #5982f9)
        .ripple11
          opacity: 0.9
          animation: ripple11 2s infinite
        .ripple12
          animation: ripple12 2s infinite
      &:nth-child(2)
        div
          background-image: linear-gradient(90deg,#9d5bfe 0%,#9062fe 21%,#7f6bfe 41%,#3d8efe 100%), linear-gradient(#bb59f9,#bb59f9)
        .ripple21
          opacity: 0.9
          animation: ripple21 2s infinite
        .ripple22
          animation: ripple22 2s infinite
      &:nth-child(3)
        div
          background-image: linear-gradient(90deg, #ff7200 0%, #ff7800 49%, #ff3000 100%),linear-gradient(#f96859, #f96859)
        .ripple31
          opacity: 0.9
          animation: ripple31 2s infinite
        .ripple32
          animation: ripple32 2s infinite
</style>
