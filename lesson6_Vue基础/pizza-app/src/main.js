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

// 二级路由
import Contact from './components/about/Contact.vue'
import Delivery from './components/about/Delivery.vue'
import History from './components/about/History.vue'
import OrderingGuide from './components/about/OrderingGuide.vue'

Vue.config.productionTip = false

Vue.use(VueRouter);

const routes = [
  {path: '/',name:"homeLink", component: Home},
  {path: '/menu',name:"menuLink", component: Menu},
  {path: '/admin',name:"adminLink", component: Admin},
  {path: '/about',name:"aboutLink", component: About, children: [
    // {path: '/about/contact', name: "contactLink", component: Contact},
    // {path: 'contact', name: "contactLink", component: Contact},
    {path: '/contact', name: "contactLink", component: Contact},
    {path: 'history', name: "historyLink", component: History},
    {path: 'delivery', name: "deliveryLink", component: Delivery},
    {path: 'orderingGuide', name: "orderingGuideLink", component: OrderingGuide}
  ]},
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
