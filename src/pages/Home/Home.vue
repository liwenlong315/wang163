<!-- -->
<template>
  <div id="home">
    <header class="homeHeader">
      <div class="headerTop">
        <a
          href="#"
          class="headerLogo"
        > </a>
        <div class="headerInp">
          <i class="iconfont icon-sousuo"></i>
          <input
            type="text"
            placeholder="请输入"
          >
        </div>
        <button class="headerBtn">登录</button>
      </div>
      <div class="headerBottom">
        <cube-scroll-nav-bar
          :current="current"
          :labels="labels"
          @change="changeHandler"
        />
        <a
          href=""
          class="hBimg"
        ><img src="./images/jt.png"></a>
      </div>
    </header>
    <content class="homeContent"></content>

  </div>
</template>

<script type="text/ecmascript-6">

export default {
  name: 'headerBottom',
  data() {
    return {
      current: '推荐',
      labels: [
        '推荐',
        '居家生活',
        '服饰鞋包',
        '美食酒水',
        '个护清洁',
        '母婴亲子',
        '运动旅游',
        '数码家电',
        '全球特色'
      ]
    }
  },
  components: {},
  props: {},
  //监控data中的数据变化
  watch: {},
  //监听属性 类似于data概念
  computed: {},
  //方法集合
  methods: {
    changeHandler(cur) {
      this.current = cur
    }
  },
  //生命周期 - 创建完成（可以访问当前this实例）
  created() { },
  //生命周期 - 挂载完成（可以访问DOM元素）
  mounted() { }
}
</script>
<style lang="stylus" rel="stylesheet/stylus">
#home
  width 100%
  height 100%
  .homeHeader
    height 148px
    width 100%
    .headerTop
      height 88px
      display flex
      align-items center
      justify-content center
      .headerLogo
        width 138px
        height 40px
        margin-right 20px
        background-image url('./images/logo.png')
        background-size 138px 40px
      .headerInp
        width 442px
        height 56px
        position relative
        .iconfont
          position absolute
          top 18px
          left 10px
        input
          box-sizing border-box
          width 442px
          height 56px
          background-color #ededed
          border-radius 8px
          font-size 14px
          padding-left 40px
          outline none
      .headerBtn
        height 40px
        width 74px
        text-align center
        line-height 40px
        color #b4282d
        font-size 24px
        margin 0
        padding 0
        margin-left 15px
        border 2px solid #b4282d
        border-radius 8px
        outline none
        background transparent
    .headerBottom
      font-size 28px
      width 100%
      height 60px
      .cube-scroll-nav-bar_horizontal
        height 56px
        width 592px
        .cube-scroll-wrapper
          height 56px
  .homeContent
    height 1000px
</style>

