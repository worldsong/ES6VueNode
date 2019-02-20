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

// 三级路由
import Phone from './components/about/contact/Phone.vue'
import PersonName from './components/about/contact/PersonName.vue'

export const routes = [
  {path: '/',name:"homeLink", components: {
      default: Home,
      'orderingGuide': OrderingGuide,
      'delivery': Delivery,
      'history': History
    }
  },
  {path: '/menu',name:"menuLink", component: Menu},
  {path: '/admin',name:"adminLink", component: Admin,
    // beforeEnter: (to, from, next) => {
    //   // 路由的独享守卫
    //   // alert("非登录状态，不能访问此页面");
    //   // next(false);
    //
    //   if(to.path== '/login' || to.path == '/register'){
    //     next();
    //   }else {
    //     alert("还没有登录，请先登录！");
    //     next('/login');
    //   }
    // }
  },
  {path: '/about',name:"aboutLink", redirect:'/contact' , component: About, children: [
    // {path: '/about/contact', name: "contactLink", component: Contact},
    // {path: 'contact', name: "contactLink", component: Contact},
    {path: '/contact', name: "contactLink", redirect:'/personName' , component: Contact, children: [
      {path: 'phone', name: "phoneNumber", component: Phone},
      {path: '/personName', name: "personName", component: PersonName},
    ]},
    {path: 'history', name: "historyLink", component: History},
    {path: 'delivery', name: "deliveryLink", component: Delivery},
    {path: 'orderingGuide', name: "orderingGuideLink", component: OrderingGuide}
  ]},
  {path: '/login',name:"loginLink", component: Login},
  {path: '/register',name:"registerLink", component: Register},
  {path: '*', redirect: '/'},
]
