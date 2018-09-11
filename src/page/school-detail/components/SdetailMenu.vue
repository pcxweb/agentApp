<template>
  <div class="school-menu">
    <ul class="border-bottom items">
      <li :class="['itemli', 'border-right', {active: showactive==1 ? true : false}]" @click="tabnavFun(1)">学校详情</li>
      <li :class="['itemli', 'border-right', {active: showactive==2 ? true : false}]" @click="tabnavFun(2)">推荐住家</li>
      <li :class="['itemli', {active: showactive==3 ? true : false}]" @click="tabnavFun(3)">城市介绍</li>
    </ul>
    <first-menu :dataList="datalist" v-show="showactive==1 ? true : false"></first-menu>
    <second-menu v-show="showactive==2 ? true : false"></second-menu>
    <third-menu v-show="showactive==3 ? true : false"></third-menu>
  </div>
</template>

<script>
import FirstMenu from './FirstMenu'
import SecondMenu from './SecondMenu'
import ThirdMenu from './ThirdMenu'
export default {
  name: 'SdetailMenu',
  props: {
    datalist: Object
  },
  data () {
    return {
      showactive: 1
    }
  },
  components: {
    FirstMenu,
    SecondMenu,
    ThirdMenu
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
