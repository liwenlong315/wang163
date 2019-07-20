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
        ><i class="iconfont icon-xiajiantou"></i></a>
      </div>
    </header>
    <content class="homeContent">
      <div class="conSwiper">
        <swiper
          :options="swiperOption"
          ref="mySwiper"
          @someSwiperEvent="callback"
        >
          <!-- slides -->
          <swiper-slide><img src="./images/swiper001.jpg"></swiper-slide>
          <swiper-slide><img src="./images/swiper002.png"></swiper-slide>
          <swiper-slide><img src="./images/swiper003.jpg"></swiper-slide>
          <swiper-slide><img src="./images/swiper004.jpg"></swiper-slide>
          <swiper-slide><img src="./images/swiper005.jpg"></swiper-slide>
          <swiper-slide><img src="./images/swiper006.jpg"></swiper-slide>
          <swiper-slide><img src="./images/swiper007.jpg"></swiper-slide>
          <div
            class="swiper-pagination"
            slot="pagination"
          ></div>
        </swiper>
      </div>
      <div class='conMiddle'>
        <span class="conMiddle-s">
          <a href="#">
            <img src="./images/icon-yi.png">
          </a>
          <span>网易自营品牌</span>
        </span>
        <span class="conMiddle-s">
          <a href="#">
            <img src="./images/icon-du.png">
          </a>
          <span>30天无忧退货</span>
        </span>
        <span class="conMiddle-s">
          <a href="#">
            <img src="./images/icon-qian.png">
          </a>
          <span>48小时快速退款</span>
        </span>
      </div>
      <div class="conListwarp">
        <ul class="conList">
          <li class="conli"><img src="./images/list-001.png">
            <span>新品首发</span>
          </li>
          <li class='conli'><img src="./images/list-002.png">
            <span>新品首发</span>
          </li>
          <li class='conli'><img src="./images/list-003.png">
            <span>新品首发</span>
          </li>
          <li class='conli'><img src="./images/list-004.png">
            <span>新品首发</span>
          </li>
          <li class='conli'><img src="./images/list-005.png">
            <span>新品首发</span>
          </li>
          <li class='conli'><img src="./images/list-001.png">
            <span>新品首发</span>
          </li>
          <li class='conli'><img src="./images/list-002.png">
            <span>新品首发</span>
          </li>
          <li class='conli'><img src="./images/list-005.png">
            <span>新品首发</span>
          </li>
          <li class='conli'><img src="./images/list-001.png">
            <span>新品首发</span>
          </li>
          <li class='conli'><img src="./images/list-006.gif">
            <span>新品首发</span>
          </li>
        </ul>
      </div>
      <div class="connewmanModule">
        <span class="txt">
          <p>新人专享礼</p>
        </span>
        <div class="moduleButtom"></div>
      </div>
    </content>

  </div>
</template>

<script type="text/ecmascript-6">
import 'swiper/dist/css/swiper.css'
import { swiper, swiperSlide } from 'vue-awesome-swiper'
export default {
  name: 'home',
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
      ],
      swiperOption: {
        loop: true,
        pagination: {
          el: '.swiper-pagination'
        }
      },
      swiperSlides: [1, 2, 3, 4, 5, 6, 7]
    }
  },
  components: { swiper, swiperSlide },
  props: {},
  //监控data中的数据变化
  watch: {},
  //监听属性 类似于data概念
  computed: {
    swiper() {
      return this.$refs.mySwiper.swiper
    }
  },
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
    position fixed
    top 0px
    z-index 99
    height 148px
    width 100%
    background #fff
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
      display flex
      justify-content space-between
      font-size 28px
      width 100%
      height 60px
      .hBimg
        width 100px
        height 60px
        display inline-block
        text-align center
        line-height 60px
        .iconfont
          font-size 40px
          font-weight 700
      .cube-scroll-nav-bar_horizontal
        padding-left 30px
        height 56px
        width 592px
        .cube-scroll-wrapper
          width 1400px
          .cube-scroll-content
            .cube-scroll-list-wrapper
              .cube-scroll-nav-bar-items
                .cube-scroll-nav-bar-item
                  height 56px
                  margin-left 20px
                  text-align center
                  vertical-align middle
                  box-sizing border-box
                  padding 0 15px
                  &:nth-child(1)
                    margin-left 0
                  span
                    line-height 56px
                    font-size 28px
                    font-family PingFangSC-Light, helvetica, 'Heiti SC'
                    color #333
                .cube-scroll-nav-bar-item_active
                  border-bottom 4px solid #b4282d
                  span
                    color #b4282d
  .homeContent
    position absolute
    top 148px
    height 10000px
    .conSwiper
      width 750px
      height 370px
      .swiper-container
        .swiper-wrapper
          .swiper-slide
            img
              width 750px
              height 370px
        .swiper-pagination
          .swiper-pagination-bullet
            width 40px
            height 4px
            background rgba(255, 255, 255, 0.5)
          .swiper-pagination-bullet-active
            background #fff
    .conMiddle
      height 72px
      display flex
      align-items center
      justify-content space-between
      padding 0 30px 0 30px
      background #fff
      .conMiddle-s
        text-align center
        line-height 72px
        img
          vertical-align middle
          width 32px
          height 32px
        span
          margin-left 8px
          font-size 24px
          vertical-align middle
    .conListwarp
      width 100%
      border-bottom 20px solid #eeeeee
      .conList
        display flex
        align-items center
        justify-content center
        flex-wrap wrap
        padding-bottom 30px
        .conli
          display flex
          flex-direction column
          width 20%
          align-items center
          margin-top 20px
          margin-bottom 20px
          img
            width 110px
            height 110px
          span
            width 110px
            height 36px
            line-height 36px
            margin-top 10px
            font-size 24px
    .connewmanModule
      width 100%
      height 556px
      .txt
        height 75px
        width 100%
        line-height 75px
        text-align center
        font-size 32px
        position relative
        p::before
          content ''
          width 24px
          height 3px
          background #333
          color #333
          position absolute
          top 36px
          left 258px
        p::after
          content ''
          width 24px
          height 3px
          background #333
          color #333
          position absolute
          top 36px
          right -488px
</style>

