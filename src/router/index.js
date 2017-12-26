import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/Login/Login'
import User from '@/components/User/User'
import Talking from '@/components/User/Talking'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Login',
      component: Login
    },

  ]
})
