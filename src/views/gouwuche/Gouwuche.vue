<template>
  <div class="cart">
    <!-- 导航栏 -->
    <nav-bar class="navbar">
      <h3 slot="center">购物车({{cartLength}})</h3>
    </nav-bar>
    <!-- 商品列表 -->
    <cart-list></cart-list>
    <!-- 底部汇总 -->
    <cart-bottom-bar></cart-bottom-bar>
  </div>
</template>

<script> 
import NavBar from 'components/common/navbar/NavBar'
import cartList from './childComps/cartList'
import CartBottomBar from './childComps/CartBottomBar'
import Scroll from 'components/common/scroll/Scroll'

import {mapGetters} from 'vuex'//1.引用

export default {
  name:'gouwuche',
  components:{
    NavBar,
    cartList,
    CartBottomBar,
    Scroll
  },

  computed:{
    //一种写法
    ...mapGetters(['cartLength','cartList']),//2.这个方法用于解析getters(store里的计算属性)里面的方法，直接拿来用

    //二种写法
    // ...mapGetters({
    //   length:'cartLength',   //到时候用的时候直接拿length或者list
    //   list:'cartList'
    // })
  }
}
</script>

<style>
  .navbar{
    background-color: #ff5777;
    color: white;
  }
</style>