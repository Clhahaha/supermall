<template>
    <div class="wrapper" ref="wrapper"><!--添加滚动的容器 -->
      <div><!--滚动的内容-->
        <slot></slot>
      </div>
    </div>
</template>

<script>
import BScroll from 'better-scroll'
export default {
    props:{
        probeType:{
            type:Number,
            default:0
        },
        pullUp:{
            type:Boolean,
            default:false
        }
    },
    data(){
        return{
            scroll:null
        }
    },

    mounted(){
        this.scroll=new BScroll(this.$refs.wrapper,{
            click:true,
            probeType:this.probeType,//侦测实时位置
            pullUpLoad:this.pullUp//开启上拉加载更多
        })
        this.scroll.on('scroll',(position)=>{//监听scroll的实时位置获取position坐标
            this.$emit('scrollPosition',position)
        })
        this.scroll.on('pullingUp',()=>{//监听上拉加载更多事件
            this.$emit('pullingUp')
        })    
    },

    methods:{
        scrollTo(x,y,time=500){//scroll对象容器的顶部坐标的方法，等会会调用
            this.scroll.scrollTo(x,y,time)
        },
        finishPullUp(){//上拉加载完成之后加上这个才能加载第二次
            this.scroll.finishPullUp()
        },
        refresh(){
            this.scroll.refresh()
        },
        getscrollY(){   //把y坐标的值传出去
            return this.scroll?this.scroll.y:0
        }
        }
    }
</script>

<style>

</style>