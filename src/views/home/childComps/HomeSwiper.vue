<template>
  <swiper>
      <swiper-item v-for="(item,index) in banners" :key="index">
          <a :href="item.link">
              <img :src="item.image" alt="" @load="imgload">
          </a>
      </swiper-item>
    </swiper>
</template>

<script>
    import {Swiper,SwiperItem} from 'components/common/swiper'//导入导航栏
    export default {
        props:{
            banners:{  //把home主页中的banner传递过来
                type:Array,
                default(){
                    return[]
                }
            }
        },
        components:{
            Swiper,
            SwiperItem
        },
        data(){
            return{
                isload:false
            }
        },

        methods:{
            imgload(){//监听到图片加载完成，只希望发送一次出去
                if(!this.isload){
                    this.$emit('swiperImgLoad')
                    this.isload=true
                }
            }
        }
    }
</script>

<style>

</style>