<template>
    <div>
        <div  class="vue-footer">    
            <mu-paper>
                <mu-bottom-nav :value="bottomNav" @change="handleChange">
                    <mu-bottom-nav-item value="activity" to="/user/activity" title="活动" icon="home"/>
                    <mu-bottom-nav-item value="talking" to="/user/talking" title="洽谈" icon="favorite"/>
                    <mu-bottom-nav-item value="siting" title="场地" to="/user/siting" icon="location_on"/>
                    <mu-bottom-nav-item value="me" title="我" to="/user/me" icon="person_pin"/>
                </mu-bottom-nav>
            </mu-paper> 
    </div>
    <router-view keep-alive></router-view>  
    </div>  
</template>
<script>

import Vue from 'vue'
import VueRouter from 'vue-router'
import Activity from './Activity'
import Talking from './Talking'
import Siting from './Siting'
import Me from './Me'
import Session from '../Session/Session'
Vue.use(VueRouter)


const routes = [
  
  { path: '/user/talking', component: Talking },
  { path: '/user/activity', component: Activity },
   {path: '/user', redirect: '/user/activity'},
  { path: '/user/siting', component: Siting },
  { path: '/user/me', component: Me },
  { path: '/session', component: Session },
]

// 3. 创建 router 实例，然后传 `routes` 配置
// 你还可以传别的配置参数, 不过先这么简单着吧。
const router = new VueRouter({
  routes 
})


document.addEventListener('plusready',function(){
        plus.navigator.setStatusBarBackground("#3f51b5");
  },false);
export default{
    router,
    data:function(){
        return {
      bottomNav: 'activity'
      }
    },
    methods: {
         handleChange (val) {
            this.bottomNav = val 
        },
    }
}

</script>
<style>
#app{
    background-color: #fff;
}
  .vue-footer{
      width:100%;
      height: 48px;
      position: fixed;
      bottom: 0;
      left: 0;
    z-index:9999;
    }
    .vue-footer ul li{
      float: left;
      width:25%;
      text-align: center;
    }
    .vue-footer ul li a{
      color:black;
      width: 100%;
      font-size: 16px;
      display: block;
      line-height: 56px;
    }
    .mu-bottom-item-active .mu-bottom-item-icon,.mu-bottom-item-active .mu-bottom-item-text{
        color:#3f51b5;

    }
</style>