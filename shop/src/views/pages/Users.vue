<template>
  <div>
    <!-- 面包屑 -->
    <el-breadcrumb>
      <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item :to="{ path: '/users' }">账号列表</el-breadcrumb-item>
      <el-breadcrumb-item>promotion list</el-breadcrumb-item>
      <el-breadcrumb-item>promotion detail</el-breadcrumb-item>
    </el-breadcrumb>
    <!-- 白色内容区域 -->
    <div class="page_content">
      <div class="flex">
        <div class="input_box">
          <el-input
            v-model="searchParams.query"
            placeholder="请输入关键字"
            class="input-with-select"
            clearable="true"
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
    <!-- 新增弹窗 -->
    <el-dialog v-model="dialogFormVisible" title="新建用户">
      <!-- 表单
        | 参数名   | 参数说明 | 备注     |
        | -------- | -------- | -------- |
        | username | 用户名称 | 不能为空 |
        | password | 用户密码 | 不能为空 |
        | email    | 邮箱     | 可以为空 |
        | mobile   | 手机号   | 可以为空 |
      -->
      <el-form ref="userForm" :model="formData" :rules="rules">
        <el-form-item label="用户名称：" prop="username">
          <el-input
            v-model="formData.username"
            placeholder="请输入用户名称~"
            clearable="true"
          />
        </el-form-item>
        <el-form-item label="用户密码：" prop="password">
          <el-input
            type="password"
            v-model="formData.password"
            placeholder="请输入密码~"
            clearable="true"
          />
        </el-form-item>
        <el-form-item label="邮箱：" prop="email">
          <el-input
            v-model="formData.email"
            placeholder="请输入用户邮箱~"
            clearable="true"
          />
        </el-form-item>
        <el-form-item label="手机号：" prop="mobile">
          <el-input
            v-model="formData.mobile"
            placeholder="请输入用户手机号~"
            clearable="true"
          />
        </el-form-item>
      </el-form>
      <template #footer>
        <div>
          <el-button @click="cancel">取消</el-button>
          <el-button type="primary" @click="submitForm(userForm)"
            >确定</el-button
          >
        </div>
      </template>
    </el-dialog>
    <!-- 编辑弹窗 -->
    <el-dialog v-model="dialogFormEVisible" title="编辑用户">
      <!-- 表单
        | 参数名   | 参数说明 | 备注     |
        | -------- | -------- | -------- |
        | username | 用户名称 | 不能为空 |
        | password | 用户密码 | 不能为空 |
        | email    | 邮箱     | 可以为空 |
        | mobile   | 手机号   | 可以为空 |
      -->
      <el-form ref="userForm2" :model="formData2" :rules="rules2">
        <el-form-item label="邮箱：" prop="email">
          <el-input v-model="formData2.email" clearable="true" />
        </el-form-item>
        <el-form-item label="手机号：" prop="mobile">
          <el-input v-model="formData2.mobile" clearable="true" />
        </el-form-item>
      </el-form>
      <template #footer>
        <div>
          <el-button @click="cancel2">取消</el-button>
          <el-button type="primary" @click="submitEForm(userForm2)"
            >确定</el-button
          >
        </div>
      </template>
    </el-dialog>
    <!-- 表格 -->
    <!-- data:要展示的数据数组 -->
    <el-table
     v-loading="loading"
    element-loading-text="Loading..."
    :element-loading-spinner="svg"
    element-loading-svg-view-box="-10, -10, 50, 50"
    element-loading-background="rgba(122, 122, 122, 0.8)"
      :data="userList"
      style="width: 100%"
    >
      <el-table-column prop="username" label="姓名" width="180" />
      <el-table-column prop="email" label="邮箱" width="180" />
      <el-table-column prop="mobile" label="电话" />
      <el-table-column prop="role_name" label="角色" width="180" />
      <el-table-column prop="mg_state" label="状态" width="180">
        <template #default="scope">
          <el-switch
            v-model="scope.row.mg_state"
            @change="switchChange(scope.row)"
          />
        </template>
      </el-table-column>
      <el-table-column prop="mg_state" label="操作" width="180">
        <template #default="scope">
          <el-button type="primary" @click="editRow(scope.row)">编辑</el-button>
          <el-button type="danger" @click="deleteRow(scope.row)"
            >删除</el-button
          >
        </template>
      </el-table-column>
      <!-- mg_state 状态 -->
    </el-table>
    <!-- 分页 -->
    <el-pagination
      v-model:currentPage="searchParams.pagenum"
      v-model:page-size="searchParams.pagesize"
      :page-sizes="[1, 2, 3, 4, 5]"
      layout="total, sizes, prev, pager, next, jumper"
      :total="total"
      @size-change="searchList"
      @current-change="searchList"
    />
  </div>
</template>

<script>
import { reactive, toRefs, ref } from "vue";
import { ElMessage, ElMessageBox,} from "element-plus";
import {
  userListApi,
  userAddApi,
  userChangeStateApi,
  userChangeInfoApi,
  userDeleteApi,
} from "@/util/request.js";

export default {
  name: "users",
  //进入页面默认刷新一次
  // mounted() {
  //   if (window.location.href.indexOf("#reloaded") == -1) {
  //     window.location.href = window.location.href + "#reloaded";
  //     window.location.reload();
  //   }
  // },

  setup() {
    const data = reactive({
      searchParams: {
        query: "",
        pagesize: 5,
        pagenum: 1,
      },
      total: 0,
      userList: [],
      dialogFormVisible: false,
      dialogFormEVisible: false,
     
      formData: {
        username: "",
        password: "",
        email: "",
        mobile: "",
      },
      formData2: {
        id: "",
        email: "",
        mobile: "",
      },
      rules: {
        username: [
          { required: true, message: "此项为必填项", trigger: "blur" },
        ],
        password: [
          { required: true, message: "此项为必填项", trigger: "blur" },
        ],
        email: [
          {
            required: false,
            pattern:
              /^[A-Za-z0-9\u4e00-\u9fa5]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/,
            message: "请填写正确邮箱",
            trigger: "blur",
          },
        ],
        mobile: [
          {
            required: false,
            pattern: /^1(2|3|4|5|6|7|8|9)\d{9}$/,
            message: "请填写正确手机号",
            trigger: "blur",
          },
        ],
      },
      rules2: {
        email: [
          {
            required: false,
            pattern:
              /^[A-Za-z0-9\u4e00-\u9fa5]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/,
            message: "请填写正确邮箱",
            trigger: "blur",
          },
        ],
        mobile: [
          {
            required: false,
            pattern: /^1(2|3|4|5|6|7|8|9)\d{9}$/,
            message: "请填写正确手机号",
            trigger: "blur",
          },
        ],
      },
    });
    const addUser = () => {
      data.dialogFormVisible = true;
    };
    //

    const searchList = () => {
      userListApi(data.searchParams).then((res) => {
        if (res.data) {
          console.log("用户数据", res);
          data.userList = res.data.users;
          data.total = res.data.total;
          
        }
      });
    };
    //新增提交
    const submitForm = (formE) => {
      ElMessageBox.confirm("是否添加？", "tips", {
        confirmButtonText: "OK",
        cancelButtonText: "Cancel",
        type: "warning",
      })
        .then(() => {
          //validate
          formE.validate((res) => {
            if (!res) {
              return;
            }
            //表单验证通过
            userAddApi(data.formData).then((res) => {
              if (res) {
                ElMessage({
                  showClose: true,
                  message: "恭喜你，添加成功！",
                  type: "success",
                });
                //隐藏弹窗
                data.dialogFormVisible = false;
                //清空form
                data.formData = {
                  username: "",
                  password: "",
                  email: "",
                  mobile: "",
                };
                //重新更新列表
                searchList();
              }
            });
          });
        })
        .catch(() => {
          ElMessage({
            type: "info",
            message: "已取消！",
          });
        });
    };
    //修改提交
    const submitEForm = (formEl) => {
      ElMessageBox.confirm("是否修改？", "tips", {
        confirmButtonText: "OK",
        cancelButtonText: "Cancel",
        type: "warning",
      })
        .then(() => {
          //validate
          formEl.validate((res) => {
            if (!res) {
              return;
            }
            //表单验证通过
            userChangeInfoApi(data.formData2).then((res) => {
              if (res.data) {
                ElMessage({
                  message: "恭喜你，修改成功！",
                  type: "success",
                });
                //隐藏弹窗
                data.dialogFormEVisible = false;

                //重新更新列表
                searchList();
              }
            });
          });
        })
        .catch(() => {
          ElMessage({
            type: "info",
            message: "已取消！",
          });
        });
    };
    //状态切换
    const switchChange = (row) => {
      console.log("操作的那条数据", row);
      userChangeStateApi(row).then((res) => {
        if (res.data) {
          searchList();
        }
      });
    };
    //添加取消按钮
    const cancel = () => {
      data.dialogFormVisible = false;
      ElMessage({
        type: "info",
        message: "已取消！",
      });
    };
    //修改取消按钮
    const cancel2 = () => {
      data.dialogFormEVisible = false;
      ElMessage({
        type: "info",
        message: "已取消！",
      });
    };
    //数据编辑
    const editRow = (row) => {
      console.log("编辑的那条数据", row);
      data.dialogFormEVisible = true;
      data.formData2 = {
        id: row.id,
        email: row.email,
        mobile: row.mobile,
      };
    };
    //数据删除
    const deleteRow = (row) => {
      console.log("删除的那条数据", row);
      ElMessageBox.confirm("是否删除？", "tips", {
        confirmButtonText: "确认",
        cancelButtonText: "取消",
        type: "warning",
      })
        .then(() => {
          userDeleteApi(row).then((res) => {
            if (res) {
              ElMessage({
                message: "恭喜你，删除成功！",
                type: "success",
              });
              searchList();
            }
          });
        })
        .catch(() => {
          ElMessage({
            type: "info",
            message: "已取消！",
          });
        });
    };

    //方法初始化
    searchList();
    const userForm = ref();
    const userForm2 = ref();
    const loading = ref(false)
    const svg = `
        <path class="path" d="
          M 30 15
          L 28 17
          M 25.61 25.61
          A 15 15, 0, 0, 1, 15 30
          A 15 15, 0, 1, 1, 27.99 7.5
          L 15 15
        " style="stroke-width: 4px; fill: rgba(0, 0, 0, 0)"/>
      `
    return {
      ...toRefs(data),
      searchList,
      addUser,
      submitForm,
      submitEForm,
      userForm,
      userForm2,
      loading,
      svg,
      switchChange,
      editRow,
      deleteRow,
      cancel,
      cancel2,
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
