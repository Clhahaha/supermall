import Vue from 'vue'
import Router from 'vue-router'  //导入router

const Home =()=> import('../../views/home/Home.vue')
const Fenlei =()=>import( '../../views/fenlei/Fenlei.vue')
const Gouwuche =()=>import( '../../views/gouwuche/Gouwuche.vue')
const Wod =()=>import( '../../views/wod/Wod.vue')

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
  }
]
const router=new Router({
  routes,
  mode:'history'
})

export default router  //导出router
