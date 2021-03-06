// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import Axios from 'axios'
import qs from  'qs'

Vue.prototype.$axios=Axios
Vue.config.productionTip = false
Vue.prototype.HOST="/douyu"
//拦截器 先把请求 和响应 做处理 得到想要的数据类型或者结构
//添加请求拦截器
Axios.interceptors.request.use(function(config){
  //在发送请求之前做些什么
  if(config.method==="post"){
    config.data= qs.stringify(config.data)
  }
  console.log(config)
  return config;
},function(error){
  //对请求错误做些什么
  return Promise.reject(error);

});

//添加响应拦截器
Axios.interceptors.response.use(function(response){
  //对响应数据做点什么

  if(!response.data){
    return {
      msg:'数据返回不合理'
    }
  }
  return response;

},function(error){
  //对响应错误做点什么
  return Promise.reject(error);
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: { App },
  template: '<App/>'
})
