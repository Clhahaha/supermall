<template>
  <div class="tabcontrol">
      <div class="tabcontrolItem" v-for="(item,index) in titles" :key="index" :class="{active:index===currentIndex}" @click="itemClick(index)">
          <span>{{item}}</span>
      </div>
  </div>
</template>

<script>
export default {
    props:{
        titles:{
            type:Array,
            default(){
                return[]
            }
        }
    },
    data(){
        return{
            currentIndex:0
        }
    },
    methods:{
        itemClick(index){
            this.currentIndex=index
        }
    }
}
</script>

<style>
    .tabcontrol{
        width: 100%;
        background-color: rgb(255, 255, 255);
        display: flex;
        text-align: center;
        font-size: 15px;
        padding-bottom: 5px;
    }
    .tabcontrolItem{
        flex: 1;
        height: 40px;
        line-height: 40px;
    }
    .tabcontrolItem span{
        padding: 5px;
    }
    .active{
        color: #ff8198;
    }
    .active span{
        border-bottom: 3px solid #ff5777;
    }
</style>