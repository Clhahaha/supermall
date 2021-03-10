import {request} from "./request"

export function getDetail(iid){
    return request({
        url:'/detail',//URL是不能弄错的,是那个接口的url
        params:{
            iid
        }
    })
}

export function getRecommend(){
    return request({
        url:'/recommend'
    })
}

//构造函数
// class a{
//     constructor(name,age){
//         this.name=name;
//         this.age=age;
//     }
// }
// const b = new a('chenglian',20)
// b.name
// b.age

export class Goods{//商品详细信息用一个构造函数装，用的时候调用
    constructor(itemInfo,columns,services){//constructor构造器
        this.title = itemInfo.title//标题
        this.desc = itemInfo.desc//描述
        this.Price = itemInfo.price//新的价格
        this.oldPrice = itemInfo.oldPrice//旧的价格
        this.lowNowPreice = itemInfo.lowNowPrice//低价
        this.columns = columns//关于销量收藏快递
        this.services = services//服务
        this.discountDesc=itemInfo.discountDesc//优惠类型
        this.discountBgColor=itemInfo.discountBgColor//优惠类型颜色
    } 
}

export class Shop{
    constructor(shopInfo){
        this.logo=shopInfo.shopLogo
        this.name=shopInfo.name
        this.fans=shopInfo.cFans
        this.sells=shopInfo.cSells
        this.score=shopInfo.score
        this.goods=shopInfo.cGoods
    }
}

export class GoodsParam{
    constructor(info,rule){
        this.image=info.images?info.images[0]:''//因为有些images里可能没有值
        this.infos=info.set
        this.sizes=rule.tables
    }
}