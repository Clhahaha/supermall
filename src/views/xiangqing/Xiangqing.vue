<template>
  <div class="xiangqing">
      <xiangqing-nav-bar class="xiangqingNavbar" @itemClick="itemClick" ref="navbar"></xiangqing-nav-bar>
      <scroll class="content" ref="scroll" @scrollPosition="scrollPosition" :probe-type="3">
        <xiangqing-swiper :topImages="topImages"></xiangqing-swiper>
        <xiangqing-info :goods="goods"></xiangqing-info>
        <xiangqing-shop :shop="shop"></xiangqing-shop>
        <xiangqing-goods :detailInfo="detailInfo" @imgLoad="imgLoad"></xiangqing-goods>
        <xiangqing-param ref="param" :goodsParam="goodsParam"></xiangqing-param>
        <xiangqing-comment ref="comment" :commentInfo="commentInfo"></xiangqing-comment>
        <goods-list  ref="recommend" :goods="recommend"></goods-list>
      </scroll>
      <xiangqing-bottom-bar @addToCart="addToCart"></xiangqing-bottom-bar>
      <back-top @click.native="backClick" v-show="isshowprobeType" @scrollPosition="scrollPosition"></back-top>

  </div>
</template>

<script>

import XiangqingNavBar from './childcomps/XiangqingNavBar'//导入详情页导航栏
import XiangqingSwiper from './childcomps/XiangqingSwiper'//导入顶部轮播图
import XiangqingInfo from './childcomps/XiangqingInfo'
import XiangqingShop from './childcomps/XiangqingShop'
import XiangqingGoods from './childcomps/XiangqingGoods'
import XiangqingParam from './childcomps/XiangqingParam'
import XiangqingComment from './childcomps/XiangqingComment'
import XiangqingBottomBar from './childcomps/XiangqingBottomBar'
import BackTop from "components/content/backtop/BackTop"


import Scroll from 'components/common/scroll/Scroll'
import GoodsList from 'components/content/goods/GoodsList'

import {getDetail,Goods,Shop,GoodsParam,getRecommend} from 'network/xiangqing'//导入封装好的请求函数
import {debounce} from 'components/common/tools/Tools'

import {mapActions} from 'vuex'

export default {
    name:"Xiangqing",

    data(){
        return{
            iid:null,
            topImages:[],
            data:{},
            goods:{},
            shop:{},
            detailInfo:{},
            goodsParam:{},
            commentInfo:{},
            recommend:[],
            themeTopYs:[],
            getThemeTopY:null,
            currentIndex:0,
            isshowprobeType:false
        }
    },

    components:{
        XiangqingNavBar,
        XiangqingSwiper,
        XiangqingInfo,
        XiangqingShop,
        XiangqingGoods,
        XiangqingParam,
        XiangqingComment,
        GoodsList,
        XiangqingBottomBar,
        BackTop,
        Scroll
        
    },

    created(){
        this.iid=this.$route.params.iid

        getDetail(this.iid).then(res=>{//传入iid请求详情数据
            //获取顶部轮播图数据
            this.data=res.result
            this.topImages=res.result.itemInfo.topImages
             //获取商品详细信息
            this.goods=new Goods(this.data.itemInfo,this.data.columns,this.data.shopInfo.services)

            this.shop=new Shop(this.data.shopInfo)

            this.detailInfo=this.data.detailInfo

            this.goodsParam=new GoodsParam(this.data.itemParams.info,this.data.itemParams.rule)

            if(this.data.rate.cRate!==0){
                this.commentInfo=this.data.rate.list[0]
            }
            })

        getRecommend().then(res=>{//请求推荐商品的数据
            this.recommend=res.data.list
        })

        this.getThemeTopY=debounce(()=>{//给getThemeTopY赋值
            this.themeTopYs=[]
            this.themeTopYs.push(0)//商品的offsetTop
            this.themeTopYs.push(this.$refs.param.$el.offsetTop)//参数的offsetTop
            this.themeTopYs.push(this.$refs.comment.$el.offsetTop)//评论的offsetTop
            this.themeTopYs.push(this.$refs.recommend.$el.offsetTop)//推荐的offsetTop
            console.log(this.themeTopYs);
        },100)
    },

    methods:{
        ...mapActions(['addToCart']),

        imgLoad(){
            this.$refs.scroll.refresh()
            
            this.getThemeTopY()
        },

        itemClick(index){
            console.log(index);
            this.$refs.scroll.scrollTo(0,-this.themeTopYs[index],200)
        },

        scrollPosition(position){
            //获取Y值
            const positionY=-position.y
            //positionY和主题中的值进行对比
            let length=this.themeTopYs.length
            for(let i=0;i<length;i++){
                if(this.currentIndex!==i&&((i<length)&&(positionY>=this.themeTopYs[i]&&positionY<this.themeTopYs[i+1])||(i===length-1&&positionY>=this.themeTopYs[i]))){
                    this.currentIndex=i
                    this.$refs.navbar.currentIndex=this.currentIndex
                }
            }
        },

        backClick(){
            this.$refs.scroll.scrollTo(0,0)//第三个参数是指毫秒
        },

        scrollPosition(position){
            position.y<-1000?this.isshowprobeType=true:this.isshowprobeType=false
        },

        addToCart(){
            //获取购物车需要展示的信息
            const product={}
            product.image=this.topImages[0]
            product.title=this.goods.title
            product.desc=this.goods.desc
            product.lowNowPreice=this.goods.lowNowPreice
            product.iid=this.iid

            // this.$store.commit('addCart',product)//这个是专门添加到mutation里的
            this.$store.dispatch('addToCart',product).then(res=>{
                this.$toast.show(res,1500)
                console.log(this.$toast)
            })//这个是专门分发到action里的

            // this.addToCart(product).then(res=>{  //这个是映射之后用的,普通的就用上面做这个
            //     console.log(res);
            // })
        } 
    }
}
</script>

<style>
    .xiangqing{
        position: relative;
        background-color: #fff;
        z-index: 1;
    }
    .content{
        height: calc(100vh - 44px - 49px);
    }
    .xiangqingNavbar{
        position: relative;
        background-color: #fff;
        z-index: 1;
    }
    .tuijian{
        padding: 15px 0;
        text-align: center;
    }

</style>