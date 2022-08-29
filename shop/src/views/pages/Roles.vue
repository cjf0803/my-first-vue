<template>
  <div id="box">
    <!-- 面包屑 -->
    <el-breadcrumb>
      <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item :to="{ path: '/roles' }">角色列表</el-breadcrumb-item>
      <el-breadcrumb-item>promotion list</el-breadcrumb-item>
      <el-breadcrumb-item>promotion detail</el-breadcrumb-item>
    </el-breadcrumb>
    <!-- 白色内容区域 -->
    <div class="page_content">
      <el-button type="primary" @click="addRoles" class="addRoles">新建角色</el-button>

      <!-- 表格 -->
      <!-- data:要展示的数据数组 -->
      <el-table :data="rolesList" style="width: 100%">
        <el-table-column prop="roleName" label="角色名" />
        <el-table-column prop="roleDesc" label="角色描述" />

        <el-table-column prop="" label="操作" width="180">
          <template #default="scope">
            <el-button type="primary" @click="editRow(scope.row)"
              >编辑</el-button
            >
            <el-button type="danger" @click="deleteRow(scope.row)"
              >删除</el-button
            >
          </template>
        </el-table-column>
        <!-- mg_state 状态 -->
      </el-table>
    </div>
    <!-- 新增编辑弹窗 -->
    <el-dialog
      v-model="dialogFormVisible"
      @close="clearForm"
      :title="editRowData.id ? '编辑角色' : '添加角色'"
    >
      <!-- 表单
        | 参数名   | 参数说明 | 备注                  |
        | -------- | -------- | --------------------- |
        | :id      | 角色 ID  | 不能为空`携带在url中` | 只有编辑保存的时候有
        | roleName | 角色名称 | 不能为空              |
        | roleDesc | 角色描述 | 可以为空              |
      -->
      <el-form ref="userForm" :model="formData" :rules="rules">
        <el-form-item label="角色名称：" prop="roleName">
          <el-input
            v-model="formData.roleName"
            placeholder="请输入角色名称~"
            clearable="true"
          />
        </el-form-item>
        <el-form-item label="角色描述：" prop="roleDesc">
          <el-input
            v-model="formData.roleDesc"
            placeholder="请输入角色描述~"
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
  </div>
</template>

<script>
import { reactive, toRefs, ref } from "vue";
import { getRolesApi, addRolesApi, editRolesApi,rolesDeleteApi } from "@/util/request.js";
import { ElMessage, ElMessageBox } from "element-plus";
export default {
  name: "roles",
  setup() {
    const data = reactive({
      rolesList: [],
      dialogFormVisible: false,
      formData: {
        id: "",
        roleName: "",
        roleDesc: "",
      },
      editRowData: {},
      rules: {
        roleName: {
          required: true,
          message: "此项为必填",
          trigger: "blur",
        },
      },
    });
    const getList = () => {
      getRolesApi().then((res) => {
        data.rolesList = res.data;
      });
    };
    //新增or编辑提交
    const submitForm = (formE) => {
      if (data.formData.id) {
        ElMessageBox.confirm("是否修改？", "tips", {
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
              editRolesApi(data.formData).then((res) => {
                if (res.data) {
                  ElMessage({
                    message: "恭喜你，修改成功！",
                    type: "success",
                  });
                  //隐藏弹窗
                  data.dialogFormVisible = false;

                  //重新更新列表
                  getList();
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
      } else {
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
              addRolesApi(data.formData).then((res) => {
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
                    roleName: "",
                    roleDesc: "",
                  };
                  //重新更新列表
                  getList();
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
      }
    };
    const addRoles = () => {
      data.editRowData = "";
      data.dialogFormVisible = true;
    };
    const editRow = (row) => {
      data.dialogFormVisible = true;
      data.editRowData = row;
      const { roleName, roleDesc, id } = row;
      data.formData = {
        id,
        roleName,
        roleDesc,
      };
    };
    //添加取消按钮
    const cancel = () => {
      data.dialogFormVisible = false;
      ElMessage({
        type: "info",
        message: "已取消！",
      });
    };
    //清空表单
    const clearForm = () => {
      //清空form
      data.formData = {
        roleName: "",
        roleDesc: "",
      };
    };
    const deleteRow = (row) => {
      
      ElMessageBox.confirm("是否删除？", "tips", {
        confirmButtonText: "确认",
        cancelButtonText: "取消",
        type: "warning",
      })
        .then(() => {
          rolesDeleteApi(row).then((res) => {
            if (res) {
              ElMessage({
                message: "恭喜你，删除成功！",
                type: "success",
              });
              getList();
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
    //初始化
    getList();
    const userForm = ref();
    return {
      ...toRefs(data),
      editRow,
      deleteRow,
      userForm,
      submitForm,
      addRoles,
      cancel,
      clearForm,
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
.addRoles{
  margin-right:1200px ;
  margin-bottom: 10px;
}
#box{
  overflow:scroll;
  overflow-x: hidden;   

  
 
}
</style>
