import { createStore } from 'vuex'
import number from './state/num.state.js'
import uInfo from './state/userInfo.state.js'
export default createStore({
 
  modules: {
    number,
    uInfo
  }
})
