<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <VueDemo />
    <input type="text" name="" id="" v-model="text">
    <Learn :title="text" @key="receive"/>
    
    {{ lala }}
    <button @click="change" type="button">切换一下</button>
    <!-- <component :is="currentComponent"></component> -->
    <keep-alive>
      <component :is="currentComponent"></component>
    </keep-alive>
    
  </div>
  
</template>

<script>

import VueDemo from './components/VueDemo.vue'
import Learn from './components/Learn.vue'
import A_1 from './components/A'
import B_1 from './components/B'
export default {
  name: 'App',
  data() {
    return {
      lala:'',
      text:'',
      title:{
        name:'cjf'
      },
      currentComponent:A_1,
      flag:false,
    }
  },
  
  methods:{
    receive(data){
      this.lala=data
    },
    change(){
      if(this.flag){
        this.currentComponent=A_1
        this.flag=false
      }else{
        this.currentComponent=B_1
        this.flag=true
      }
    }
  },
  components: {
    VueDemo,
    Learn,
    A_1,
    B_1
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
