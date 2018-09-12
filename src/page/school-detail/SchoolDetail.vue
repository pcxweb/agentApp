<template>
  <div class="school-detail">
    <sdetail-top :datalist="detailList"></sdetail-top>
    <sdetail-menu :datalist="detailList"></sdetail-menu>
    <div class="footspace">更新于2018-09-12</div>
    <com-footer></com-footer>
  </div>
</template>

<script>
import axios from 'axios'
import { mapState } from 'vuex'
import SdetailTop from './components/SdetailTop'
import SdetailMenu from './components/SdetailMenu'
import ComFooter from 'common/footer/Footer'
export default {
  name: 'SchoolDetail',
  components: {
    SdetailTop,
    SdetailMenu,
    ComFooter
  },
  data () {
    return {
      detailList: {},
      idval: ''
    }
  },
  computed: {
    ...mapState(['schoolId'])
  },
  methods: {
    getschoolDetail () {
      axios.get('http://api.beanhome.com/schools/' + this.$route.params.id)
        .then(this.getschoolDetailSucc)
    },
    getschoolDetailSucc (res) {
      const datas = res.data
      if (res.status === 200 && datas.data) {
        this.detailList = datas.data
      }
    }
  },
  mounted () {
    this.idval = this.schoolId
    this.getschoolDetail()
  },
  activated () {
    if (this.idval !== this.schoolId) {
      this.idval = this.schoolId
      this.getschoolDetail()
    }
  }
}
</script>

<style lang="stylus" scoped>
.footspace
  height: 1.02rem
  line-height: 1.02rem
  background: #f2f2f2
  color: #c3c3c3
  font-size: .24rem
  text-align: center
</style>
