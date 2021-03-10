<template>
  <div v-if="Object.keys(goods).length !== 0" class="base-info"><!-- 判断goods对象是否有数据 -->
      <div class="info-title">{{goods.title}}</div><!-- 标题-->
      <div class="info-price"><!-- 价格 -->
          <span class="n-price">{{goods.Price}}</span>
          <span class="o-price">{{goods.oldPrice}}</span>
          <span class="discountDesc">{{goods.discountDesc}}</span>
      </div>
      <div class="info-other"><!-- 其他 -->
          <span>{{goods.columns[0]}}</span>
          <span>{{goods.columns[1]}}</span>
      </div>
      <div class="info-services"><!-- 服务 -->
          <span class="info-services-item" v-for="index in goods.services.length-1" :key="index">
              <img :src="goods.services[index-1].icon" alt="" class="icon">
              <span>{{goods.services[index-1].name}}</span>
          </span>
      </div>
  </div>
</template>

<script>
export default {
    props:{
        goods:{
            type:Object,
            default(){
                return{}
            }
        }
    }

}
</script>

<style>
    .base-info{
        margin-top: 15px;
        padding: 0 8px;
        color: #999;
        border-bottom: 5px solid #f2f5f8;
    }
    .info-title{
        color: #222;
    }
    .info-price{
        margin-top: 10px;
        position: relative;
    }
    .info-price .n-price{
        font-size: 24px;
        color: #ff8189;
    }
     .info-price .o-price{
         font-size: 13px;
         margin-left: 5px;
         text-decoration: line-through;/* 给文字加删除线 */
     }
     .discountDesc{
         color: #fff;
         background-color: #ff5777;
         padding: 3px;
         margin-left: 5px;
         font-size: 13px;
         border-radius: 10px;
         position: absolute;
     }
     .icon{
         width:15px;
         height: 15px;
     }
     .info-other{
         padding: 15px 0;
         display: flex;
         justify-content: space-around;
         border-bottom: 1px solid #f2f5f8;
     }
     .info-other span{
         /* flex: 1; */
         font-size: 15px;
     }
     .info-services{
         margin: 25px 0;
         color: #666;
         font-size: 12px;
     }
    .info-services-item img{
        margin-left: 15px;
    }
</style>