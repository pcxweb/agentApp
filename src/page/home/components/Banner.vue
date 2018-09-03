<template>
  <div>
    <div class="bannerBox">
      <swiper :options="swiperOption">
        <!-- slides -->
        <swiper-slide>
          <img class="banner-img" src="http://pic.beanhomestay.com/photos/recommend/132/2018/FJwJ28h15cQOCyHWBUBwadSt37HXF7qmjJ2uu9vY.png" alt="">
        </swiper-slide>
        <swiper-slide>
          <img class="banner-img" src="http://pic.beanhomestay.com/photos/recommend/131/2018/Cfx4ucRlBK1hb3yQ2lED87ahwMYHBTwVkmnlfqaK.png" alt="">
        </swiper-slide>
        <!-- Optional controls -->
        <div class="swiper-pagination"  slot="pagination"></div>
      </swiper>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomeBanner',
  data () {
    return {
      swiperOption: {
        loop: true,
        pagination: '.swiper-pagination'
      }
    }
  }
}
</script>

<style lang="stylus" scoped>
  @import '~styles/samecolor.styl'
  .bannerBox >>> .swiper-pagination-bullet
    background: #fff
    opacity: 0.5
  .bannerBox >>> .swiper-pagination-bullet-active
    background-color: $maincolor
    opacity: 1
  .bannerBox
    width: 100%
    heigth: 3.4rem
    .banner-img
      width: 100%
</style>
