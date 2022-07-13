// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'

Vue.config.productionTip = false
//全局自定义指令
// Vue.directive("focus",{
//   //当前指令的生命周期
//   inserted:function(el){
//     console.log(el)
//     el.focus();
//   },
//   bind:function(el,binding){
//     console.log("只执行一次")
//     console.log(binding)
//   },
//   update:function(el){
//     console.log("更新")
//   }
// })
/* eslint-disable no-new */
new Vue({
  el: '#app',
  data() {
    return {
      foo:'hello-foo'
    }
  },
  components: { App },
  template: '<App/>'
})
