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
      <div class="title"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'StayTop',
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
</style>
