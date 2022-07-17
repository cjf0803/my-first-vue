<template>
  <div class="home">
    主页
    <ul>
      <router-link tag="li" to="/home/hot">热门</router-link>
      <router-link tag="li" to="/home/recommend">推荐</router-link>
    </ul>
    <router-view />
    <Nav_v />
  </div>
</template>

<script>
import Nav_v from '../../components/Nav/index.vue'
export default {
    name: "Home_v",
    data() {
        return {};
    },
    components: { Nav_v }
}
</script>

<style>
ul{
  display: flex;
}
ul li{
  list-style: none;
  cursor: pointer;
  display: inline-block;
  font-size: 20px;
  font-weight: 800;
  flex:1;
}
.active{
  color:blueviolet
}
</style>