<template>
  <div class="school-detail">
    <sdetail-top :datalist="detailList"></sdetail-top>
    <sdetail-menu :datalist="detailList"></sdetail-menu>
  </div>
</template>

<script>
import axios from 'axios'
import SdetailTop from './components/SdetailTop'
import SdetailMenu from './components/SdetailMenu'
export default {
  name: 'SchoolDetail',
  components: {
    SdetailTop,
    SdetailMenu
  },
  data () {
    return {
      detailList: {}
    }
  },
  methods: {
    getschoolDetail () {
      axios.get('http://api.beanhome.com/schools/119')
        .then(this.getschoolDetailSucc)
    },
    getschoolDetailSucc (res) {
      const datas = res.data
      console.log(res)
      if (res.status === 200 && datas.data) {
        this.detailList = datas.data
      }
    }
  },
  mounted () {
    this.getschoolDetail()
  }
}
</script>

<style lang="stylus" scoped>
</style>
