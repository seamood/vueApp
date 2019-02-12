import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Main',
      component: resolve => require(['../page/main'], resolve),
      // meta: {
      //   requiresAuth: true
      // },
      children: [
        {
          path: '',
          component: resolve => require(['../components/HelloWorld'], resolve)
        },
        {
          path: '/set',
          component: resolve => require(['../page/setting'], resolve)
        },
        {
          path: '/onlineAccepts',
          component: resolve => require(['../page/onlineAccepts'], resolve)
        },
        {
          path: '/doctorReturns',
          component: resolve => require(['../page/doctorReturns'], resolve)
        },
        {
          path: '/doctorClass',
          component: resolve => require(['../page/doctorClass'], resolve)
        },
        {
          path: '/inforRelease',
          component: resolve => require(['../page/inforRelease'], resolve)
        },
        {
          path: '/classroom',
          component: resolve => require(['../page/classroom'], resolve)
        },
        {
          path: '/chat',
          component: resolve => require(['../page/chat'], resolve)
        }
      ]
    },
    {
      path: '/user',
      component: resolve => require(['../page/user'], resolve)
    },
    {
      path: '/an',
      name: 'Couter',
      component: resolve => require(['../vuex/couter'], resolve)
    },
    {
      path: '/login',
      name: '登录',
      component: resolve => require(['../page/login'], resolve)
    },
    {
      path: '/register',
      name: '注册',
      component: resolve => require(['../page/register'], resolve)
    },
    {
      path: '/forgetPass',
      name: '忘记密码',
      component: resolve => require(['../page/forgetPass'], resolve)
    },
    {
      path: '*',
      name: '错误页面',
      component: resolve => require(['../page/error'], resolve)
    }
  ]
})
