import Vue from 'vue'
import Router from 'vue-router'
import Home_v from '@/container/Home'
import Mine_v from '@/container/Mine'
import Order_v from '@/container/Order'
import ShopCar_v from '@/container/ShopCar'
import NotFound from '@/container/NotFound'
import Recommend from '@/container/Home/SubPage/recommend'
import Hot from '@/container/Home/SubPage/hot'
Vue.use(Router)

export default new Router({
  linkActiveClass:'active',
  routes: [
    {
      path:'*',
      component:NotFound
    },
    {
      path: '/',
      redirect:'/home',
      
    },
    {
      path:'/home',
      name:'Home',
      component:Home_v,
      redirect:'/home/hot',
      children:[
        {
          path:'recommend',
          component:Recommend
        },
        {
          path:'hot',
          component:Hot
        }
    
      ]
    },
    {
      path:'/mine',
      name:'Mine',
      component:Mine_v
    },
    {
      path:'/order',
      name:'Order',
      component:Order_v
    },
    {
      path:'/shopcar',
      name:'ShopCar',
      component:ShopCar_v
    }
  ]
})
