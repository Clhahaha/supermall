<template>
  <div class="shop-info">
      <div class="shop-top">
          <img :src="shop.logo" alt="">
          <span class="title">{{shop.name}}</span>
      </div>
      <div class="shop-middle">
          <div class="shop-middle-item shop-middle-left">

              <div class="info-sells">
                  <div class="sells-count">
                      {{shop.sells | sellCountFilter}}<!-- 使用筛选器将超过10000的用单位万表示 -->
                  </div>
                  <div class="sells-text">总销量</div>
              </div>

              <div class="info-goods">
                  <div class="goods-count">
                      {{shop.goods}}
                  </div>
                  <div class="goods-text">全部宝贝</div>
              </div>
          </div>

         <div class="shop-middle-item shop-middle-right">
            <table>
                <tr v-for="(item,index) in shop.score" :key="index">
                    <td>{{item.name}}</td>
                    <td class="score" :class="{'score-better':item.isBetter}">{{item.score}}</td>
                    <td class="better" :class="{'better-more':item.isBetter}"><span>{{item.isBetter?'高':'低'}}</span></td>
                </tr>
            </table>
         </div>
      </div>
      
      <div class="shop-bottom">
          <div class="center-shop">进店逛逛</div>
      </div>
  </div>
</template>

<script>
export default {
    props:{
        shop:{
            type:Object,
            default(){
                return {}
            }
        }
    },

    filters:{//过滤器
        sellCountFilter(value){
            if(value<10000) {
                return value
            }
            else{
                return (value/10000).toFixed(1)+'万'
            }
        }
    }
}
</script>

<style>
.shop-info{
    padding:  25px 8px;
    border-bottom: 5px solid #f2f5f8;
}
.shop-top{
    line-height: 45px;
    display: flex;
    align-items: center;
}
.shop-top img{
    width: 45px;
    height: 45px;
    border-radius: 50%;
    border: 1px solid rgba(0, 0, 0, .1);
}
.shop-top .title{
    margin-left: 10px;
    vertical-align: center;/* 垂直对齐 */
}
.shop-middle{
    margin-top: 15px;
    display: flex;
    align-items: center;
}
.shop-middle-item{
    flex: 1;
}
.shop-middle-left{
    display: flex;
    justify-content: space-evenly;
    color: #333;
    text-align: center;
    border-right: 1px solid rgba(0, 0, 0, .1);
}
.sells-count,.goods-count{
    font-size: 18px;
}
.sells-text,.goods-text{
    margin-top:10px;
    font-size: 12px;
}
.shop-middle-right{
    font-size: 13px;
    color: #333;
}
.shop-middle-right table{
    width: 120px;
    margin-left: 30px;
}
.shop-middle-right table td{
    padding: 5px 0;
}
.shop-middle-right .score{
    color: #5ea732;
}
.shop-middle-right .better span{
    background-color: #5ea732;
    color: #fff;
}
.shop-middle-right .score-better{
    color: #f13e3a;
}
.shop-middle-right .better-more span{
    background-color: #5ea732;
    color: #fff;
    text-align: center;
}
.shop-middle-right .better-more span{
    background-color: #f13e3a;
}
.shop-bottom{
    padding: 35px 0;
    text-align: center;
    border-bottom: 2px solid #f2f5f8;
}
.center-shop{
    background-color: rgb(238, 238, 238);
    border-radius: 10px;
    display: inline-block;
    padding: 8px 40px;
}
</style>