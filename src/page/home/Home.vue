<template>
  <div class="homeBox">
    <home-banner></home-banner>
    <home-menu></home-menu>
  </div>
</template>

<script>
import HomeBanner from './components/Banner'
import HomeMenu from './components/Menu'
export default {
  name: 'Home',
  components: {
    HomeBanner,
    HomeMenu
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus" scoped>
</style>
