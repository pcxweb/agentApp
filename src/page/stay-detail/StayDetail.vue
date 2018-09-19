<template>
  <div class="staybox">
    <stay-top :datalist="stayFlist" :dataCitylist="cityInfo"></stay-top>
    <stay-menu :datalist="stayFlist" :citylist="cityInfo"></stay-menu>
    <com-footer></com-footer>
  </div>
</template>

<script>
import axios from 'axios'
import { mapState } from 'vuex'
import StayTop from './components/StayTop'
import StayMenu from './components/StayMenu'
import ComFooter from 'common/footer/Footer'
export default {
  name: 'StayDetail',
  data () {
    return {
      stayFlist: {},
      stayid: '',
      cityInfo: {},
      cityIds: ''
    }
  },
  components: {
    StayTop,
    StayMenu,
    ComFooter
  },
  computed: {
    ...mapState(['stayId', 'cityId'])
  },
  methods: {
    getStayfun () {
      axios.get('http://api.beanhome.com/homestays/' + this.$route.params.id)
        .then(this.getStaysucc)
    },
    getStaysucc (res) {
      // console.log(res)
      this.stayFlist = res.data.data
    },
    getCityfun () {
      axios.get('http://api.beanhome.com/citys/' + this.cityIds + '?type=city')
        .then(this.getCitysucc)
    },
    getCitysucc (res) {
      console.log(res.data)
      this.cityInfo = res.data
    }
  },
  mounted () {
    this.stayid = this.stayId
    this.cityIds = this.cityId
    this.getStayfun()
    this.getCityfun()
  },
  activated () {
    if (this.stayid !== this.stayId) {
      this.stayid = this.stayId
      this.getStayfun()
    }
    if (this.cityIds !== this.cityId) {
      this.cityIds = this.cityId
      this.getCityfun()
    }
  }
}
</script>

<style lang="stylus" scoped>

</style>
