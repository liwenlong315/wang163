<!-- -->
<template>
  <div id="classify">
    <header class="clHeader">
      <div class="headerSearch">
        <i class="iconfont icon-sousuo"></i>
        <span>搜索商品, 共21813款好物</span>
      </div>
    </header>
    <content class="clContent">
      <cube-page
        type="scroll-tab-view"
        title="ScrollTab"
      >
        <div slot="content">
          <div class="left-panel">
            <cube-scroll>
              <cube-tab-bar
                v-model="selectedLabel"
                :data="tabs"
                @change="changeHandler"
              ></cube-tab-bar>
            </cube-scroll>
          </div>
          <div class="right-panel">
            <cube-scroll ref="scroll">
              <ul>
                <li v-for="(hero, index) in scrollData">
                  <img
                    :src="hero.avatar"
                    alt=""
                  >
                  <span>{{hero.name}}</span>
                </li>
              </ul>
            </cube-scroll>
          </div>
        </div>
      </cube-page>
    </content>
  </div>
</template>

<script type="text/ecmascript-6">
import CubePage from '../../components/cube-page.vue'
import * as DATAS from '../../data/tab-bar'
const DATA_MAP = {
  '全部': DATAS.ALL_HEROES,
  '近战': DATAS.MELEE_HEROES,
  '远程': DATAS.REMOTE_HEROES,
  '辅助': DATAS.SUPPORT_HEROES,
  '法师': DATAS.MAGIC_HEROES,
  '打野': DATAS.JUNGLE_HEROES,
  '坦克': DATAS.TANK_HEROES,
  '隐身': DATAS.INVISIBLE_HEROES,
  '后期': DATAS.CARRY_HEROES,
  '闪烁': DATAS.BLINK_HEROES,
  '爆发': DATAS.HIGH_DAMAGE_HEROES,
  '召唤': DATAS.INVOKE_HEROES,
  '眩晕': DATAS.DIZZY_HEROES,
  '治疗': DATAS.HEALER_HEROES
}
const genTabLabels = Object.keys(DATA_MAP).map(label => ({
  label
}))
export default {
  data() {
    return {
      selectedLabel: '全部',
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
    CubePage
  },
  watch: {
    selectedLabel(newV) {
      console.log(newV)
    }
  }
}
</script>
<style lang="stylus" rel="stylesheet/stylus">
@import './stylus.styls'
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
    position absolute
    top 88px
    left 0
    width 100%
</style>