<template>
  <div class="star">
    <span
      v-for="(item, index) of starArr"
      :class="['iconfont', item]"
      :key="index"
    >
    </span>
  </div>
</template>

<script>
export default {
  name: 'CommonStar',
  props: {
    num: {
      type: Number,
      default: 0
    }
  },
  computed: {
    starArr () {
      let arr = []
      let nums = this.num
      if (nums > 10) {
        nums = 10
      } else if (nums < 0) {
        nums = 0
      }
      let shang = Math.floor(nums / 2)
      for (var i = 0; i < shang; i++) {
        arr.push('icon-full-star')
      }
      let Remainder = nums % 2
      if (Remainder !== 0) {
        arr.push('icon-half-star')
      }
      let empty = 5 - shang - Remainder
      for (var j = 0; j < empty; j++) {
        arr.push('icon-empty-star')
      }
      return arr
    }
  }
}
</script>

<style lang="stylus" scoped>
.star
  width: 1.88rem
  height: 0.3rem
  margin-right: 0.1rem
  display: flex
  justify-content: space-around
  align-items: center
  .iconfont
    font-size: 0.3rem
    color: #ff9900
</style>
