<template>
  <div id="home">
    <nav-bar class="home-nav"><h3 slot="center">购物街</h3></nav-bar>
    <home-swiper :banners="banners"></home-swiper>
    <home-recommend-view :recommends="recommends"></home-recommend-view>
    <home-featrue></home-featrue>
    <tab-control class="tabcontrol" :titles="['流行','新款','精选']"></tab-control>
    <div>
      <ul>
        <li>列表</li>
        <li>列表</li>
        <li>列表</li>
        <li>列表</li>
        <li>列表</li>
        <li>列表</li>
        <li>列表</li>
        <li>列表</li>
        <li>列表</li>
        <li>列表</li>
        <li>列表</li>
        <li>列表</li>
        <li>列表</li>
        <li>列表</li>
        <li>列表</li>
        <li>列表</li>
        <li>列表</li>
        <li>列表</li>
        <li>列表</li>
        <li>列表</li>
        <li>列表</li>
        <li>列表</li>
        <li>列表</li>
        <li>列表</li>
        <li>列表</li>
        <li>列表</li>
        <li>列表</li>
        <li>列表</li>
        <li>列表</li>
        <li>列表</li>
        <li>列表</li>
        <li>列表</li>
        <li>列表</li>
        <li>列表</li>
        <li>列表</li>
        <li>列表</li>
        <li>列表</li>
        <li>列表</li>
        <li>列表</li>
        <li>列表</li>
        <li>列表</li>
        <li>列表</li>
        <li>列表</li>
        <li>列表</li>
        <li>列表</li>
        <li>列表</li>
        <li>列表</li>
        <li>列表</li>
        <li>列表</li>
        <li>列表</li>
        <li>列表</li>
        <li>列表</li>
        <li>列表</li>
        <li>列表</li>
        <li>列表</li>
        <li>列表</li>
        <li>列表</li>
        <li>列表</li>
        <li>列表</li>
        <li>列表</li>
      </ul>
    </div>
  </div>
</template>

<script>
import HomeSwiper from "./childComps/HomeSwiper"//导入轮播图
import HomeRecommendView from "./childComps/HomeRecommendView"//导入推荐视图
import HomeFeatrue from "./childComps/HomeFeature"//导入流行图

import NavBar from 'components/common/navbar/NavBar.vue'//导入导航栏
import TabControl from "components/content/TabControl"//导入功能栏

import {getHomeMultidata} from "network/home" //导入网络模块


export default {
    name:'home',
    components:{
      HomeSwiper,
      HomeRecommendView,
      HomeFeatrue,

      NavBar,
      TabControl
    },
    data(){
      return{
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
  #home{
    padding-top: 44px;/* 因为固定定位脱离了标准流，为了让导航栏正常显示，预留顶部44px的位置 */
  }
  .home-nav{
    position: fixed;/* 固定定位 */
    left: 0;
    right: 0;
    top: 0;
     z-index: 1;/*提高权重 */
    background-color: #ff5777;
    color: white;
  }

  .tabcontrol{
     position: sticky;/*粘性固定  用于功能栏 */
     top: 44px;
  }
</style>