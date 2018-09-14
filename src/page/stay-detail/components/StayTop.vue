<template>
  <div>
    <div class="detail-top">
      <router-link to="/" class="alink">
        <span class="iconfont icon-back"></span>
      </router-link>
      住家详情
    </div>
    <div class="bannerBox">
      <swiper :options="swiperOption">
        <swiper-slide v-for="item of datalist.photos" :key="item.id">
          <img class="banner-img" :src="item.path" alt="">
        </swiper-slide>
      </swiper>
    </div>
    <div class="baseInfo">
      <div class="title">{{datalist.city_name}}学区  {{datalist.parents_type}}家庭的 {{datalist.house_type}}</div>
      <div class="star">
        <div class="address"><span class="iconfont icon-map"></span><span>{{datalist.city_name}}学区</span></div>
        <div class="star-item">
          <div><span>生活环境</span><common-star :num="6"></common-star></div>
          <div><span>生活成本</span><common-star :num="9"></common-star></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import CommonStar from 'common/star/star'
export default {
  name: 'StayTop',
  components: {
    CommonStar
  },
  data () {
    return {
      swiperOption: {
        loop: true
      }
    }
  },
  props: {
    datalist: Object
  }
}
</script>

<style lang="stylus" scoped>
  @import '~styles/samecolor.styl'
  .bannerBox >>> .swiper-container
    width: 100%
    height: 100%
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
  .bannerBox
    width: 100%
    height: 5.6rem
    .banner-img
      width: 100%
      height: 100%
  .baseInfo
    padding: 0.3rem 0.24rem
    background-color: #fff
    .title
      font-size: .34rem
      margin-left: .1rem
      padding-bottom: .2rem
      border-bottom: 1px solid #eee
    .address
      margin: 0.2rem 0
      color: #666
      font-size: 0.28rem
      .icon-map
        font-size: 0.33rem
      span
        vertical-align: middle
    .star-item
      display: flex
      justify-content: space-between
      div
        display: flex
        align-items: center
        span
          display: inline-block
          height: 0.3rem
          line-height: 0.3rem
          color: #999
          font-size: 0.26rem
          margin-right: 0.16rem
</style>
