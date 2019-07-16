<template>
  <router-view/>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style lang="scss">
@import '~reset-css/sass/_reset';
@import '~@/scss/variables';

*, *::before, *::after {
  box-sizing: border-box;
}
html, body {
  color: $--color-base;
  font-size: $--size-base;
  font-family: PingFangSC-Light, 'Microsoft YaHei', '微软雅黑', arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
