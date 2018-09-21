<template>
  <div class="staysearch">
    <div class="detail-top">
      <router-link to="/" class="alink">
        <span class="iconfont icon-back"></span>
      </router-link>
      寄宿家庭
    </div>
    <div class="keyword_list">
      <ul>
        <li v-for="(item, index) of titledata" :class="{'active': num === index}" :key="index" @click="changekey(item.title, index)">{{item.title}}</li>
      </ul>
    </div>
    <menu-list :recomdata="recomData"></menu-list>
    <!-- <loading></loading> -->
  </div>
</template>

<script>
import axios from 'axios'
import MenuList from 'common/detail/RecommendLive'
import Loading from 'common/loading/Loading'
export default {
  name: 'StaySearch',
  data () {
    return {
      titledata: [],
      recomData: [],
      keywordval: '',
      num: ''
    }
  },
  components: {
    MenuList,
    Loading
  },
  methods: {
    getTitle () {
      axios.get('http://api.beanhome.com/homestays/hot_keywords')
        .then(this.getTitleSucc)
    },
    getTitleSucc (res) {
      console.log(res.data.data)
      const datas = res.data.data
      this.titledata = datas
    },
    getList () {
      axios.get('http://api.beanhome.com/homestays?keywords=' + this.keywordval)
        .then(this.getListSucc)
    },
    getListSucc (res) {
      console.log(res.data.data)
      const datas = res.data.data
      this.recomData = datas
    },
    changekey (keyval, nums) {
      this.keywordval = keyval
      this.num = nums
      this.getList()
    }
  },
  watch: {
    keywordval (newval) {
      console.log(newval)
      console.log(this.recomData.length)
    }
  },
  mounted () {
    this.getTitle()
    this.getList()
  }
}
</script>

<style lang="stylus" scoped>
@import '~styles/samecolor.styl'
  .detail-top
    position: relative
    background: linear-gradient(bottom left,#FF6633,#FFCC33)
    height: 0.66rem
    line-height: 0.66rem
    text-align: center
    font-size: 0.3rem
    color: #fff
    .alink
      color: #fff
      .icon-back
        position: absolute
        top: 0
        left: 0
        width: .64rem
        text-align: center
        font-size: .35rem
  .keyword_list
    width: 100%
    overflow: auto
    ul
      width: 100%
      overflow: auto
      display: flex
      align-items: center
      padding: 0.2rem 0.14rem
      box-sizing: border-box
      li
        padding: 0.1rem
        white-space:nowrap
        background-color: #fff
        border-radius: 0.2rem
        margin-right: 0.2rem
      .active
        background-color: $maincolor
        color: #fff
</style>
