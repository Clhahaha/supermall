<template>
    <div class="recommend">
        <div class="recommendItem" v-for="(item,index) in recommends" :key="index">
            <a :href="item.link">
                <img :src="item.image" alt="">
                <div>{{item.title}}</div>
            </a>
        </div>
    </div>
</template>

<script>
    export default {
        props:{
            recommends:{
                type:Array,
                default(){
                    return []
                }
            }
        }
    }
</script>

<style>
    .recommend{
        display: flex;
        width: 100% ;
        text-align: center;
        font-size: 12px;
        padding: 10px 0 20px;
        border-bottom: 10px solid #eee;
    }
    .recommendItem{
        flex: 1;
    }
    .recommendItem img{
        width: 70px;
        height: 70px;
    }
</style>