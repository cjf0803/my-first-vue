<template>
  <div id="app">
    <img src="./assets/logo.png">
    <ul>
      <router-link tag="li" :to="{name:'LearnVue',params:{id:helloparams}}">learn</router-link>
      <router-link tag="li" :to="{name:'HelloWorld'}">hello</router-link>
    </ul>
    <button type="button" @click="goto">点我一下</button>
    <router-view />
  </div>
</template>

<script>


export default {
  name: 'App',
  data() {
    return {
      helloparams:'hellolalal'
    }
  },
  methods: {
    goto(){
      this.$router.push('learn')
    }
  },
  
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
ul li{
  list-style: none;
 display: inline-block;
  margin:0 20px;
  text-decoration: underline;
  cursor: pointer;
}
</style>
