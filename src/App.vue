<template>
  <div id="app">
       <router-link to="/login"></router-link>
       <router-view></router-view>
  </div>
</template>
<script>
import Login from './components/login/login'
import User from './components/User/User'
import Vue from 'vue'
import VueRouter from 'vue-router'// 引进路由
Vue.use(VueRouter)

   export default{
   }
</script>
<style>
    #app{
      position: relative;
       width:100%;
      height:100%;
    }
</style>
