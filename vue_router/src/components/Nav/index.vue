<template>
  <div class="Nav">
    <ul>
      <router-link tag="li" to="/home">
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-zixun"></use>
        </svg>
        <span class="title">首页</span>
      </router-link>
      <router-link tag="li" to="/mine">
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-wode"></use>
        </svg>
        <span class="title">我的</span>
      </router-link>
      <router-link tag="li" to="/order">
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-kabao"></use>
        </svg>
        <span class="title">订单</span></router-link>
      <router-link tag="li" to="/shopcar">
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-huodong"></use>
        </svg>
        <span class="title">购物车</span></router-link>
    </ul>
  </div>
</template>

<script>
import "../../assets/iconfont"
export default {
  name: "Nav_v",
};
</script>

<style scoped>
.Nav {
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  height: 70px;
  background-color: #f1f1f1;
}
.Nav ul {
  height: 50px;
  display: flex;
}
.Nav ul li {
  /* text-align: center; */
  list-style: none;
  flex: 1;
  font-size: 15px;
  font-weight: 800;
}
.title {
  /* margin-top: 5px; */
  display: block;
}
.active{
    color: aquamarine;
}
</style>