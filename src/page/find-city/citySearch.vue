<template>
  <div class="schoolsearch">
    <div class="detail-top">
      <router-link to="/" class="alink">
        <span class="iconfont icon-back"></span>
      </router-link>
      美国中学2
    </div>
    <div class="keyword_list">
      <div class="choose_area">
        <p><span>城市选择</span> <span class="iconfont icon-select"></span></p>
        <div class="con"></div>
      </div>
      <ul>
        <li>加利福尼亚区</li>
        <li>纽约大区</li>
        <li>宾夕法尼亚大区</li>
        <li>马萨诸塞大区</li>
        <li>德克萨斯大区</li>
      </ul>
    </div>
    <div class="starbox">
      <div class="star_item"><span>留学热度</span><common-star :num="8"></common-star></div>
      <div class="star_item"><span>生活环境</span><common-star :num="5"></common-star></div>
      <div class="star_item"><span>教育质量</span><common-star :num="9"></common-star></div>
      <div class="star_item"><span>生活成本</span><common-star :num="10"></common-star></div>
    </div>
    <div class="total_box">
      <div class="total_item"><span class="iconfont icon-college"></span><p>可申请学校25家</p></div>
      <div class="total_item"><span class="iconfont icon-stay"></span><p>已上线住家3家</p></div>
    </div>
    <div class="desc">
      <p>宾州大区位于美国东北部，教育经济发达，总面积约为24.45万平方公里，人口约为3100万人。其中，1787年，经联邦宪法批准，宾夕法尼亚成为加入联邦的第2个州。该州自从建立之初就以宗教自由和政治民主著称，美国历史上的许多重要篇章都是在宾州谱写的。马里兰州是以英王查理一世之妻玛丽亚皇后之名命名。此地早期为阿尔衮琴族和易洛魁族印第安人的居住地。1788年4月28日承认联邦宪法，并加入联邦，为第7州。俄亥俄州位于美国中东部，是五大湖地区的组成部分，别称七叶树州。位于俄亥俄河与伊利湖之间 ，因俄亥俄河得名。特拉华州最早为印第安人居住地，是最早加入美国联邦的州，所以又有“第一州”）的称呼。华盛顿哥伦比亚特区（Washington D.C.），简称华盛顿，又称华都、华府，美国首都，得名于美国首任总统乔治•华盛顿，靠近弗吉尼亚州和马里兰州，位于美国的东北部、中大西洋地区，是1790年作为首都而设置，由美国国会直接管辖的特别行政区划，因此不属于美国的任何一州。</p>
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
import commonStar from 'common/star/star'
export default {
  name: 'citySearch',
  data () {
    return {
      schoolData: [],
      keywordval: '',
      num: 0
    }
  },
  components: {
    commonStar
  },
  methods: {
    getList () {
      axios.get('http://api.beanhome.com/schools?district=248')
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
    display: flex
    align-items: center
    ul
      width: 100%
      overflow: auto
      display: flex
      align-items: center
      padding: 0.2rem 0.14rem
      box-sizing: border-box
      flex: 1
      li
        padding: 0.1rem
        white-space:nowrap
        background-color: #fff
        border-radius: 0.2rem
        margin-right: 0.2rem
      .active
        background-color: $maincolor
        color: #fff
    .choose_area
      padding: 0 0.2rem
  .starbox
    display: flex
    width: 100%
    padding: 0.24rem
    flex-wrap: wrap
    background-color: #fff
    box-sizing: border-box
    padding-bottom: 0
    justify-content: space-between
    .star_item
      width: 49%
      display: flex
      align-items: center
      justify-content: space-between
      box-sizing: border-box
      margin-bottom: 0.24rem
      span
        color: #666
  .total_box
    background-color: #fff
    display: flex
    justify-content: center
    align-items: center
    padding: 0.24rem
    border-top: 1px solid #ccc
    border-bottom: 1px solid #ccc
    .total_item
      flex: 1
      display: flex
      align-items: center
      justify-content: center
      &:nth-child(1)
        border-right: 1px solid #ccc
      span
       color: #999
       margin-right: 0.12rem
  .desc
    padding: 0.24rem
    background-color: #fff
    color: #999
    margin-bottom: 0.2rem
    font-size: 0.26rem
    line-height: 0.4rem
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
          padding-bottom: 0.1rem
        .foottxt
          display: flex
          justify-content: space-between
          align-items: center
          margin-top: 0.1rem
          p
            padding-bottom: 0
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
