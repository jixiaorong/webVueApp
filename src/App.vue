<template>
  <div id="app">
       <div class="my-loading" v-show="isLoading">
            <mu-circular-progress :size="60" :strokeWidth="5"/>
       </div>
       <router-view></router-view> 
  </div>
</template>
<script>

import commonJs from './common/js/login.js'// 引入工具箱
import urlJs from './common/js/url.js'
import axios from 'axios'

const url=urlJs.reUserLogin
const tryUrl=urlJs.tryUrl 
   export default{
     created () {
        //  if(!commonJs.isToken()){// 如果本地没有token就进入登录页
        //    this.$router.push('/login')
        //  }else{ // 否则进入用户页面
        //    this.$router.push('/user')
        //  }
        this.isLoading=false;// 结束loading
        // commonJs.isToken()
   
       },
     data(){
       return{
         isLoading:true,//是否展示loading

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
    .my-loading{
      width:100%;
      height:500px;
      padding-top:225px;
      text-align: center;
    }
</style>
