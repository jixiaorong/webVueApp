<template>
  <div id="app">
       <router-view></router-view> 
  </div>
</template>
<script>

import commonJs from './common/js/common.js'// 引入工具箱

   export default{
     created () {
         if(!commonJs.getLocal("token")){// 如果本地没有token就进入登录页
           this.$router.push('/login')
         }else{ // 否则进入用户页面
           this.$router.push('/user')
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
