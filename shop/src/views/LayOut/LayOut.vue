<template>
  <div class="common-layout">
    <el-container>
      <el-header class="common-header flex-float">
        <div class="flex">
          <img class="logo" src="../../assets/logo.png" alt="" />
          <h1 class="title">商铺后台管理系统</h1>
        </div>
        <el-button type="danger" @click="loginOut">退出</el-button>
      </el-header>
      <el-container>
        <el-aside class="common-aside" width="220px">
          <el-menu background-color="none" text-color="#fff" :router="true">
            <el-sub-menu index="1">
              <template #title>
                <el-icon><User /></el-icon>
                <span>账号管理</span>
              </template>
              <el-menu-item-group>
                <el-menu-item index="/users">账号列表</el-menu-item>
              </el-menu-item-group>
            </el-sub-menu>

            <el-sub-menu index="2">
              <template #title>
                <el-icon><Discount /></el-icon>
                <span>角色管理</span>
              </template>
              <el-menu-item-group>
                <el-menu-item index="/roles">角色列表</el-menu-item>
              </el-menu-item-group>
            </el-sub-menu>
          </el-menu>
        </el-aside>
        <el-main class="el-main">
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import { useRouter } from 'vue-router';
import { useStore } from 'vuex'

export default {
  name: "layout",
  setup() {
    const store=useStore()
    const router=useRouter()
    const loginOut=()=>{
      localStorage.removeItem("loginData")
      store.commit("setUserInfo",{});
      router.push({
        path:'/login'
      })
    }
    return{
      loginOut
    }
  }
};
</script>

<style>
.common-header {
  background: rgb(40, 45, 53);
  height: 110px;
  display: flex;
}
.common-aside {
  background: rgb(48, 55, 65);
}
.el-container {
  height: 100vh;
}
.logo {
  margin-top: 10px;
  width: 86px;
  height: 95px;
}
.title {
  color: #fff;
  font-weight: bolder;
  font-size: larger;
}
.el-main{
  background: #efefef;
}
</style>