import { createRouter, createWebHistory } from 'vue-router'
import Home from '../components/Home.vue'
import Roles from '../views/pages/Roles.vue'
import Users from '../views/pages/Users.vue'
import Index from '../views/pages/index.vue'
import LayOutVue from '@/views/LayOut/LayOut.vue';
import store from '../store/index.js';
const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home,
        redirect:"/layout"
    },

    //登录页面
    {
      path:'/login',
      name:"login",
      component:()=>import("../views/pages/login.vue")//懒加载
    },
    
    {
      path:'/layout',
      name:'layout',
      component:LayOutVue,
      redirect:"/index",
      children:[
        {
          path:'/users',
          name:'users',
          component:Users
        },
        {
          path:'/roles',
          name:'Roles',
          component:Roles
        },
        {
          path:'/index',
          name:'index',
          component:Index
        },

      ]
    },
    
]
const router = createRouter({
    // history: createWebHashHistory(),
    history: createWebHistory(),
    routes
})
router.beforeEach((to,from,next)=>{
/*
  to:从哪个页面
  from:到哪个页面
  next：只有执行next()页面才会进行跳转
*/

//判断用户是否登录
  
  const uInfo=store.state.uInfo.userInfo
  if(!uInfo.username){

    //未登录,跳转到login
    if(to.path==="/login"){
      next()
      return
    }
    next("/login")
    
  }else{
    next()
  }
})
//

export default router