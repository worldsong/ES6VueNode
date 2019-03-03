// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App'
import {routes} from './routes'
import axios from 'axios'

Vue.config.productionTip = false

axios.defaults.baseURL = 'http://localhost:3000'

// 配置Vue原型（在任何组件中都可以正常使用axios）
Vue.prototype.http = axios;

Vue.use(VueRouter);

const router = new VueRouter({
  routes,
  mode: 'history',
  scrollBehavior(to, from, savedPostion){
    // return {x:0, y: 10000}
    // return {selector: '.btn'}
    // console.log(to)

    if(savedPostion){
      return savedPostion
    }else {
      return {x:0, y:0}
    }
  }
})

/*
// 全局守卫
router.beforeEach((to, from, next) => {
  // alert("还没有登录，请先登录！");
  // next();
  // console.log(to);

  if(to.path== '/login' || to.path == '/register'){
    next();
  }else {
    alert("还没有登录，请先登录！");
    next('/login');
  }
})
*/

// 后置钩子
// router.afterEach((to, from) => {
//   alert("after each")
// })
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
