<template>
    <div>
        <nav-bar>
            <div slot="left" @click="leftClick">
                <div class="back">＜</div>
            </div>
            <div slot="center" class="center">
                <div v-for="(item,index) in titles" :key="index" class="centerItem" :class="{active:index===currentIndex}" @click="itemClick(index)">{{item}}</div>
            </div>
        </nav-bar>
    </div>
</template>

<script>

import NavBar from 'components/common/navbar/NavBar'

export default {
    components:{
        NavBar
    },

    data(){
        return{
            titles:['商品','参数','评论','推荐'],
            currentIndex:0
        }
    },

    methods:{
        itemClick(index){
            this.currentIndex=index
            this.$emit('itemClick',index)
        },
        leftClick(){
            this.$router.back()//返回
        }
    }

}
</script>

<style>
    .center{
        display: flex;
    }
    .centerItem{
        flex: 1;
    }
    .active{
        color: #ff8198;
    }
    .back{
        font-size: 36px;
        font-weight: bold;
        color: rgb(151, 151, 151);
    }
</style>