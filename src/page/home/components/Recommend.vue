<template>
  <div class="recommendBox">
    <div class="title">
      <div class="t-left">推荐住家</div>
      <div class="t-right">更多 <span class="iconfont icon-more"></span></div>
    </div>
    <swiper :options="swiperOption">
      <swiper-slide v-for="item of recommendlist" :key="item.id">
        <div class="re-banner" @click="handleSdetail(item.num, item.id)">
          <div class="re-img">
            <img class="img-con" :src="item.imgUrl" alt="">
            <span class="img-address"><span class="iconfont icon-map"></span>{{item.imgaddress}}</span>
          </div>
          <div class="re-con">
            <div class="re-desc">
              <h2>{{item.title}}</h2>
              <p>{{item.desc}}</p>
            </div>
            <div class="re-remark">
              <div class="dastance">{{item.dastance}}</div>
              <div class="money">{{item.money}}</div>
            </div>
          </div>
        </div>
      </swiper-slide>
      <div class="swiper-pagination"  slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
import { mapMutations } from 'vuex'
export default {
  name: 'HomeRecommend',
  props: {
    recommendlist: Array
  },
  data () {
    return {
      swiperOption: {
        pagination: '.swiper-pagination',
        paginationType: 'fraction',
        autoplay: 6000
      }
    }
  },
  methods: {
    handleSdetail (ids, cityid) {
      this.changeStayId(ids)
      this.changeCityId(cityid)
      console.log(cityid)
      this.$router.push('/stay/' + ids)
    },
    ...mapMutations(['changeStayId']),
    ...mapMutations(['changeCityId'])
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus" scoped>
@import '~styles/samecolor.styl'
@import '~styles/commonsty.styl'
.swiper-pagination
  width: auto
  height: auto
  display: inline-block
  background-color: rgba(0,0,0,.6)
  padding: .1rem .2rem
  top: 0.2rem
  right: 0.2rem
  bottom: auto
  left: auto
  color: #fff
  border-radius: 0.24rem
.recommendBox
  margin-top: 0.24rem
  background-color: #fff
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
    .re-img
      position: relative
      width: 100%
      height: 0
      padding-bottom: 45%
      .img-con
        width: 100%
      .img-address
        position: absolute
        display: inline-block
        line-height: .4rem;
        border-radius: .19rem;
        top: 2.8rem;
        left: .16rem;
        padding: 0 .15rem;
        text-align: center;
        color: #fff
        background-color: rgba(0,0,0,.4)
        font-size: 0.26rem
        .icon-map
          vertical-align: middle
          font-size: 0.35rem
          margin-right: 0.02rem
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
</style>
