<template>
  <div class="staybox">
    <stay-top :datalist="stayFlist"></stay-top>
    <stay-menu :datalist="stayFlist"></stay-menu>
  </div>
</template>

<script>
import axios from 'axios'
import StayTop from './components/StayTop'
import StayMenu from './components/StayMenu'
export default {
  name: 'StayDetail',
  data () {
    return {
      stayFlist: {}
    }
  },
  components: {
    StayTop,
    StayMenu
  },
  methods: {
    getStayfun () {
      axios.get('http://api.beanhome.com/homestays/1')
        .then(this.getStaysucc)
    },
    getStaysucc (res) {
      console.log(res)
      this.stayFlist = res.data.data
    }
  },
  mounted () {
    this.getStayfun()
  }
}
</script>

<style lang="stylus" scoped>

</style>
