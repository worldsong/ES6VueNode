import Vue from 'vue'
import App from './App.vue'
import User from './components/User.vue'

Vue.config.productionTip = false

Vue.component('user', User);

new Vue({
  render: h => h(App),
}).$mount('#app')
