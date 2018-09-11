<template>
  <div class="school-detail">
    <sdetail-top :datalist="detailList"></sdetail-top>
    <sdetail-menu :datalist="detailList"></sdetail-menu>
  </div>
</template>

<script>
import axios from 'axios'
import { mapState } from 'vuex'
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
</style>
