<template>
    <div class="goodsItem" @click="goodsItemClick">
        <img :src="showImage" alt="">
        <div>
            <p>{{goodsItem.title}}</p>
            <span class="price">￥{{goodsItem.price}}</span>
            <span class="collect">☆{{goodsItem.cfav}}</span>
        </div>
    </div>
</template>

<script>
export default {
    props:{
        goodsItem:{
            type:Object,
            default(){
                return[]
            }
        }
    },

    computed:{
        showImage(){
            return this.goodsItem.image || this.goodsItem.show.img
        }
    },

    methods:{
        goodsItemClick(){
            this.$router.push('/detail/' + this.goodsItem.iid)//注意$router和$route不一样console.log(this.$route.path)
            //在使用了$router跳转路由时，路由对象会被存入$route中，并且切换路由时，$route也会跟着更新
            //$router是跳转路径  $route获取某一个值
        },
    }
}
</script>

<style>
    .goodsItem{
        width: 45%;
        text-align: center;
        padding:0 5px 10px;
        flex: 1;
    }
    .goodsItem img{
        width: 100%;
        height: 300px;
        border-radius: 5px;
    }
    .goodsItem p{
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
    }
    .price{
        color: #ff8198;
    }
    .collect{
        float: right;
    }
</style>