<template>
    <div class="tab-bar-item" @click="itemClick">
        <div v-if="!isActive"><slot name="item-icon"></slot></div>
        <div v-else><slot name="item-icon-active"></slot></div>
        <div :style="activeStyle"><slot name="item-text"></slot></div>
    </div>
</template>

<script>
export default {
  name: 'TabbarItem',
  props:{         //父传子
      url:{
          type:String
      },
  },
  data(){
      return{
            activeColor:"#ff8198"
      }
  },
  computed:{
      isActive(){
          return this.$route.path.indexOf(this.url)!==-1//当前跳转的path里寻找有没有和当前的path一样,找到就不等于-1，返回的就是ture
          //这里的$route和下面的$router不一样，这个是指活跃的那个$route的path
      },
      activeStyle(){
          return this.isActive?{color:this.activeColor}:{}
      }
  },

  methods:{
      itemClick(){
        this.$router.replace(this.url).catch(err=>err)
        // console.log(this.$router)
      }
  }
}
</script>

<style> 
  .tab-bar-item{
    flex:1;
    text-align: center;
    height: 49px;
    font-size: 14px;
  }
  .tab-bar-item img{
      width: 24px;
      height: 24px;
      margin-top: 3px;
      vertical-align: middle;
  }
</style>