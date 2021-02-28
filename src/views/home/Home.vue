<template>
  <div id="home">
    <nav-bar class="home-nav"><h3 slot="center">购物街</h3></nav-bar>
    <home-swiper :banners="banners"></home-swiper>
    <home-recommend-view :recommends="recommends"></home-recommend-view>
  </div>
</template>

<script>
import NavBar from 'components/common/navbar/NavBar.vue'//导入导航栏
import HomeSwiper from "./childComps/HomeSwiper"//导入轮播图
import HomeRecommendView from "./childComps/HomeRecommendView"//导入推荐视图

import {getHomeMultidata} from "network/home" //导入网络模块


export default {
    name:'home',
    components:{
      NavBar,
      HomeSwiper,
      HomeRecommendView
    },
    data(){
      return{
        // result:null
        banners:[],
        recommends:[]
      }
    },
    created(){
      //请求多个数据
      getHomeMultidata().then(res=>{
        console.log(res)
        // this.result=res//将结果保存起来
        this.banners=res.data.banner.list
        this.recommends=res.data.recommend.list
      })
    }
}
</script>

<style>
  .home-nav{
    background-color: #ff5777;
    color: white;
  }
</style>