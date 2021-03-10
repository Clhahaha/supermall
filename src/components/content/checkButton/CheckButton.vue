<template>
   <div class="check-botton" :class="{check:isChecked}">
       <img src="~assets/img/cart/tick.svg" alt="">
   </div>
</template>

<script>
export default {
    props:{
        isChecked:{
            type:Boolean,
            default:false
        }
    }
}
</script>

<style>
.check-botton{
    border-radius: 50%;
    border: 2px solid #aaa;
}
.check{
    background-color: orangered;
    border: 2px solid red;
}
</style>