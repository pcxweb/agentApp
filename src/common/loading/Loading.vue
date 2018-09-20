<template>
  <div class="loading">
    <div class="spinner">
      <div class="spinner-container container1">
        <div class="circle1"></div>
        <div class="circle2"></div>
        <div class="circle3"></div>
        <div class="circle4"></div>
      </div>
      <div class="spinner-container container2">
        <div class="circle1"></div>
        <div class="circle2"></div>
        <div class="circle3"></div>
        <div class="circle4"></div>
      </div>
      <div class="spinner-container container3">
        <div class="circle1"></div>
        <div class="circle2"></div>
        <div class="circle3"></div>
        <div class="circle4"></div>
      </div>
    </div>
    <div class="mask"></div>
  </div>
</template>

<script>
export default {
  name: 'Loading'
}
</script>

<style lang="stylus" scoped>
@keyframes loadaction
  0%
    transform: scale(0.0)
    -webkit-transform: scale(0.0)
  40%
    transform: scale(1.0)
    -webkit-transform: scale(1.0)
  80%
    transform: scale(0.0)
    -webkit-transform: scale(0.0)
  100%
    transform: scale(0.0)
    -webkit-transform: scale(0.0)
.loading
  position: fixed
  z-index: 999
  left: 50%
  top: 10rem
  width: 1.2rem
  height: 1.2rem
.spinner
  width: 0.2rme
  height: 0.2rem
  position: absolute
  left: 0
  top: 0
  .spinner-container
    position: absolute
    width: 100%
    height: 100%
    div
      width: 0.08rem
      height: 0.08rem
      background-color: #333
      border-radius: 100%
      position: absolute
      animation: bouncedelay 1.2s infinite ease-in-out
      animation-fill-mode: both
      .circle1
        top: 0
        left: 0
      .circle2
        top: 0
        right: 0
      .circle3
        right: 0
        bottom: 0
      .circle4
        bottom: 0
        left: 0
  .container1
    .circle2
      animation-delay: -0.9s
    .circle3
      animation-delay: -0.6s
    .circle4
      animation-delay: -0.3s
  .container2
    transform: rotateZ(45deg)
    .circle1
      animation-delay: -1.1s
    .circle2
      animation-delay: -0.8s
    .circle3
      animation-delay: -0.5s
    .circle4
      animation-delay: -0.2s
  .container3
    transform: rotateZ(90deg)
    .circle1
      animation-delay: -1.0s
    .circle2
      animation-delay: -0.7s
    .circle3
      animation-delay: -0.4s
    .circle4
      animation-delay: -0.1s
</style>
