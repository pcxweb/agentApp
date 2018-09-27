<template>
  <div id="service">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'Service'
}
</script>

<style lang="stylus" scoped>
  @import '~styles/samecolor.styl'
  #service
    background-color: $bgcolor
</style>
