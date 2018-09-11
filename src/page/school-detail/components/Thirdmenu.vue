<template>
  <div class="third-menu">
    <div class="brief item">
      <h2>城市 {{datalist.cn_name}} {{datalist.en_name}}</h2>
      <p class="article">{{datalist.introduction}}</p>
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
    <div class="item photo">
      <h2>附近的中学</h2>
      <!-- <div class="photo-wrapper">
        <div class="photo-item" v-for="item of photos" :key="item.id">
          <div class="p-img"><img :src="item.path+'?x-oss-process=image/resize,m_fill,w_335,h_200'" alt=""></div>
          <p class="p-title">{{item.title}}</p>
        </div>
      </div> -->
    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'ThirdMenu',
  data () {
    return {
      datalist: {}
    }
  },
  methods: {
    getschoolDetail () {
      axios.get('http://api.beanhome.com/citys/250?type=city')
        .then(this.getschoolDetailSucc)
    },
    getschoolDetailSucc (res) {
      const datas = res.data
      console.log(res)
      if (res.status === 200 && datas) {
        this.datalist = datas
      }
    }
  },
  computed: {
    directF () {
      if ( this.datalist.direct_flight === 0){
        return '无'
      } else {
        return '有'
      }
    }
  },
  mounted () {
    this.getschoolDetail()
  }
}
</script>

<style lang="stylus" scoped>
.third-menu
  .item
    background-color: #fff;
    margin-bottom: 0.24rem
    padding:0.2rem 0.24rem
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
  .info
    .info-ul
      li
        display: flex
        justify-content: space-between
        margin-bottom: 0.2rem
        span
          display: inline-block
          color: #999
          width: 1.5rem
          flex-shrink: 0
        p
          flex: 1
</style>
