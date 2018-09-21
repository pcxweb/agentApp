<template>
  <div class="recommend-live">
    <div class="re-banner" v-for="(item, index) of recomlist" :key="index">
      <div class="re-img">
        <img class="img-con" :src="item.thumbnail + '?x-oss-process=image/resize,m_fill,w_690,h_340'" alt="">
      </div>
      <div class="re-con">
        <div class="re-desc">
          <h2>{{item.title}}</h2>
          <p>房东 {{item.sub_title}}</p>
        </div>
        <div class="re-remark">
          <div class="dastance">距 {{item.near_school_name}} {{item.near_school}}miles</div>
          <div class="money">${{item.price}}/年</div>
        </div>
      </div>
    </div>
    <div class="norecommed" v-show="remleng">暂无推荐</div>
  </div>
</template>

<script>
import axios from 'axios'
import { mapState } from 'vuex'
export default {
  name: 'RecommendLive',
  data () {
    return {
      stayids: '',
      cityids: '',
      recomdatas: []
    }
  },
  props: {
    recomdata: {
      type: Array,
      default: function () {
        return [0]
      }
    }
  },
  computed: {
    remleng () {
      if (this.recomdata.length === 0 && this.recomdatas.length === 0) {
        return true
      } else if (this.recomdata[0] === 0 && this.recomdatas.length === 0) {
        return true
      } else {
        return false
      }
    },
    recomlist () {
      if (this.recomdata[0] === 0) {
        return this.recomdatas
      } else {
        return this.recomdata
      }
    },
    ...mapState(['stayId', 'cityId'])
  },
  methods: {
    getrecommendfun () {
      axios.get('http://api.beanhome.com/homestays/' + this.stayId + '/citys/' + this.cityId + '/recommend')
        .then(this.getrecommendsucc)
    },
    getrecommendsucc (res) {
      console.log(res)
      this.recomdatas = res.data.data
    }
  },
  mounted () {
    this.stayids = this.stayId
    this.cityids = this.cityId
    if (this.recomdata[0] === 0) {
      this.getrecommendfun()
    }
  },
  activated () {
    if (this.stayids !== this.stayId || this.cityids !== this.cityId) {
      this.stayids = this.stayId
      this.cityids = this.cityId
      this.getrecommendfun()
    }
  }
}
</script>

<style lang="stylus" scoped>
@import '~styles/samecolor.styl'
@import '~styles/commonsty.styl'
.recommend-live
  padding-bottom: 0.1rem
  .title
    display: flex
    justify-content: space-between
    align-items: center
    fonn-size: 0.14rem
    padding: 0.3rem 0.22rem
    color: #232323
    .t-left
      font-size: 0.36rem
      color: #2f2f2f
      font-weight: bold
    .t-right
      color: $morecolor
      font-size: 0.24rem
      .icon-more
        font-size: 0.22rem
        vertical-align: middle
  .re-banner
    width: 100%
    margin-bottom:0.5rem
    background-color: #fff
    .re-img
      position: relative
      width: 100%
      height: 0
      padding-left:0.24rem
      padding-right:0.24rem
      padding-top:0.24rem
      padding-bottom: 45%
      overflow: hidden
      box-sizing: border-box
      .img-con
        width: 100%
        border-radius: 5px
    .re-con
      padding:0.24rem
      .re-desc
        margin:0.2rem 0
        h2
          font-size: 0.34rem
          font-weight: bold
          margin-bottom: 0.1rem
        p
          font-size: 0.28rem
          color: #666
      .re-remark
        display: flex
        justify-content: space-between
        color: #c0c0c0
        font-size: 0.24rem
        .dastance
          width: 70%
          line-height: 0.3rem
        .money
          color: #ff9800
  .norecommed
    background-color: #fff
    text-align: center
    padding: 0.24rem
</style>
