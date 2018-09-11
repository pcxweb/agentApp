<template>
  <div class="second-menu">
    <div class="re-banner">
      <div class="re-img">
        <img class="img-con" src="http://pic.beanhomestay.com/photos/homestay133/2018/i3oq6b9kOVs2BqM1Ot4NUAAeMPvyUlRy5CCT4ks5.png?x-oss-process=image/resize,m_fill,w_690,h_340" alt="">
      </div>
      <div class="re-con">
        <div class="re-desc">
          <h2>布兰诺市学区 欧洲裔双亲家庭的独栋别墅</h2>
          <p>房东 银行职员</p>
        </div>
        <div class="re-remark">
          <div class="dastance">距 Westbury Christian School 0miles</div>
          <div class="money">$--/年</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SecondMenu'
}
</script>

<style lang="stylus" scoped>
@import '~styles/samecolor.styl'
@import '~styles/commonsty.styl'
.second-menu
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
