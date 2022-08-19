<template>
  <div>
    <!-- 面包屑 -->
    <el-breadcrumb :separator-icon="ArrowRight">
      <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>账号列表</el-breadcrumb-item>
      <el-breadcrumb-item>promotion list</el-breadcrumb-item>
      <el-breadcrumb-item>promotion detail</el-breadcrumb-item>
    </el-breadcrumb>
    <!-- 白色内容区域 -->
    <div class="page_content">
      <div class="flex">
        <div class="input_box">
          <el-input
            v-model="keyWord"
            placeholder="请输入关键字"
            class="input-with-select"
          >
            <template #append>
              <el-button @click="searchList"
                ><el-icon><Search /></el-icon
              ></el-button>
            </template>
          </el-input>
        </div>
        <el-button type="primary" @click="addUser">新建用户</el-button>
      </div>
    </div>
    <!-- 表格 -->
    <!-- data:要展示的数据数组 -->
    <el-table :data="userList" style="width: 100%">
      <el-table-column prop="username" label="姓名" width="180" />
      <el-table-column prop="email" label="邮箱" width="180" />
      <el-table-column prop="mobile" label="电话"  />
      <el-table-column prop="role_name" label="角色" width="180" />
      <el-table-column prop="mg_state" label="状态" width="180" >
        <template #default="scope">
          <el-switch v-model="scope.row.mg_state" />
        </template>
      </el-table-column>
      <el-table-column prop="mg_state" label="操作" width="180" >
        <template #default="scope">
          <el-button type="primary">编辑</el-button>
          <el-button type="danger">删除</el-button>
        </template>
      </el-table-column>
      <!-- mg_state 状态 -->

    </el-table>
  </div>
</template>

<script>
import { reactive, toRefs } from "vue";
import { userListApi } from "@/util/request.js";
export default {
  name: "users",
  setup() {
    const data = reactive({
      keyWord: "",
      searchParams: {
        query: "",
        pagesize: 5,
        pagenum: 1,
      },
      userList: [],
    });
    const addUser = () => {};

    const searchList = () => {
      userListApi(data.searchParams).then(res => {
        if (res.data) {
          console.log("用户数据", res);
          data.userList = res.data.users;
        }
      });
    };
    //方法初始化
    searchList();
    return {
      ...toRefs(data),
      searchList,
      addUser,
    };
  },
};
</script>

<style>
.input_box {
  display: flex;
  width: 200px;
  margin-right: 15px;
}
</style>
