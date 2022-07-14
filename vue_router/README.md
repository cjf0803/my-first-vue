1.路由
    注意：项目在初始化的时候不要集成vue-router
2.安装vue-router --save
3.模块化开发在主文件main.js中导入
    import Vue from 'vue'
    import VueRouter from 'vue-router'
    Vue.use(VueRouter)
4.创建路由
    //创建路由
    const router =new VueRouter({
     routers:[
    {
      path:"/",
      name:"Helloworld",
      component:HelloWorld
    }
  ]
})
5.给出路由显示的位置
    <router-view />
6.在main.js中vue实例中注入
    router,