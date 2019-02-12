// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui'
// element-ui全局样式表
import 'element-ui/lib/theme-chalk/index.css'
import store from './vuex/store'
// font-awesome字体库
import 'font-awesome/css/font-awesome.min.css'
import './style.css'
Vue.config.productionTip = false
Vue.use(ElementUI)
// 登陆中间验证
console.log(localStorage.token, 111111111111)
router.beforeEach((to, from, next) => {
  // document.title = to.meta.pageTitle || '里定医疗'
  if (to.matched.some(record => record.meta.requiresAuth)) {
    // console.log('store.state.userInfo.token', store.state.userInfo.token)
    if (localStorage.token) {
      next()
    } else {
      next({
        path: '/login',
        query: {redirect: to.fullPath}
      })
    }
  } else {
    next()
  }
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: {
    App
  },
  template: '<App/>'
})
