<template>
  <div class="approval">
    <div class="title">
      <span class="iconfont icon-back"></span>
      <h3>发起出行批准</h3>
    </div>
    <div class="approval-con">
      <div class="message">
        <div class="top">
          <div class="left">
            <h3>出行批准</h3>
            <p>pick up and check in process</p>
          </div>
        </div>
        <div class="center"><span>负责人</span><span>管家</span></div>
        <div class="bottom">
          <p><span>发布时间</span><span>9月12日</span></p>
          <p>非常紧急</p>
        </div>
      </div>
      <div class="con_items">
        <div class="c_title">
          <p><i class="iconfont icon-plan"></i>  学生出游计划</p>
          <span>编辑</span>
        </div>
        <div class="c_list">
          <ul>
            <li><i class="iconfont icon-map"></i><span>  洛杉矶</span></li>
            <li><i class="iconfont icon-car"></i><span>  学校组织去海外玩，亲爱的爸妈，我特别想去</span></li>
            <li><i class="iconfont icon-date"></i><span>  2018年3月6日（一天）</span></li>
            <li><i class="iconfont icon-parent1"></i><span>  国外父母</span></li>
            <li><i class="iconfont icon-phone"></i><span>  01186+18917397326</span></li>
          </ul>
        </div>
      </div>
      <div class="con_items">
        <div class="citem">
          <p><i class="iconfont icon-parent2"></i><span>国内父母</span></p>
          <div>
            <button id="agree1" type="button">同意</button>
            <button type="button">不同意</button>
          </div>
        </div>
        <div class="citem">
          <p><i class="iconfont icon-jianhu"></i><span>国外监护人</span></p>
          <div>
            <button class="active" type="button">同意</button>
            <button type="button">不同意</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import $ from 'jquery'
export default {
  name: 'approvalHome',
  props: {
    showval: Boolean
  },
  watch: {
    showval: function () {
      setTimeout(() => {
        $('#agree1').addClass('active')
      }, 500)
      setTimeout(() => {
        this.$emit('passfun', true)
      }, 800)
    }
  }
}
</script>

<style lang="stylus" scoped>
@import '~styles/commonsty.styl'
@import '~styles/samecolor.styl'
.approval
  position:fixed
  left:0
  top:0
  bottom:0
  right:0
  background-color:#f8f7f7
  .title
    position: relative
    height: 0.8rem
    padding:0 0.24rem
    box-sizing:border-box
    line-height: 0.8rem
    text-align: center
    color: #fff
    background-color: $maincolor
    span
      float: left
    h3
      font-size: 0.35rem
  .approval-con
    padding: 0.4rem 0.28rem 0
    .message
      background-image: linear-gradient(90deg, #ff7600 0%, #f59217 21%, #ea9042 41%, #f1b255 100%), linear-gradient(#f7f7f7, #f7f7f7)
      box-shadow: -4px 2px 24px 0px rgba(175, 177, 212, 0.75)
      border-radius: 0.3rem
      color: #fff
      font-size: 0.26rem
      padding: 0.4rem 0.3rem
      position: relative
      .top
        display: flex
        align-items: center
        justify-content: space-between
        .left
          h3
            font-size: 0.3rem
            font-weight: bold
        .right
          span
            font-size: 0.45rem
      .center
        margin-top: 0.5rem
        span
          margin-right: 0.12rem
      .bottom
        display: flex
        align-items: center
        justify-content: space-between
        margin-top: 0.12rem
        span
          margin-right: 0.12rem
    .con_items
      border-radius: 10px
      background-color: #fff
      margin:0.4rem 0rem
      padding: 0.2rem 0.24rem
      box-shadow: -4px 2px 24px 0px rgba(175, 177, 212, 0.75)
      .c_title
        color: $maincolor
        display:flex
        justify-content: space-between
        align-items: center
        font-size: 0.28rem
        border-bottom: 1px solid #ece9e9
        padding-bottom: 0.12rem
        margin-bottom: 0.12rem
      li
      .citem
        display: flex
        align-items: center
        font-size: 0.26rem
        color: #585757
        margin-bottom: 0.12rem
        i
          padding-bottom: 0.1rem
          color: #b2b2b2
        span
          flex: 1
          border-bottom: 1px solid #ece9e9
          padding: 0.12rem 0
          margin-bottom: 0.12rem
          margin-left: 0.1rem
        &:last-child
          span
            border-bottom: none
      .citem
        border-bottom: 1px solid #ece9e9
        padding: 0.12rem 0
        justify-content: space-between
        &:last-child
          border-bottom: none
        span
          border-bottom: none
        button
          padding: 0.05rem 0.12rem
          border-radius:5px
          background-color: transparent
          border: 1px solid #ece9e9
        .active
          background-color: $maincolor
          color: #fff
          border-color: $maincolor
</style>
