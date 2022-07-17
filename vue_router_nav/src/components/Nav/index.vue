<template>
  <div class="nav">
    <ul>
      <router-link to="/home">
    
       <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-zixun"></use>
        </svg>
       <span class="title">首页</span>
       
      </router-link>
      <router-link to="/order">
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-chakansousuo"></use>
        </svg>
        订单
        </router-link>
      <router-link to="/shopcar">
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-qianbao"></use>
        </svg>
        购物车
        </router-link>
      <router-link to="/mine">
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-wode"></use>
        </svg>
        我的
        </router-link>
    </ul>
  </div>
</template>

<script>
import "../../assets/iconfont"
export default {
  name: "Nav_v",
  data() {
    return {};
  },
};
</script>

<style scoped>

.nav ul {
  height: 60px;
  margin: 20px 32px 0px 0px;
  font-size: 20px;
}
.nav {
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  height: 80px;
  background-color: #fff;
}
.nav ul a {
  flex: 1;
  text-align: center;
}
.active{
  color:aqua
}
</style>