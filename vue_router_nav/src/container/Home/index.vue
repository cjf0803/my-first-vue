<template>
  <div class="home">
    <h2>主页</h2>
    <ul>
      <router-link tag="li" to="/home/hot">热门</router-link>
      <router-link tag="li" to="/home/recommend">推荐</router-link>
    </ul>
    <i class="el-icon-edit"></i>
    <i class="el-icon-share"></i>
    <i class="el-icon-delete"></i>
    <el-button type="primary" icon="el-icon-search">搜索</el-button>
    <div>
      <el-link href="https://element.eleme.io" target="_blank"
        >默认链接</el-link
      >
      <el-link type="primary">主要链接</el-link>
      <el-link type="success">成功链接</el-link>
      <el-link type="warning">警告链接</el-link>
      <el-link type="danger">危险链接</el-link>
      <el-link type="info">信息链接</el-link>
    </div>
    <h3>图片轮播</h3>
    <el-carousel :interval="4000" type="card" height="200px">
    <el-carousel-item v-for="banner in banners" :key="banner">
      <img :src="banner" />
    </el-carousel-item>
  </el-carousel>
    <router-view />
    <Nav_v />
  
  </div>
</template>

<script>
import Nav_v from "../../components/Nav/index.vue";
export default {
  name: "Home_v",
  components: {
    Nav_v,
  },
  data() {
    return {
       banners: ["@/assets/1.jpg", "../../assets/2.jpg", "../../assets/3.jpg"],
    }
  },
};
</script>

<style>
ul {
  text-align: center;
}
ul li {
  display: inline-block;
  font-weight: 800;
  font-size: 20px;
  margin: 10px;
}
.active {
  color: blueviolet;
}
.el-carousel__item h3 {
    color: #475669;
    font-size: 14px;
    opacity: 0.75;
    line-height: 200px;
    margin: 0;
  }
  
  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }
  
  .el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
  }
</style>