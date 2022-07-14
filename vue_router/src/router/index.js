import Vue from 'vue'
import VueRouter from 'vue-router'
import HelloWorld from '../components/HelloWorld.vue'
import LearnVue from '@/components/LearnVue'
import HttpVue from '../components/http.vue'
import BaseVue from '../components/base.vue'
Vue.use(VueRouter)

//创建路由
export default new VueRouter({

    routes: [
        {
            path: "/hello",
            name: "HelloWorld",//可以作为跳转使用
            component: HelloWorld
        },
        {
            path: '/learn',
            name: 'LearnVue',
            component: LearnVue,
            children: [
                {
                    path: 'base',
                    component: BaseVue
                },
                {
                    path: 'http',
                    component: HttpVue
                }
            ]
        }
    ]

})
