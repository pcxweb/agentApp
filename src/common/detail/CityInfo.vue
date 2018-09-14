<template>
  <div class="city_info">
    <div class="brief item">
      <h2>城市 {{datalist.cn_name}} {{datalist.en_name}}</h2>
      <p :class="['article', {presMes: birefshow}]">{{datalist.introduction}}</p>
      <div v-show="birefshow" class="showmore" @click="showmorefuns()">展开</div>
    </div>
    <div class="item info">
      <ul class="info-ul">
        <li>
          <span>所属地区</span>
          <p>{{datalist.cn_name}}</p>
        </li>
        <li>
          <span>国内直航</span>
          <p>{{directF}}</p>
        </li>
        <li>
          <span>旅游景点</span>
          <p>{{datalist.scenic_spots}}</p>
        </li>
        <li>
          <span>当地气候</span>
          <p>{{datalist.local_climate}}</p>
        </li>
        <li>
          <span>名牌大学</span>
          <p>{{datalist.university}}</p>
        </li>
        <li>
          <span>就业机会</span>
          <p>{{datalist.job_opportunity}}</p>
        </li>
      </ul>
    </div>
    <div class="item nearby">
      <h2>附近的中学</h2>
      <div class="nearby-wrapper">
        <div class="nearby-item" v-for="item of cityData" :key="item.id">
          <div class="p-img"><img :src="item.thumbnail" alt=""></div>
          <div class="nearby-con">
            <h3>{{item.en_name}}</h3>
            <p>{{item.subtitle | division(0)}}</p>
            <p>{{item.subtitle | division(1)}}</p>
            <span>$ {{item.price}}/年</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import { mapState } from 'vuex'
export default {
  name: 'CityInfo',
  data () {
    return {
      birefshow: true,
      cityData: []
    }
  },
  props: {
    datalist: Object
  },
  methods: {
    getCityDetail () {
      axios.get('http://api.beanhome.com/schools/119/citys/250/recommend')
        .then(this.getCityDetailSucc)
    },
    getCityDetailSucc (res) {
      const datas = res.data
      if (res.status === 200 && datas.data) {
        console.log(datas.data)
        this.cityData = datas.data
      }
    },
    showmorefuns (res) {
      this.birefshow = false
    }
  },
  computed: {
    directF () {
      if (this.datalist.direct_flight === 0) {
        return '无'
      } else {
        return '有'
      }
    },
    ...mapState(['cityId', 'schoolId'])
  },
  filters: {
    division (value, num) {
      let arr = value.split(' ')
      return arr[num]
    }
  },
  mounted () {
    this.getCityDetail()
  }
}
</script>

<style lang="stylus" scoped>
@import '~styles/commonsty.styl'
@import '~styles/samecolor.styl'
.presMes
  max-height: 1.2rem
  overflow: hidden
.city_info
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
    .showmore
      width: 100%
      height: .5rem
      line-height: .5rem
      position: absolute
      left: 0
      color: $maincolor
      font-size: .28rem
      text-align: center
      box-shadow: -0.05rem -0.15rem 0.2rem #fff
      bottom: 0rem
      background-color: #fff
  .info
    .info-ul
      li
        display: flex
        justify-content: space-between
        margin-bottom: 0.2rem
        font-size: 0.24rem
        line-height: 0.4rem
        span
          display: inline-block
          color: #999
          width: 1.5rem
          flex-shrink: 0
        p
          flex: 1
          color: #333
  .nearby
    overflow: hidden
    .nearby-wrapper
      width: 100%
      overflow: auto
      white-space: nowrap;
      .nearby-item
        display: inline-block
        width: 2.66rem
        height: 1.74rem
        position: relative
        padding-right: 0.12rem
        .p-img
          overflow: hidden
          width: 100%
          height: 100%
          box-sizing: border-box
          border-radius: 0.2rem
          img
            width: 100%
            height: 100%
        .nearby-con
          width: 100%
          h3
            color: #000
            font-size: 0.3rem
            font-weight: bold
            margin: 0.08rem 0
            ellipsis()
          p
            ellipsis()
            margin-top: 0.04rem
            font-size: 0.24rem
            color: #666
          span
            display: inline-block
            font-size: 0.24rem
            color: $maincolor
            margin-top: 0.1rem
</style>
