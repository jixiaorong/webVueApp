<template>
  <div id="app">
       <router-view></router-view>
  
  </div>
</template>
<script>
import Login from './components/login/login'
import User from './components/User/User'
import Vue from 'vue'
import VueRouter from 'vue-router'// 引进路由
import commonJs from './common/js/common.js'
Vue.use(VueRouter)

   export default{
     created () {
         console.log(commonJs.getLocal("key"))
         if(!commonJs.getLocal("key")){
            console.log(commonJs.getLocal("key"))
           this.$router.push('/login')
         }
       },
     data(){
       return{
       }
     },
     methods:{
       

     }
   }
</script>
<style>
    #app{
      position: relative;
       width:100%;
      height:100%;
    }
</style>
