import Vue from 'vue'
import App from './App.vue'
import router from './router'
import axios from 'axios'
Vue.config.productionTip = false
//给axios定义一个名字$http
Vue.prototype.$http=axios
new Vue({
  render: h => h(App),
  router,
  axios
}).$mount('#app')
