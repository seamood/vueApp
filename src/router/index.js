import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Couter from '@/vuex/couter'
import Login from '@/page/login'
import Register from '@/page/register'
import FordetPass from '@/page/forgetPass'
import Setting from '@/page/setting'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld,
      children: [
        {
          path: '/set',
          component: Setting
        }
      ]
    },
    {
      path: '/an',
      name: 'Couter',
      component: Couter
    },
    {
      path: '/login',
      name: '登录',
      component: Login
    },
    {
      path: '/register',
      name: '注册',
      component: Register
    },
    {
      path: '/forgetPass',
      name: '忘记密码',
      component: FordetPass
    }
  ]
})
