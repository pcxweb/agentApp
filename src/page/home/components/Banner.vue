<template>
  <div>
    <div class="bannerBox">
      <swiper :options="swiperOption">
        <!-- slides -->
        <swiper-slide>
          <!-- <router-link to="/school/116"> -->
            <img @click="handleSdetail(116, 248)" class="banner-img" src="http://pic.beanhomestay.com/photos/recommend/132/2018/FJwJ28h15cQOCyHWBUBwadSt37HXF7qmjJ2uu9vY.png" alt="">
          <!-- </router-link> -->
        </swiper-slide>
        <swiper-slide>
          <!-- <router-link to="/school/119"> -->
            <img @click="handleSdetail(119, 250)" class="banner-img" src="http://pic.beanhomestay.com/photos/recommend/131/2018/Cfx4ucRlBK1hb3yQ2lED87ahwMYHBTwVkmnlfqaK.png" alt="">
          <!-- </router-link> -->
        </swiper-slide>
        <!-- Optional controls -->
        <div class="swiper-pagination"  slot="pagination"></div>
      </swiper>
    </div>
  </div>
</template>

<script>
import { mapMutations } from 'vuex'
export default {
  name: 'HomeBanner',
  data () {
    return {
      swiperOption: {
        loop: true,
        pagination: '.swiper-pagination'
      }
    }
  },
  methods: {
    handleSdetail (ids, cityids) {
      // alert(1)
      this.changeStayId(ids)
      this.changeCityId(cityids)
      this.$router.push('/school/' + ids)
    },
    ...mapMutations(['changeStayId', 'changeCityId'])
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
    height: 0
    padding-bottom: 45%
    .banner-img
      width: 100%
</style>
