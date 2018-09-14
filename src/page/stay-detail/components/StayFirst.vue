<template>
  <div class="first-box">
    <div class="brief item">
      <h2>住家亮点</h2>
      <p class="article">{{datalist.cn_introduction}}</p>
    </div>
    <div class="item live">
      <h2>住家概括</h2>
      <ul>
        <li><span>是否双亲:</span>{{datalist.parents}}</li>
        <li><span>烹饪风格:</span>{{datalist.cooking}}</li>
        <li><span>宠物情况:</span>{{datalist.pet}}</li>
        <li><span>家庭劳务:</span>{{datalist.chores}}</li>
        <li><span>交通方式:</span>{{datalist.traffic}}</li>
        <li><span>家庭信仰:</span>{{datalist.religion}}</li>
        <li><span>承接能力:</span>{{datalist.room_type}}</li>
        <li><span>社交活动:</span>{{datalist.social}}</li>
        <li><span>学校互动:</span>{{datalist.school_interaction}}</li>
        <li><span>交通爱好:</span>{{datalist.interest}}</li>
      </ul>
    </div>
    <div class="item family">
      <h2>家庭成员</h2>
      <div><span class="iconfont icon-man"></span> <span>{{datalist.subtitle}}</span></div>
    </div>
    <div class="item bedhome iconItem-box">
      <h2>房屋整体信息</h2>
      <div>
        <ul>
          <li><span class="iconfont icon-mianji"></span> 面积未知</li>
          <li><span class="iconfont icon-chuang"></span> 卧室数量{{datalist.bedroom_num}}间</li>
          <li><span class="iconfont icon-bath"></span> 浴室数量{{datalist.bathroom_num}}间</li>
        </ul>
      </div>
    </div>
    <div class="item iconItem-box">
      <h2>配置</h2>
      <div>
        <ul>
          <li><span class="iconfont icon-stopp"></span> 停车场</li>
          <li><span class="iconfont icon-62"></span> 网络</li>
          <li><span class="iconfont icon-dianshi"></span> 电视</li>
          <li><span class="iconfont icon-dianhua"></span> 电话</li>
          <li><span class="iconfont icon-fingerprint"></span> 指纹锁</li>
          <li><span class="iconfont icon-diannao"></span> 电脑</li>
        </ul>
      </div>
    </div>
    <div class="item iconItem-box">
      <h2>学生房间</h2>
      <div>
        <ul>
          <li><span class="iconfont icon-bingxiang"></span> 冰箱</li>
          <li><span class="iconfont icon-kongtiao"></span> 空调</li>
          <li><span class="iconfont icon-iconset0496"></span> 保险柜</li>
        </ul>
      </div>
    </div>
    <div class="item infrastructure">
      <h2>社区配套</h2>
      <div>
        <ul>
          <li v-for="(item, index) of infrastructure" :key="index">{{item}}</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'StayFirst',
  props: {
    datalist: Object
  },
  computed: {
    infrastructure () {
      let arr = []
      let str = this.datalist.community_infrastructure
      arr = str.split(',')
      return arr
    }
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
  .live
    ul
      width: 100%
      clearfloat()
      li
        display: inline-block
        margin-bottom: 0.3rem
        max-width: 50%
        width: 50%
        float: left
        line-height: 0.36rem
        span
          color: #666
          margin-right: 0.12rem
  .family
    .icon-man
      font-size: 0.5rem
      margin-right: 0.2rem
      vertical-align: middle
      color: #0099ff
    span
      vertical-align: middle
  .iconItem-box
    ul
      display: flex
      align-items: center
      justify-content: space-around
      li
        display: flex;
        flex-direction: column
        justify-content: center
        text-align: center
        font-size: 0.24rem
        span
          margin-bottom: 0.1rem
          font-size: 0.5rem
          color: #ff9900
  .infrastructure
    ul
      clearfloat()
      li
        width: 33.33%
        display: inline-block
        float: left
        line-height: 0.6rem
        color: #666
</style>
