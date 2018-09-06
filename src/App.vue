<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style lang="stylus" scoped>
  @import '~styles/samecolor.styl'
  #app
    background-color: $bgcolor
</style>
