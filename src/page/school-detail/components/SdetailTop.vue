<template>
  <div>
    <div class="detail-top">
      <router-link to="/" class="alink">
        <span class="iconfont icon-back"></span>
      </router-link>
      学校详情
    </div>
    <div class="top-img">
      <img class="img-con" :src="datalist.thumbnail" alt="">
      <div class="mask"></div>
      <div class="info">
        <h2>{{datalist.cn_name}}</h2>
        <p>{{datalist.en_name}}</p>
        <div class="base">
          <span>{{datalist.city_name}}</span>
          <span>建校年份 {{datalist.establishment}}年</span>
          <span>面积 {{datalist.area}}英亩</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SdetailTop',
  props: {
    datalist: Object
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
  .top-img
    width: 100%;
    height: 4.18rem;
    background: url('http://res.beanhomestay.com/static/m/img/默认图.96073f7.png') no-repeat 50%;
    background-size: 100% 100%;
    text-align: center;
    color: #fff;
    position: relative;
    .img-con
      width: 100%
      height: 100%
    .mask
      position: absolute
      top: 0
      left: 0
      right: 0
      bottom: 0
      background: linear-gradient(rgba(0,0,0,0) 20%,rgba(0,0,0,.6) 80%)
    .info
      width: 100%
      position: absolute
      bottom: 0.7rem
      left: 0
      color: #fff
      h2
        font-size: 0.4rem
        margin-bottom: 0.2rem
      p
        font-size: 0.3rem
        margin-bottom: 0.24rem
      .base
        font-size: 0.28rem
</style>
