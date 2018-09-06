<template>
  <div class="homeBox">
    <home-banner></home-banner>
    <home-menu></home-menu>
    <home-hothouse :hotlist="hotData"></home-hothouse>
    <home-recommend :recommendlist="recommendData"></home-recommend>
    <home-information :infolist="infoData"></home-information>
    <home-promise></home-promise>
  </div>
</template>

<script>
import axios from 'axios'
import HomeBanner from './components/Banner'
import HomeMenu from './components/Menu'
import HomeHothouse from './components/Hothouse'
import HomeRecommend from './components/Recommend'
import HomeInformation from './components/Information'
import HomePromise from './components/Promise'
export default {
  name: 'Home',
  data () {
    return {
      hotData: [],
      recommendData: [],
      infoData: []
    }
  },
  components: {
    HomeBanner,
    HomeMenu,
    HomeHothouse,
    HomeRecommend,
    HomeInformation,
    HomePromise
  },
  methods: {
    getIndexData () {
      axios.get('/api/index.json')
        .then(this.getIndexDataSucc)
    },
    getIndexDataSucc (res) {
      res = res.data
      if (res.ret && res.data) {
        const datas = res.data
        this.hotData = datas.hotlist
        this.recommendData = datas.recommendlist
        this.infoData = datas.informationlist
      }
    }
  },
  mounted () {
    this.getIndexData()
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus" scoped>
</style>
