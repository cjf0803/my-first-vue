// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import Axios from 'axios'
import ElementUI from 'element-ui'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'
import 'element-ui/lib/theme-chalk/index.css'
// import { Button, Select,Row,Container } from 'element-ui';
import router from './router'
 Vue.use(ElementUI)
Vue.prototype.$axios=Axios
Vue.config.productionTip = false
Vue.use(VueAwesomeSwiper)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
