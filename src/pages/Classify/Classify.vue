<template>
  <div id="classify">
    <header class="clHeader">
      <div class="headerSearch">
        <i class="iconfont icon-sousuo"></i>
        <span>搜索商品, 共21813款好物</span>
      </div>
    </header>
    <content class="clContent">
      <Con />
    </content>
  </div>
</template>

<script type="text/ecmascript-6">
import Con from './con.vue'
export default {
  name: 'classify',
  components: {
    Con
  }
}
</script>
<style lang="stylus" rel="stylesheet/stylus">
#classify
  .clHeader
    position fixed
    top 0
    left 0
    z-index 99
    width 100%
    height 88px
    border-bottom 2px solid #d9d9d9
    .headerSearch
      margin 16px auto
      width 690px
      height 56px
      background #EDEDED
      color #333
      text-align center
      vertical-align middle
      border-radius 8px
      .iconfont
        font-size 28px
      span
        font-size 28px
  .clContent
    position fixed
    top 88px
    left 0
    width 100%
    height 1334px
</style>