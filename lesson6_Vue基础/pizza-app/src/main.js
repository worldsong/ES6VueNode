// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App'

import Home from './components/Home.vue'
import Menu from './components/Menu.vue'
import Admin from './components/Admin.vue'
import About from './components/about/About.vue'
import Login from './components/Login.vue'
import Register from './components/Register.vue'

Vue.config.productionTip = false

Vue.use(VueRouter);

const routes = [
  {path: '/',name:"homeLink", component: Home},
  {path: '/menu',name:"menuLink", component: Menu},
  {path: '/admin',name:"adminLink", component: Admin},
  {path: '/about',name:"aboutLink", component: About},
  {path: '/login',name:"loginLink", component: Login},
  {path: '/register',name:"registerLink", component: Register},
  {path: '*', redirect: '/'},
]

const router = new VueRouter({
  routes,
  mode: 'history'
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
