<template>
  <div class="staybox">
    <stay-top :datalist="stayFlist"></stay-top>
    <stay-menu :datalist="stayFlist"></stay-menu>
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
      stayid: ''
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
      console.log(res)
      this.stayFlist = res.data.data
    }
  },
  mounted () {
    this.stayid = this.stayId
    this.getStayfun()
  },
  activated () {
    if (this.stayid !== this.stayId) {
      this.stayid = this.stayId
      this.getStayfun()
    }
  }
}
</script>

<style lang="stylus" scoped>

</style>
