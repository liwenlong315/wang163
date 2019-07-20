<template>
  <div slot="content">
    <div class="left-panel">
      <cube-scroll ref="scroll">
        <cube-tab-bar
          v-model="selectedLabel"
          :data="tabs"
          @change="changeHandler"
        ></cube-tab-bar>
      </cube-scroll>
    </div>
    <div class="right-panel">
      <cube-scroll ref="scroll">
        <img
          class="rigtImg"
          src="./images/swiper002.png"
        >
        <ul>
          <li
            v-for="(hero, index) in scrollData"
            :key="index"
          >
            <img :src="hero.avatar">
            <span>{{hero.name}}</span>
          </li>
        </ul>
      </cube-scroll>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
import * as DATAS from './data/tab-bar'
const DATA_MAP = {
  '推荐专区': DATAS.ALL_HEROES,
  '夏凉专区': DATAS.MELEE_HEROES,
  '爆品专区': DATAS.REMOTE_HEROES,
  '新品专区': DATAS.SUPPORT_HEROES,
  '居家生活': DATAS.MAGIC_HEROES,
  '服饰鞋包': DATAS.JUNGLE_HEROES,
  '美食酒水': DATAS.TANK_HEROES,
  '个护清洁': DATAS.INVISIBLE_HEROES,
  '母婴亲子': DATAS.CARRY_HEROES,
  '运动旅行': DATAS.BLINK_HEROES,
  '数码家电': DATAS.HIGH_DAMAGE_HEROES,
  '全球特色': DATAS.INVOKE_HEROES
}
const genTabLabels = Object.keys(DATA_MAP).map(label => ({
  label
}))
export default {
  data() {
    return {
      selectedLabel: '推荐专区',
      scrollData: [],
      tabs: genTabLabels
    }
  },
  created() {
    this.scrollData = DATA_MAP[this.selectedLabel]
  },
  methods: {
    changeHandler(label) {
      this.scrollData = DATA_MAP[label]
      this.$nextTick(() => {
        // reset better-scroll'postion
        this.$refs.scroll.scrollTo(0, 0)
        // you need to caculate scroll-content height when your dom has changed in nextTick
        this.$refs.scroll.refresh()
      })
    }
  },
  components: {

  },
  watch: {

  }
}
</script>
<style lang="stylus" rel="stylesheet/stylus">
.left-panel
  position absolute
  top 10px
  left 0
  bottom 0
  width 162px
  background-color #fff
  padding-bottom 196px
  .cube-scroll-list-wrapper
    .cube-tab-bar
      flex-wrap wrap
      height 1074px
      margin-bottom 60px
      .cube-tab
        width 100%
        flex-basis unset
        height 40px
        line-height 40px
        font-size 28px
        color #333
        transition all 0.3s ease-in
        border-left 6px solid transparent
        margin-top 30px
        &.cube-tab_active
          color #ab2b2b
          font-size 28px
          border-left 6px solid #ab2b2b
.right-panel
  position absolute
  top 30px
  left 162px
  right 0
  bottom 0
  background-color #fff
  padding 0 30px 198px
  .rigtImg
    width 528px
    height 192px
    margin-bottom 30px
  ul
    width 528px
    display flex
    align-items center
    flex-wrap wrap
    justify-content flex-start
    li
      width 33%
      display flex
      align-items center
      flex-direction column
      background-color #fff
      img
        width 114px
        height 114px
      span
        text-align center
        height 72px
        width 144px
        font-size 24px
        color #333
</style>