import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/pages/index'
import Home from '@/pages/home'
import Artists from '@/pages/artists'
import Listcate from '@/pages/listcate'
import Search from '@/pages/search'
import Ucenter from '@/pages/ucenter'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      redirect:'/home',
      component: Index,
      children:[
        {
          path: '/home',
          name: 'Home',
          component: Home
        }
        , {
          path: '/artists',
          name: 'Artists',
          component: Artists
        }
        , {
          path: '/listcate',
          name: 'Listcate',
          component: Listcate
        }
        , {
          path: '/search',
          name: 'Search',
          component: Search
        }, {
          path: '/ucenter',
          name: 'Ucenter',
          component: Ucenter
        }
      ]
    }, 
    
  ]
})
