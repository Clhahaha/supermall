<template>
    <div class="goodsItem">
        <img :src="goodsItem.show.img" alt="">
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