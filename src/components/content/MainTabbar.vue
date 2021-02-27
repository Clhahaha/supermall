<template>
  <div id="app">
    <Tabbar>
      <tabbar-item url="/home">
        <img slot="item-icon" src="~assets/img/tabbarImg/icon01.png" alt="">
        <img slot="item-icon-active" src="~assets/img/tabbarImg/icon01_active.png" alt="">
        <div slot="item-text">首页</div>
      </tabbar-item>
      <tabbar-item url="/fenlei">
        <img slot="item-icon" src="~assets/img/tabbarImg/icon02.png" alt="">
        <img slot="item-icon-active" src="~assets/img/tabbarImg/icon02_active.png" alt="">
        <div slot="item-text">分类</div>
      </tabbar-item>
      <tabbar-item url="gouwuche">
        <img slot="item-icon" src="~assets/img/tabbarImg/icon03.png" alt="">
        <img slot="item-icon-active" src="~assets/img/tabbarImg/icon03_active.png" alt="">
        <div slot="item-text">购物车</div>
      </tabbar-item>
      <tabbar-item url="wod">
        <img slot="item-icon" src="~assets/img/tabbarImg/icon04.png" alt="">
        <img slot="item-icon-active" src="~assets/img/tabbarImg/icon04_active.png" alt="">
        <div slot="item-text">我的</div>
      </tabbar-item>
    </Tabbar>
  </div>
</template>

<script>
import Tabbar from '../common/tabbar/Tabbar'
import TabbarItem from '../common/tabbar/TabbarItem'

export default {
  name: 'App',
  components:{
    Tabbar,
    TabbarItem
  }
}

</script>

<style>

</style>
