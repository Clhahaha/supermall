import Vue from 'vue'
import Router from 'vue-router'  //导入router


//懒加载
const Home =()=> import('../../views/home/Home.vue')
const Fenlei =()=>import( '../../views/fenlei/Fenlei.vue')
const Gouwuche =()=>import( '../../views/gouwuche/Gouwuche.vue')
const Wod =()=>import( '../../views/wod/Wod.vue')
const Xiangqing =()=>import( '../../views/xiangqing/Xiangqing.vue')

Vue.use(Router)  //安装router

const routes=[  //创建router对象
  {
    path:'',
    redirect:'/home'  //初始化路由home
  },
  {
    path:'/home',
    component:Home
  },
  {
    path:'/fenlei',
    component:Fenlei
  },
  {
    path:'/gouwuche',
    component:Gouwuche
  },
  {
    path:'/wod',
    component:Wod
  },
  {
    path:'/detail/:iid',//携带id路由写法
    component:Xiangqing
  }
]
const router=new Router({
  routes,
  mode:'history'
})

export default router  //导出router
