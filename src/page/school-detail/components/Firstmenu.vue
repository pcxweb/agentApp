<template>
  <div class="first-menu">
    <div class="brief item">
      <h2>学校介绍</h2>
      <p class="article">{{dataList.cn_notes}}</p>
    </div>
    <div class="item special">
      <h2>学校特色</h2>
      <ul class="dotul">
        <li v-for="item of dataList.tags">{{item.tag}}</li>
      </ul>
    </div>
    <div class="item advantage">
      <h2>学校优势</h2>
      <div class="article" v-for="item of dataList.cn_advantages">
        <span class="iconfont icon-order"></span>
        <p>{{item}}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'FirstMenu',
  props: {
    dataList: Object
  }
}
</script>

<style lang="stylus" scoped>
@import '~styles/commonsty.styl'
@import '~styles/samecolor.styl'
.first-menu
  .item
    background-color: #fff;
    margin-bottom: 0.24rem
    padding:0.2rem 0.24rem
    h2
      font-size: 0.34rem
      font-weight: bold
      padding: 0.3rem 0
    .article
      font-size: .28rem;
      color: #333;
      line-height: .4rem;
      overflow: hidden;
      margin-bottom: 0.24rem
  .dotul
    clearfloat()
    li
      float: left
      color: #fff
      padding: 0.2rem
      margin-bottom: 0.2rem
      background-color: #ff9800
      border-radius: 0.2rem
      margin-right: 0.2rem
      &:nth-child(6n+1)
        background: linear-gradient(top right,#ff99cc,#ff9933)
      &:nth-child(6n+2)
        background: linear-gradient(45deg,#ff99ff,#6699cc)
      &:nth-child(6n+3)
        background: linear-gradient(top left,#99ff66,#9966ff)
      &:nth-child(6n+4)
        background: linear-gradient(bottom left,#FF6633,#FFCC33)
      &:nth-child(6n+5)
        background: linear-gradient(135deg,#cc00ff,#ff6666)
      &:nth-child(6n+6)
        background: linear-gradient(120deg,#FF0033,#FFFF66)
  .advantage
    .article
      display: flex
      .icon-order
        color: $maincolor
        margin-right: 0.1rem
        font-size: 0.26rem
</style>
