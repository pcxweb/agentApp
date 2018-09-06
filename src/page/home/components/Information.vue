<template>
  <div class="InfoBox">
    <div class="title">
      <div class="t-left">热门资讯</div>
      <div class="t-right">更多 <span class="iconfont icon-more"></span></div>
    </div>
    <div>
      <div class="info-con border-bottom" v-for="item of infolist" :key="item.id">
        <div class="info_left">
          <div class="info-title">{{item.title}}</div>
          <div class="remark">
            <span>{{item.score}}</span>
            <span>{{item.time}}</span>
          </div>
        </div>
        <div class="info_right">
          <img class="img-con" :src="item.imgUrl" alt="">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomeInformation',
  props: {
    infolist: Array
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus" scoped>
@import '~styles/samecolor.styl'
@import '~styles/commonsty.styl'
.InfoBox
  margin-top: 0.24rem
  background-color: #fff
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
        font-size: 0.2rem
  .info-con
    display: flex
    justify-content: space-between
    align-items: center
    padding: .32rem .26rem
    .info_left
      width: 4.13rem
      .info-title
        font-size: 0.34rem
        font-weight: 400
        overflow: hidden
        display: -webkit-box
        -webkit-box-orient: vertical
        -webkit-line-clamp: 2
        margin-bottom: 0.24rem
        line-height: 0.4rem
      .remark
        display: flex
        justify-content: space-between
        align-items: center
        font-size: 0.24rem
        color: #c0c0c0
    .info_right
      width: 2.35rem
      height: 1.48rem
      border-radius: 0.1rem
      overflow: hidden
      .img-con
        width: 100%
        height: 100%
</style>
