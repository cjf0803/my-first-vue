import Vue from 'vue'
import Router from 'vue-router'
import Index_v from '@/pages/index'
import Home_v from '@/pages/home'
import Artists from '@/pages/artists'
import Listcate from '@/pages/listcate'
import Search from '@/pages/search'
import Ucenter from '@/pages/ucenter'
import ArtistsDetails from '@/pages/artistsDetails/artistsDetails.vue'
import HotList from '@/pages/musiclist/hot_list.vue'
import KingList from '@/pages/musiclist/king_list.vue'
import NewsList from '@/pages/musiclist/news_list.vue'
import MusicPlay from '@/pages/musicplay.vue'
import MvPlay from '@/pages/mvplay.vue'
import MoreList from '@/pages/morelist.vue'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path:"/musicplay",
      name:'musicplay',
      component:MusicPlay

    },
    {
      path:"/mvplay",
      name:'mvplay',
      component:MvPlay

    },
    {
      path: '/',
      component:Index_v,
      redirect:'home',
      children:[
        {
          path: 'home',
          name: 'Home',
          component: Home_v,
          children:[
            {
              path:'hot',
              component:HotList
            },{
              path:'news',
              component:NewsList
            },{
              path:'king',
              component:KingList
            }
          ]
        }
        , {
          path: 'artists',
          name: 'Artists',
          component: Artists
        }
        , {
          path: 'listcate',
          name: 'Listcate',
          component: Listcate
        }
        , {
          path: 'search',
          name: 'Search',
          component: Search
        }, {
          path: 'ucenter',
          name: 'Ucenter',
          component: Ucenter
        },{
          path:"/artistsdetails",
          name:'ArtistsDetails',
          component:ArtistsDetails

        },
        {
          path:'more',
          name:'MoreList',
          component:MoreList

        }
      ]
    }
    
  ]
})
