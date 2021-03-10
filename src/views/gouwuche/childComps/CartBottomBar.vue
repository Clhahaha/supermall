<template>
  <div class="bottom-bar">
      <div class="check-content">
          <check-button class="check-button" :is-checked="isSelectAll" @click.native="checkclick"></check-button>
          <span>全选</span>
      </div>

      <div class="price">
          合计：{{totalprice}}
      </div>

      <div class="calculate" @click="calcClick">
          去计算：{{checklength}}
      </div>
  </div>
</template>

<script>
import CheckButton from 'components/content/checkButton/CheckButton'

import {mapGetters} from 'vuex'

export default {
    components:{
        CheckButton
    },

    methods:{
        checkclick(){
            if(this.isSelectAll){//假如全选中，那就遍历将全部不选中
                this.cartList.forEach(item => {
                    item.checked=false
                })
            }else{//否则那就遍历将全部选中
                this.cartList.forEach(item => {
                    item.checked=true
                })
            }

            //this.cartList.forEach(item=>item.checked=!this.isSelectAll)  这个方法不行
        },

        calcClick(){
            if(!this.isSelectAll){
                this.$toast.show('请选择购买的商品',1500)
            }
        }
    },

    computed:{
        ...mapGetters(['cartList']),

        totalprice(){
            return '¥' + this.cartList.filter(item=>{
                return item.checked//为true的时候就返回
            }).reduce((preValue,item)=>{
                return preValue + item.lowNowPreice * item.count
            },0).toFixed(2)//保留两位小数
        },

        checklength(){
            return this.cartList.filter(item=>item.checked).length
        },
        isSelectAll(){
        //    return !(this.cartList.filter(item=>!item.checked).length)
        if(this.cartList.length===0){return false}
        return !this.cartList.find(item=>!item.checked)
        }
    }
}
</script>

<style>
.bottom-bar{
    height: 40px;
    background-color: #eee;
    position: absolute;
    left: 0;
    right: 0;
    bottom: 49px;
    line-height: 40px;
    display: flex;
}

.check-content{
    display: flex;
    align-items: center;
    margin-left: 10px;
    width: 25%;
}

.check-button{
    width: 20px;
    height: 20px;
    line-height: 20px;
    margin-right: 5px;
}
.price{
    padding-left: 10px;
    flex: 1;
}
.calculate{
    width: 25%;
    background-color: orangered;
    color: white;
    text-align: center;
}
</style>