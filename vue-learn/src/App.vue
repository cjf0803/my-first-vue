<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
  
    <VueDemo />
    <input type="text" name="" id="" v-model="text">
    <Learn :title="text" @key="receive"/>
    {{ lala }}
    <A />
    <B />
  </div>
  
</template>

<script>

import VueDemo from './components/VueDemo.vue'
import Learn from './components/Learn.vue'
import A from './components/A.vue'
import B from './components/B.vue'
export default {
  name: 'App',
  data() {
    return {
      lala:'',
      text:'',
      title:{
        name:'cjf'
      }
    }
  },
  methods:{
    receive(data){
      this.lala=data
    }
  },
  components: {
    VueDemo,
    Learn,
    A,
    B
}
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
