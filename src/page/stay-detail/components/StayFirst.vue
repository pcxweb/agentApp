<template>
  <div class="first-box">
    <div class="brief item">
      <h2>住家亮点</h2>
      <p class="article">{{datalist.cn_introduction}}</p>
    </div>
    <div class="item">
      <h2>住家概括</h2>
      <ul>
        <li><span>是否双亲:</span></li>
        <li><span>烹饪风格:</span></li>
        <li><span>宠物情况:</span></li>
        <li><span>家庭劳务:</span></li>
        <li><span>交通方式:</span></li>
        <li><span>家庭信仰:</span></li>
        <li><span>承接能力:</span></li>
        <li><span>社交活动:</span></li>
        <li><span>学校互动:</span></li>
        <li><span>交通爱好:</span></li>
      </ul>
    </div>
    <div class="item">
      <h2>家庭成员</h2>
      <div></div>
    </div>
    <div class="item">
      <h2>房屋整体信息</h2>
      <div></div>
    </div>
    <div class="item">
      <h2>配置</h2>
      <div></div>
    </div>
    <div class="item">
      <h2>学生房间</h2>
      <div></div>
    </div>
    <div class="item">
      <h2>社区配套</h2>
      <div></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'StayFirst',
  props: {
  	datalist: Object
  }
}
</script>

<style lang="stylus" scoped>
@import '~styles/commonsty.styl'
@import '~styles/samecolor.styl'
.first-box
  .item
    background-color: #fff
    margin-bottom: 0.24rem
    padding:0.2rem 0.24rem
    position: relative
    h2
    .top
      font-size: 0.34rem
      font-weight: bold
      padding: 0.3rem 0
    .article
      font-size: .28rem;
      color: #333;
      line-height: .4rem;
      overflow: hidden;
      margin-bottom: 0.24rem
</style>
