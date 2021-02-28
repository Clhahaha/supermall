import axios from 'axios'  //导入axios

export function request(config){
    //1.创建axios的实例
    const instance=axios.create({
        baseURL:'http://123.207.32.32:8000/api/h8',//根url
        timeout:5000//超时时间设置
    })

    //2.请求拦截器
    // instance.instanceptors.request.use(config=>{
    //     return config
    // },err=>{
    //     console.log(err)
    // })

    //3.响应拦截器
    instance.interceptors.response.use(res=>{
        return res.data
    },err=>{
        console.log(err);
    })

    //4.发送网络请求并返回
    return instance(config)
}