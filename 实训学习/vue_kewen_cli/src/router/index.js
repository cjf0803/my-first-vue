import Vue from 'vue'
import VueRouter from 'vue-router'
import login from '../components/login.vue'
import Index_v from '../components/index.vue'
import add_v from '../components/add.vue'
import update_v from '../components/update.vue'
Vue.use(VueRouter)
export default new VueRouter({
     routes : [
        {
          path: '/',
          name: 'login',
          component: login
        },
        {
            path: '/index',
            name: 'index',
            component: Index_v
          },
          {
            path: '/add',
            name: 'add',
            component: add_v
          },
          {
            path: '/update',
            name: 'update',
            component: update_v
          },


        
      ]
})





