<template>
  <div class="hotBox">
    <div class="title">
      <div class="t-left">热门中学</div>
      <div class="t-right">更多 <span class="iconfont icon-more"></span></div>
    </div>
    <div class="content">
      <div class="item" v-for="item of hotlist" :key="item.id">
        <div class="item-img"><img :src="item.imgUrl" alt=""></div>
        <div class="zh-title">{{item.zh_title}}</div>
        <div class="en-title">{{item.en_title}}</div>
        <div class="desc">{{item.desc}}</div>
        <div class="address-money">
          <div class="money">$ {{item.money}}/年</div>
          <div class="address"><span class="iconfont icon-map"></span>{{item.address}}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomeHothouse',
  props: {
    hotlist: Array
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus" scoped>
@import '~styles/samecolor.styl'
@import '~styles/commonsty.styl'
.hotBox
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
  .content
    width: 100%
    overflow-x: auto
    padding: 0 0.2rem
    white-space: nowrap
    box-sizing: border-box
    .item
      width: 4rem
      display: inline-block
      padding: 0.08rem
      padding-bottom: 0.24rem
      .item-img
        width: 4rem
        height: 2.31rem
        border-radius: 0.1rem
        overflow: hidden
        margin-bottom: 0.19rem
        img
          width: 100%
          height: 100%
      .zh-title
      .en-title
      .desc
        ellipsis()
        margin-bottom: 0.1rem
      .zh-title
        font-size: 0.34rem
        font-weight: bold
        padding-top: 0.06rem
      .en-title
        font-size: 0.34rem
        color: #555
        margin-bottom: 0.24rem
      .desc
        font-size: 0.24rem
        color: #666
        margin-bottom: 0.24rem
      .address-money
        display: flex
        align-items: center
        justify-content: space-between
        font-size: 0.24rem
        .address
          color: #c0c0c0
          width: 2rem
          ellipsis()
          .iconfont
            vertical-align: middle
            font-size: 0.35rem
        .money
          color: #ff9800
</style>
