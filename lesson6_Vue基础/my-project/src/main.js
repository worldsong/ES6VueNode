import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'

import Home from './components/Home.vue'
import HelloWorld from './components/HelloWorld.vue'

Vue.config.productionTip = false

Vue.use(VueRouter);
const router = new VueRouter({
    routes: [
        {path: "/", component: Home},
        {path: "/hello", component: HelloWorld},
    ],
    mode: 'history'
})
new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
