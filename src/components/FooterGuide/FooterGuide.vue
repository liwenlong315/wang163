<template>
  <footer class="footer_guide">
    <nav class="m-tabBar">
      <a
        class="item"
        @click="goTo('/home')"
      >
        <i
          class="u-icon u-icon-shou"
          :class="{on: $route.path==='/home'}"
        ></i>
        <span
          class="txt"
          :class="{active: $route.path==='/home'}"
        >首页</span>
      </a>
      <a
        class="item"
        @click="goTo('/classify')"
      >
        <i
          class="u-icon u-icon-fen"
          :class="{on: $route.path==='/classify'}"
        ></i>
        <span
          class="txt"
          :class="{active: $route.path==='/classify'}"
        >分类</span>
      </a>
      <a
        class="item"
        @click="goTo('/things')"
      >
        <i
          class="u-icon u-icon-shi"
          :class="{on: $route.path==='/things'}"
        ></i>
        <span
          class="txt"
          :class="{active: $route.path==='/things'}"
        >识物</span>
      </a>
      <a
        class="item"
        @click="goTo('/shop')"
      >
        <i
          class="u-icon u-icon-gou"
          :class="{on: $route.path==='/shop'}"
        ></i>
        <span
          class="txt"
          :class="{active: $route.path==='/shop'}"
        >购物车</span>
      </a>
      <a
        class="item"
        @click="goTo('/oneself')"
      >
        <i
          class="u-icon u-icon-ge"
          :class="{on: $route.path==='/oneself'}"
        ></i>
        <span
          class="txt"
          :class="{active: $route.path==='/oneself'}"
        >个人</span>
      </a>
    </nav>
  </footer>
</template>

<script type="text/ecmascript-6">
export default {
  name: 'FooterGuide',
  data() {
    return {
      message: 'Home'
    }
  },
  methods: {
    goTo(path) {
      this.$router.replace(path)
    }
  },
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
.footer_guide
  z-index 99
  width 100%
  height 98px
  background #ffffff
  border-top 1px solid #d9d9d9
  font-size 24px
  position fixed
  bottom 0
  .m-tabBar
    display flex
    align-items center
    justify-content space-around
    width 100%
    height 98px
    .item
      width 72px
      height 80px
      position relative
      text-align center
      vertical-align middle
      .u-icon
        display inline-block
        width 40px
        height 40px
        background-size 40px 506px
        background-image url('./images/tabBar.png')
      .u-icon-shou
        background-position 0 -254px
        &.on
          background-position 0 -203px
      .u-icon-fen
        background-position 0 -153px
        &.on
          background-position 0 -103px
      .u-icon-shi
        background-position 0 -360px
        &.on
          background-position 0 -310px
      .u-icon-gou
        background-position 0 -52px
        &.on
          background-position 0 -2px
      .u-icon-ge
        background-position 0 -464px
        &.on
          background-position 0 -414px
      .txt
        margin-top 9px
        display block
        color #666
        line-height 1
        &.active
          color #b4282d
</style>

