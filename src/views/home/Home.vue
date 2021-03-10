<template>
  <div id="home">
    <nav-bar class="home-nav"><h3 slot="center">购物街</h3></nav-bar>

    <tab-control class="tabcontrolTop" :titles="['流行','新款','精选']" @tabClick="tabClick" ref="tabControl1" v-show="isTabFixed"></tab-control>

    <scroll class="content" ref="scroll" :probe-type="3" @scrollPosition="contentScroll" :pullUp="true" @pullingUp="loadMore">
      <home-swiper :banners="banners" @swiperImgLoad="swiperImgLoad"></home-swiper>
      <home-recommend-view :recommends="recommends"></home-recommend-view>
      <home-featrue></home-featrue>
      <tab-control class="tabcontrol" :titles="['流行','新款','精选']" @tabClick="tabClick" ref="tabControl2" :class="{fixed:isTabFixed}"></tab-control>
      <goods-list :goods="goods[currentType].list"></goods-list>
    </scroll>

    <back-top @click.native="backClick" v-show="isshowprobeType"></back-top>
  </div>
</template>

<script>
import HomeSwiper from "./childComps/HomeSwiper"//导入轮播图
import HomeRecommendView from "./childComps/HomeRecommendView"//导入推荐视图
import HomeFeatrue from "./childComps/HomeFeature"//导入流行图

import NavBar from 'components/common/navbar/NavBar.vue'//导入导航栏
import TabControl from "components/content/TabControl"//导入功能栏
import GoodsList from "components/content/goods/GoodsList"//导入商品列表
import BackTop from "components/content/backtop/BackTop"//导入返回顶部按钮

import {getHomeMultidata,getHomeGoods} from "network/home" //导入网络模块
import {debounce} from "components/common/tools/Tools"//导入防抖函数

import Scroll from 'components/common/scroll/Scroll'//导入滚动模块


export default {
    name:'home',

    components:{
      HomeSwiper,
      HomeRecommendView,
      HomeFeatrue,

      NavBar,
      TabControl,
      GoodsList,
      BackTop,

      Scroll
    },

    data(){
      return{
        banners:[],
        recommends:[],
        goods:{
          'pop':{page:0,list:[]},
          'new':{page:0,list:[]},
          'sell':{page:0,list:[]},
        },
        showGoods:'pop',//默认当前类型为’pop‘
        currentType:'pop',
        isshowprobeType:false,//默认不显示返回顶部按钮
        refresh:null,//用来存储防抖函数处理结果
        tabOffsetTop:0,
        isTabFixed:false,
        saveY:0//记录当前浏览位置
      }
    },

    activated(){//进首页时切换到的位置
      this.$refs.scroll.scrollTo(0,this.saveY,0)
      this.$refs.scroll.refresh()//有时候切换回来会动不了，需要刷新一次
    },

    deactivated(){//记录离开首页时的浏览位置
      this.saveY=this.$refs.scroll.getscrollY()
    },

    created(){
      //请求多个数据
      this.getHomeMultidata()
      //请求商品数据
      this.getHomeGoods('pop')
      this.getHomeGoods('new')
      this.getHomeGoods('sell')
    },

    // *************************************************
    mounted(){
      this.refresh=debounce(this.$refs.scroll.refresh,50)//刷新频繁防抖动函数调用
    },
    // *************************************************


    /**事件监听相关的方法**/
    methods:{

      //tabControl的吸顶效果
      swiperImgLoad(){//获取轮播图片加载完成之后tabControl的offsetTop(元素顶部到父元素的距离)
        this.tabOffsetTop = this.$refs.tabControl2.$el.offsetTop
      },

      tabClick(index){
        switch (index){
          case 0:
            this.currentType='pop'
            break
          case 1:
            this.currentType='new'
            break
          case 2:
            this.currentType='sell'
            break
        }
        this.$refs.tabControl1.currentIndex=index
        this.$refs.tabControl2.currentIndex=index
      },

      backClick(){
        this.$refs.scroll.scrollTo(0,0)//第三个参数是指毫秒
      },

      contentScroll(position){
        position.y<-1000?this.isshowprobeType=true:this.isshowprobeType=false

        //决定tabControl是否吸顶（position:fixed）
        this. isTabFixed=(-position.y)>this.tabOffsetTop?true:false
      },

      loadMore(){
        this.getHomeGoods(this.currentType)
        this.$refs.scroll.finishPullUp()//完成上拉，放这个finishpullup才能再加载第二次
        this.refresh()//重新计算高度并且防抖动
      },


      
      /**网络请求相关的方法**/

      getHomeMultidata(){
         //请求多个数据
        getHomeMultidata().then(res=>{
        // this.result=res//将结果保存起来
        this.banners=res.data.banner.list
        this.recommends=res.data.recommend.list
      })
      },
      getHomeGoods(type){
        //请求商品数据
        const page=this.goods[type].page+1
        getHomeGoods(type,page).then(res=>{
        this.goods[type].list.push(...res.data.list)//***这个加上三个点的语法能够将动态的数组累加到另一个数组里面**
        this.goods[type].page+=1
      })
      }
    }
}
</script>

<style >
 /* #home{
    padding-top: 44px;因为固定定位脱离了标准流，为了让导航栏正常显示，预留顶部44px的位置 
  }*/
  .home-nav{
    /* position: fixed;固定定位
    left: 0;
    right: 0;
    top: 0;
     z-index: 1;提高权重 */
    background-color: #ff5777;
    color: white;
  }

  .tabcontrol{
     position: sticky;/* 粘性固定  用于功能栏 */
     top: 44px;
     z-index: 1;
  }
  .content{
    height:calc(100vh - 93px);/* 相当于视口高度减去navbar和tabbar的视口高度 */
    overflow: hidden;
  }
  .fixed{
    position: none;
    left: 0;
    right: 0;
    top:44px;
  }
  .tabcontrolTop{
    position: absolute;
    left: 0;
    right: 0;
    top:44px;
  }
</style>