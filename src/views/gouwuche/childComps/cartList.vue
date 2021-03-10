<template> 
<div>
    <scroll class="content" ref="scroll">
            <cart-list-item class="cart-list" v-for="(item,index) in cartList" :key="index" :product="item"></cart-list-item>
    </scroll>
</div>
</template>

<script>
import cartListItem from './cartListItem'
import Scroll from 'components/common/scroll/Scroll.vue'

import {mapGetters} from 'vuex'

export default {
    components:{
        Scroll,
        cartListItem,
    },

    computed:{
        ...mapGetters(['cartList'])
    },

    activated(){
        this.$refs.scroll.refresh()
    }

}
</script>

<style>
.content{
    height: calc(100vh - 44px - 49px - 40px);
    overflow: hidden;
}
</style>