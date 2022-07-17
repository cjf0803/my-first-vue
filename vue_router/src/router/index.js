import Vue from 'vue'
import VueRouter from 'vue-router'
import Home_v from '../container/Home'
import ShopCar_v from '../container/ShopCar'
import Order_v from '../container/Order'
import Mine_v from '../container/Mine'
import NotFound from '../container/NotFound'
import Hot_v from '@/container/Home/Hot'
import Recommend_v from '@/container/Home/Recommend'
Vue.use(VueRouter)

//创建路由
export default new VueRouter({
    linkActiveClass:'active',
    linkExactActiveClass:'currentactive',

    routes: [
        {
            path:'*',
            component:NotFound
        },
        {
            path:'/',
            redirect:'/home'//重定向 默认访问这个路由
        },
        {
            path: "/home",
            name: "Home",//可以作为跳转使用
            redirect:'/home/hot',
            component: Home_v,
            children:[
                {
                    path:'hot',
                    name:'Hot_v',
                    component:Hot_v
                },
                {
                    path:'recommend',
                    name:'Recommend_v',
                    component:Recommend_v
                }
            ]
        },
        {
            path: "/mine",
            name: "Mine",//可以作为跳转使用
            component: Mine_v
        },
        {
            path: "/order",
            name: "Order",//可以作为跳转使用
            component: Order_v
        },
        {
            path: "/shopcar",
            name: "ShopCar",//可以作为跳转使用
            component: ShopCar_v
        },
      
    ]

})
