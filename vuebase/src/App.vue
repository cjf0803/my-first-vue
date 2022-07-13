<template>
  <div id="app">
    <img src="./assets/logo.png">
    <HelloWorld/>
    <filterDemoVue />
    <!-- <animVue /> -->
    <!-- <parentsVue /> -->
    <!-- <musicVue /> -->
    <!-- <slotDemoVue> -->
    <!-- 具名插槽 -->
    <!-- <div slot="v1">
      <div class="v1">
          {{ msg }}
       </div >
     </div> -->
     <!-- <template slot="v2">
      <div class="v2">
          这是插槽2
       </div >
     </template> -->
     <!-- <div slot-scope="data">
      <h1>{{ data.ct}}</h1>
     </div>
    </slotDemoVue>  -->
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld'
import parentsVue from './components/parents.vue'
import musicVue from './components/music.vue'
import slotDemoVue from './components/slotDemo.vue'
import animVue from './components/anim.vue'
import filterDemoVue from './components/filterDemo.vue'

export default {
  name: 'App',
  data() {
    return {
      msg:'这是插槽1'
    }
  },
  components: {
    HelloWorld,
    parentsVue,
    musicVue,
    slotDemoVue,
    animVue,
    filterDemoVue
    
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
