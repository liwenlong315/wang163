<!-- -->
<template>
  <div id="oneself">
    <header class="oneselfHeader">
      <a class="iconfont icon-icon_home"></a>
      <a class="logo"></a>
      <div class="iconRight">
        <a class="iconfont icon-sousuo"></a>
        <a class="iconfont icon-gouwuche"></a>
      </div>
    </header>
    <content class="oneselCont">
      <div class="contLogo"><img
          src="./images/logo.png"
          alt="logo"
        ></div>
      <div class="contBtn">
        <div class="conPhone">
          <i class="iconfont icon-shouji"></i>
          <span>手机号码登录</span>
        </div>
        <div class="conEmile">
          <i class="iconfont icon-youjian"></i>
          <span>邮箱账号登录</span>
        </div>
        <div class="conQuit">
          <span>手机号快捷注册</span>
          <i class="iconfont icon-youjiantou"></i>
        </div>
      </div>
      <div class="contBottom">
        <span class="wx">
          <i class="iconfont icon-weixin"></i>
          <span>微信</span>
        </span>
        <span class="qq">
          <i class="iconfont icon-qq"></i>
          <span>QQ</span>
        </span>
        <span class="wb">
          <i class="iconfont icon-weibo"></i>
          <span>微博</span>
        </span>
      </div>
    </content>
  </div>
</template>

<script type="text/ecmascript-6">
export default {

}
</script>
<style lang="stylus" rel="stylesheet/stylus">
#oneself
  .oneselfHeader
    height 88px
    display flex
    align-items center
    justify-content space-between
    padding 0px 14px 0px 24px
    border-bottom 2PX solid #eee
    .icon-icon_home
      font-size 44px
    .logo
      background-image url('../Home/images/logo.png')
      background-size 172px 54px
      width 172px
      height 54px
      background-repeat no-repeat
      vertical-align middle
      margin 0 auto
    .iconRight
      font-size 60px
      margin-left -96px
      .icon-sousuo
        font-size 60px
        margin-right 20px
      .icon-gouwuche
        font-size 60px
        margin-right 20px
  .oneselCont
    width 750px
    height 1246px
    background #F2F5F4
    .contLogo
      background #F2F5F4
      padding 160px 0
      text-align center
      img
        width 268px
        height 90px
    .contBtn
      background #F2F5F4
      .conPhone
        width 335px * 2
        height 46px * 2
        background #b4282d
        margin 0 auto 32px
        text-align center
        line-height 46px * 2
        .icon-shouji
          margin-right 14px
          font-size 40px
          color #fff
        span
          font-size 40px
          color #fff
      .conEmile
        width 333px * 2
        height 44px * 2
        margin 0 auto 32px
        border 2px solid #b4282d
        text-align center
        line-height 46px * 2
        .icon-youjian
          margin-right 14px
          font-size 40px
          color #b4282d
        span
          font-size 40px
          color #b4282d
      .conQuit
        font-size 26px
        color #333
        text-align center
        span
          font-size 26px
          color #333
    .contBottom
      padding-bottom 100px
      box-sizing border-box
      height 544px
      width 100%
      background #F2F5F4
      display flex
      align-items flex-end
      justify-content center
      .wx
        width 182px
        height 40px
        text-align center
        line-height 40px
        .icon-weixin
          font-size 38px
          color #7f7f7f
        span
          font-size 26px
          color #7f7f7f
      .qq
        width 182px
        height 40px
        text-align center
        line-height 40px
        border-left 2px solid #7f7f7f
        border-right 2px solid #7f7f7f
        .icon-qq
          font-size 40px
          color #7f7f7f
        span
          font-size 26px
          color #7f7f7f
      .wb
        width 182px
        height 40px
        text-align center
        line-height 40px
        .icon-weibo
          font-size 40px
          color #7f7f7f
        span
          font-size 26px
          color #7f7f7f
</style>