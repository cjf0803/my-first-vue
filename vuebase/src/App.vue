<template>
  <div id="app">
    <img src="./assets/logo.png">
    <HelloWorld/>
    <!-- <parentsVue /> -->
    <musicVue />
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld'
import parentsVue from './components/parents.vue'
import musicVue from './components/music.vue'

export default {
  name: 'App',
  components: {
    HelloWorld,
    parentsVue,
    musicVue
    
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
