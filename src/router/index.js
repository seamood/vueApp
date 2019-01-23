import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Couter from '@/vuex/couter'
import Login from '@/page/login'
import Register from '@/page/register'
import FordetPass from '@/page/forgetPass'
import Setting from '@/page/setting'
import Main from '@/page/main'
import OnlineAccepts from '@/page/onlineAccepts'
import DoctorClass from '@/page/doctorClass'
import DoctorReturns from '@/page/doctorReturns'
import ClassRoom from '@/page/classroom'
import InforRelease from '@/page/inforRelease'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Main',
      component: Main,
      children: [
        {
          path: '',
          component: HelloWorld
        },
        {
          path: '/set',
          component: Setting
        },
        {
          path: '/onlineAccepts',
          component: OnlineAccepts
        },
        {
          path: '/doctorClass',
          component: DoctorClass
        },
        {
          path: '/doctorReturns',
          component: DoctorReturns
        },
        {
          path: '/classroom',
          component: ClassRoom
        },
        {
          path: '/inforRelease',
          component: InforRelease
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
