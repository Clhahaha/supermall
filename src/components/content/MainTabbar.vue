<template>
  <div id="app">
    <Tabbar>
      <tabbar-item url="/home">
        <img slot="item-icon" src="~assets/img/tabbarImg/home.png" alt="">
        <img slot="item-icon-active" src="~assets/img/tabbarImg/home1.png" alt="">
        <div slot="item-text">首页</div>
      </tabbar-item>
      <tabbar-item url="/fenlei">
        <img slot="item-icon" src="~assets/img/tabbarImg/fenlei.png" alt="">
        <img slot="item-icon-active" src="~assets/img/tabbarImg/fenlei1.png" alt="">
        <div slot="item-text">分类</div>
      </tabbar-item>
      <tabbar-item url="gouwuche">
        <img slot="item-icon" src="~assets/img/tabbarImg/gouwuche.png" alt="">
        <img slot="item-icon-active" src="~assets/img/tabbarImg/gouwuche1.png" alt="">
        <div slot="item-text">购物车</div>
      </tabbar-item>
      <tabbar-item url="wod">
        <img slot="item-icon" src="~assets/img/tabbarImg/wod.png" alt="">
        <img slot="item-icon-active" src="~assets/img/tabbarImg/wod1.png" alt="">
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
