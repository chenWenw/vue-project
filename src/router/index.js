import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'

import Home from '@/components/tabbar/home'
import Search from '@/components/tabbar/search'
import Shopcar from '@/components/tabbar/shopcar'
import Member from '@/components/tabbar/member'

Vue.use(Router)

export default new Router({
  linkActiveClass:'mui-active',
  routes: [
  {path: '/',component: HelloWorld},
  {path:'/home',component:Home},
   {path:'/search',component:Search},
   {path:'/member',component:Member},
   {path:'/shopcar',component:Shopcar}
    
  ]
})
