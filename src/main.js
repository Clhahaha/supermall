import Vue from 'vue'
import App from './App.vue'
import router from './router/tabbarRouter'
import store from './store/Store'
import toast from 'components/common/toast'

Vue.config.productionTip = false

//安装事件总线
Vue.prototype.$bus=new Vue()

//安装toast插件
Vue.use(toast)

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
