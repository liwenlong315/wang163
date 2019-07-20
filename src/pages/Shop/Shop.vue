<template>
  <div id="shop">
    <header class="shopHeader">
      <div class='shopCar'>购物车</div>
      <div class="shopRoll">领劵</div>
    </header>
    <content class="shopContent">
      <div class="conTop">
        <ul class="conTlist">
          <li class="conTitem">
            <i class="itemIcon"></i>
            <span class="itemTxet">30天无忧退款</span>
          </li>
          <li class="conTitem">
            <i class="itemIcon"></i>
            <span class="itemTxet">48小时快速退款</span>
          </li>
          <li class="conTitem">
            <i class="itemIcon"></i>
            <span class="itemTxet">满88元免邮费</span>
          </li>
        </ul>

      </div>
      <div class="conBottom">
        <i><img
            class="conImg"
            src="./images/d-gouwu.png"
          ></i>
        <span class="conTxt">去添加点什么吧</span>
        <button class="conBtn">登录</button>
      </div>
    </content>
  </div>
</template>

<script type="text/ecmascript-6">

</script>
<style lang="stylus" rel="stylesheet/stylus" scoped>
#shop
  width 100%
  height 100%
  .shopHeader
    height 88px
    background #fff
    padding 0 30px
    .shopCar
      text-align center
      line-height 88px
      height 88px
      width 108px
      font-size 36px
      float left
    .shopRoll
      text-align center
      color #B4282D
      font-size 33px
      line-height 88px
      height 88px
      width 88px
      float right
  .shopContent
    width 100%
    background #f4f4f4
    .conTop
      height 70px
      width 750px
      background #eee
      .conTlist
        display flex
        align-items center
        justify-content space-between
        padding 0 30px
        height 70px
        .conTitem
          display flex
          align-items center
          justify-content center
          height 70px
          .itemIcon
            display inline-block
            width 10px
            height 10px
            background-image url('./images/xyd.png')
            background-size 10px 10px
            background-repeat no-repeat
            margin-right 7px
            margin-top -1px
          .itemTxet
            line-height 70px
            height 70px
            font-size 24px
  .conBottom
    background #f4f4f4
    height 1176px
    display flex
    align-items center
    flex-direction column
    justify-content center
    .conImg
      display inline-block
      width 248px
      height 248px
    .conTxt
      font-size 28px
      color #999
      margin-bottom 50px
    .conBtn
      width 480px
      height 92px
      font-size 30px
      line-height 92px
      color #fff
      background-color #b4282d
      border-radius 2px
      margin 0
      padding 0
      border 1px solid transparent
      outline none
</style>