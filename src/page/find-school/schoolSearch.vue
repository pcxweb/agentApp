<template>
  <div class="schoolsearch">
    <div class="detail-top">
      <router-link to="/" class="alink">
        <span class="iconfont icon-back"></span>
      </router-link>
      美国中学
    </div>
    <div class="keyword_list">
      <ul>
        <li :class="{'active': num === 1}" @click="changekey('12年级可申请', 1)">12年级可申请</li>
        <li :class="{'active': num === 2}" @click="changekey('住老师家', 2)">住老师家</li>
        <li :class="{'active': num === 3}" @click="changekey('小学可申请', 3)">小学可申请</li>
      </ul>
    </div>
    <div class="content">
      <div class="item" v-for="item of schoolData" :key="item.id">
        <div class="left">
          <span class="tagtxt">{{item.tags[0].tag}}</span>
          <img class="img-box" :src="item.thumbnail + '?x-oss-process=image/resize,m_fixed,w_133,h_87'" alt="">
        </div>
        <div class="right">
          <h3>{{item.en_name}}</h3>
          <p>{{item.subtitle}}</p>
          <p>{{item.subtitle2}}</p>
          <div class="foottxt">
            <p><span class="iconfont icon-map"></span><span>{{item.city}}</span></p>
            <span class="money">${{item.price}}/年</span>
          </div>
        </div>
      </div>
    </div>
    <!-- <loading></loading> -->
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'schoolSearch',
  data () {
    return {
      schoolData: [],
      keywordval: '',
      num: 0
    }
  },
  methods: {
    getList () {
      axios.get('http://api.beanhome.com/schools?keywords=' + this.keywordval)
        .then(this.getListSucc)
    },
    getListSucc (res) {
      console.log(res.data.data)
      const datas = res.data.data
      this.schoolData = datas
    },
    changekey (keyval, nums) {
      this.keywordval = keyval
      this.num = nums
      this.getList()
    }
  },
  watch: {
    keywordval (newval) {
      console.log(this.schoolData.length)
    }
  },
  mounted () {
    this.getList()
  }
}
</script>

<style lang="stylus" scoped>
@import '~styles/commonsty.styl'
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
  .keyword_list
    width: 100%
    overflow: auto
    ul
      width: 100%
      overflow: auto
      display: flex
      align-items: center
      padding: 0.2rem 0.14rem
      box-sizing: border-box
      li
        padding: 0.1rem
        white-space:nowrap
        background-color: #fff
        border-radius: 0.2rem
        margin-right: 0.2rem
      .active
        background-color: $maincolor
        color: #fff
  .content
    background-color: #fff
    .item
      padding: 0.24rem
      border-bottom: 1px solid #ccc
      display: flex;
      align-items: center
      .left
        width: 2.66rem
        height: 1.74rem
        background: url('http://res.beanhomestay.com/static/m/img/默认图.96073f7.png') no-repeat 50%
        background-size: 85% 100%
        position: relative
        border-radius: .1rem
        overflow: hidden
        flex-shrink: 0
        .img-box
          width: 100%
          height: 100%
        .tagtxt
          display: inline-block
          padding: 0.08rem
          color: #fff;
          background-color: rgba(0,0,0,.5)
          position: absolute
          top: 0.1rem
          left: 0.1rem
          font-size: 0.24rem
          border-radius: 0.08rem
      .right
        flex: 1
        margin-left: 0.2rem
        overflow: hidden
        h3
        p
          ellipsis()
        h3
          font-size: 0.35rem
          color: #000
          margin-bottom: 0.24rem
          padding-bottom: 0.1rem
        p
          color: #666
          font-size: 0.24rem
          margin-bottom: 0.1rem
        .foottxt
          display: flex
          justify-content: space-between
          align-items: center
          margin-top: 0.1rem
          p
            span
              vertical-align: middle
              color: #c0c0c0
              font-size: 0.24rem
            .iconfont
              margin-right: 0.06rem
              font-size: 0.3rem
          .money
            color: $maincolor
            font-size: 0.24rem
</style>
