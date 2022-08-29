import Vue from 'vue'
import VueRouter from 'vue-router'
import ElementUI from 'element-ui'
import login from '../components/login.vue'
import register_v from '../components/register.vue'
import Index_v from '../components/User/index.vue'
import add_v from '../components/User/addUser.vue'
import update_v from '../components/User/updateUser.vue'
import addBook from '../components/Book/addBook.vue'
import bookIndex from '../components/Book/bookIndex.vue'
import updateBook from '../components/Book/updateBook.vue'
import Index1_v from '../components/index1.vue'
import welcome_v from '../components/customer/welcome.vue'
import findUserMo from '../components/User/findUserMo.vue'
import findBookMo from '../components/Book/findBookMo.vue'
import findCustomerMo from '../components/customer/findCustomerMo.vue'

import findLendMo from '../components/Lend/findLendMo.vue'
import updateLend from '../components/Lend/updateLend.vue'
import lendIndex from '../components/Lend/lendIndex.vue'
Vue.use(VueRouter)
Vue.use(ElementUI)
export default new VueRouter({
  routes: [
    {
      path: '/',
      name: 'login',
      component: login
    },
    {
      path: '/register',
      name: 'register',
      component: register_v
    },
    
    
    {
      path: '/welcome',
      name: 'welcome',
      component: welcome_v,
      children:[{
        path: '/findCustomerMo',
        name: 'findCustomerMo',
        component: findCustomerMo
      }]
    },
    {
      path: '/index1',
      name: 'index1',
      component: Index1_v,
      redirect:'index',
      children: [{
        path: '/index',
        name: 'index',
        component: Index_v
      },
      {
        path: '/update',
        name: 'update',
        component: update_v
      },
      {
        path: '/bookIndex',
        name: 'bookIndex',
        component: bookIndex
      },
      {
        path: '/updateBook',
        name: 'updateBook',
        component: updateBook
      },
      {
        path: '/add',
        name: 'add',
        component: add_v
      },
      {
        path: '/addBook',
        name: 'addBook',
        component: addBook
      },
      {
        path: '/findUserMo',
        name: 'findUserMo',
        component: findUserMo
      },
      {
        path: '/findBookMo',
        name: 'findBookMo',
        component: findBookMo
      },
   
      {
        path: '/findLendMo',
        name: 'findLendMo',
        component: findLendMo
      },
      {
        path: '/lendIndex',
        name: 'lendIndex',
        component: lendIndex
      },
      {
        path: '/updateLend',
        name: 'updateLend',
        component: updateLend
      },
      ]
    },



  ]
})





