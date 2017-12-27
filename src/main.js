// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import MuseUi from 'muse-ui' // 引进muse-ui的css
import MuseStyle from 'muse-ui/dist/muse-ui.css' // 引进muse-ui的css
import App from './App' // App.vue 文件
import VueRouter from 'vue-router'// 引进路由
import Style from './common/css/style.css'
import axios from 'axios'
Vue.config.productionTip = false
Vue.use(MuseUi)
Vue.use(VueRouter)
Vue.use(Style) //公用样式
Vue.use(axios)
// 登陆
import Login from './components/login/login'
// 用户
import User from './components/User/User'
import Talking from './components/User/Talking'
import Activity from './components/User/Activity'
import Siting from './components/User/Siting'
import Me from './components/User/Me'
// 会话
import Session from './components/Session/Session'





// 定义路由
const routes = [
  // 登录的路由
  {path: '/', redirect: '/login'},
  {path: '/login', component: Login},

  // 用户界面
  { path: '/user', component: User,children:[
    {path: '', redirect: '/user/activity' },
    {path: 'activity', component: Activity },
    {path: 'talking', component: Talking },
    {path: 'siting', component: Siting },
    {path: 'me', component: Me },
  ]},

  // 会话的路由
  { path: '/session/', component: Session },
]

//  创建 router 实例，然后传 `routes` 配置
// 你还可以传别的配置参数, 不过先这么简单着吧。
const router = new VueRouter({
  routes 
})

//  创建和挂载根实例。

new Vue({
  el: '#app',
  template: '<App/>',
  router,
  components: { App }
  })
  