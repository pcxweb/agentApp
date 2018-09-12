<template>
  <div class="gallary" @click="handleClickImg">
    <swiper :options="swiperOption">
      <!-- slides -->
      <swiper-slide v-for="item of photoslist" :key="item.id">
        <img class="swiper-img" :src="item.path" alt="">
        <p>{{item.title}}</p>
      </swiper-slide>
      <!-- <swiper-slide>
        <img class="swiper-img" src="http://img1.qunarzz.com/sight/p0/1707/f4/f44d291b76de7b14a3.img.jpg_r_800x800_805a5b06.jpg" alt="">
      </swiper-slide>
      <swiper-slide>
        <img class="swiper-img" src="http://img1.qunarzz.com/sight/p0/1707/b9/b93e947051180ec5a3.img.jpg_r_800x800_dfbf15eb.jpg" alt="">
      </swiper-slide> -->
      <!-- Optional controls -->
      <div class="swiper-pagination"  slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
export default {
  name: 'CommonGallary',
  props: {
    photoslist: Array
  },
  data () {
    return {
      swiperOption: {
        pagination: '.swiper-pagination',
        paginationType: 'fraction',
        observer: true,
        observeParents: true
      }
    }
  },
  methods: {
    handleClickImg () {
      this.$emit('close')
    }
  }
}
</script>

<style lang="stylus" scoped>
  .gallary >>> .swiper-container
    width: 100%
    overflow: visible
  .gallary
    display: flex
    width: 100%
    overflow: hidden
    flex-direction: column
    justify-content: center
    position: fixed
    top: 0
    left: 0
    right: 0
    bottom: 0
    background: #000
    z-index: 3
    .swiper-img
      width: 100%
    p
      color: #fff
      text-align: center
      margin-top: 0.1rem
    .swiper-pagination
      color: #fff
      bottom: -1rem
      font-size: 0.3rem
</style>
