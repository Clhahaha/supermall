import {request} from "./request"  //导入网络请求
export function getHomeMultidata(){
    return request({
        url:'/home/multidata'
    })
}