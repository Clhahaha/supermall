<template>
  <div id="app">
     <keep-alive exclude="Xiangqing"><!--防止记录被销毁  exclude是排除的意思，后面的值是文件里面的那个name：“文件名”-->
      <router-view>
      </router-view>
    </keep-alive>
    <MainTabbar></MainTabbar>
  </div>
</template>

<script>
  import MainTabbar from 'components/content/MainTabbar'

  export default {
    name: 'App',
    components: {
      MainTabbar
    }
  }
</script>

<style>
  @import "./assets/css/base.css";
</style>
