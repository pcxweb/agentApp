<template>
  <div class="MenuBox">
    <ul class="item-box">
      <li class="item">
        <div class="iconbox"><span class="iconfont icon-city"></span></div>
        <p>找城市</p>
      </li>
      <li class="item">
        <div class="iconbox"><span class="iconfont icon-school"></span></div>
        <p>找学校</p>
      </li>
      <router-link tag="li" to="/searchstay/" class="item">
        <div class="iconbox"><span class="iconfont icon-bed"></span></div>
        <p>找住家</p>
      </router-link>
      <li class="item">
        <div class="iconbox"><span class="iconfont icon-fuwu"></span></div>
        <p>后续服务</p>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HomeMenu'
}
</script>

<style lang="stylus" scoped>
.MenuBox
  background-color: #fff
  .item-box
    width: 100%
    overflow: hidden
    padding: 0.2rem 0
    .item
      width: 25%
      float: left
      display: flex
      justify-content: center
      flex-direction: column
      align-item: center
      text-align: center
      cursor: pointer
      .iconbox
        text-align: center
        margin: 0.2rem 0
        span
          font-size: 0.4rem
        .icon-city
          color: #479bf1
        .icon-school
          color: #f0924a
        .icon-bed
          color: #67b58e
        .icon-fuwu
          color: #f1c250
</style>
