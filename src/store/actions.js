import{ADD_COUNTER,ADD_TO_CART} from './mutation-types'

export default{

    addToCart(context,product){//context上下文
        // payload新添加的商品
        return new Promise((resolve,reject)=>{
            //查找之前数组中是否有该商品
            let oldProduct=context.state.cartList.find(item=>item.iid===product.iid)

            if(oldProduct){
                context.commit(ADD_COUNTER,oldProduct)
                resolve('当前的商品数量+1')
            }else{
                product.count=1
                context.commit(ADD_TO_CART,product)
                resolve('添加成功！')
            }
        })
    }
}