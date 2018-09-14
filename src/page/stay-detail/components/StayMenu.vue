<template>
  <div class="school-menu">
    <ul class="border-bottom items">
      <li :class="['itemli', 'border-right', {active: showactive==1 ? true : false}]" @click="tabnavFun(1)">住家详情</li>
      <li :class="['itemli', 'border-right', {active: showactive==2 ? true : false}]" @click="tabnavFun(2)">推荐住家</li>
      <li :class="['itemli', {active: showactive==3 ? true : false}]" @click="tabnavFun(3)">城市介绍</li>
    </ul>
    <stay-first :datalist="datalist"  v-show="showactive==1 ? true : false"></stay-first>
    <stay-second v-show="showactive==2 ? true : false"></stay-second>
    <stay-third v-show="showactive==3 ? true : false"></stay-third>
  </div>
</template>

<script>
import StayFirst from './StayFirst'
import StaySecond from './StaySecond'
import StayThird from './StayThird'
export default {
  name: 'StayMenu',
  data () {
    return {
      showactive: 1
    }
  },
  props: {
    datalist: Object
  },
  components: {
    StayFirst,
    StaySecond,
    StayThird
  },
  methods: {
    tabnavFun (num) {
      this.showactive = num
    }
  }
}
</script>

<style lang="stylus" scoped>
  @import '~styles/samecolor.styl'
  .border-right
    &:before
      border-color: #000
  .active
    color: $maincolor
  .items
    display: flex
    align-items: center
    .itemli
      flex: 1
      text-align: center
      margin: 0.3rem 0
</style>
