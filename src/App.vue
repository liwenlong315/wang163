<template>
  <div id='app'>
    <router-view />
    <FooterGuide />
  </div>
</template>

<script>
import FooterGuide from './components/FooterGuide/FooterGuide'

export default {
  name: 'app',
  components: {
    FooterGuide
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
#app
  width 100%
  position absolute
  top 0
  bottom 0
</style>
