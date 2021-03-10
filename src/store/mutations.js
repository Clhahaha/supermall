import {ADD_COUNTER,ADD_TO_CART} from './mutation-types'

export default{
        [ADD_COUNTER](state,product){
            product.count++
        },
        
        [ADD_TO_CART](state,product){
            product.checked=true
            state.cartList.push(product)
        }
}