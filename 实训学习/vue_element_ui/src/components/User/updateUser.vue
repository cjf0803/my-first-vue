<template>
  <div id="box">
    <h1>用户修改</h1>
    <el-form
      :model="ruleForm"
      status-icon
      :rules="rules"
      ref="ruleForm"
      label-width="100px"
      class="demo-ruleForm"
    >
      <el-form-item label="编号" prop="id">
        <el-input
          v-model="ruleForm.id"
          autocomplete="off"
          readonly="true"
        ></el-input>
      </el-form-item>
      <el-form-item label="用户名" prop="username">
        <el-input v-model="ruleForm.username" autocomplete="off"></el-input>
      </el-form-item>

      <el-form-item label="密码" prop="password">
        <el-input
          type="password"
          v-model="ruleForm.password"
          autocomplete="off"
        ></el-input>
      </el-form-item>
      <el-form-item label="昵称" prop="realname">
        <el-input v-model="ruleForm.realname" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item label="类型" prop="status">
        <el-select v-model="ruleForm.status" clearable placeholder="请选择类型哇~" style="width:100%">
          <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          >
          </el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="职业" prop="departid">
        <el-select v-model="ruleForm.departid" clearable placeholder="请选择职业哇~" style="width:100%">
          <el-option
            v-for="item in options1"
            :key="item.value1"
            :label="item.label1"
            :value="item.value1"
          >
          </el-option>
        </el-select>
      </el-form-item>

      <el-form-item>
        <el-button type="primary" @click="submitForm('ruleForm')"
          >提交</el-button
        >
        <el-button @click="resetForm('ruleForm')">重置</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  name: "updateUser",
  data() {
    return {
      ruleForm: {
        id: "",
        username: "",
        password: "",
        realname: "",
        status: "",
        departid: "",
      },
       options: [{
          value: 0,
          label: '借阅者'
        }, {
          value: 1,
          label: '管理员'
        }, {
          value: 2,
          label: '工作人员'
        }
        ],
        
        options1: [{
          value1: '1',
          label1: '教师'
        }, {
          value1: '2',
          label1: '程序员'
        }, {
          value1: '3',
          label1: '工人'
        }
        , {
          value1: '4',
          label1: 'Boss'
        }
        , {
          value1: '5',
          label1: '学生'
        }
        ],
       
      rules: {
        id: [{ required: true, message: " 此项不能为空", trigger: "blur" }],
        username: [
          { required: true, message: " 此项不能为空", trigger: "blur" },
        ],
        password: [
          { required: true, message: " 此项不能为空", trigger: "blur" },
        ],
        realname: [
          { required: true, message: " 此项不能为空", trigger: "blur" },
        ],
        status: [{ required: true, message: " 此项不能为空", trigger: "blur" }],
        departid: [
          { required: true, message: " 此项不能为空", trigger: "blur" },
        ],
      },
    };
  },
  mounted() {
    let id = this.$route.params.id;

    this.$http
      .get(
        "http://localhost:8081/user/findById?id=" + id,
        { xhrFields: { withCredentials: true } },
        { crossDomain: true }
      )
      .then((req) => {
        console.log(req.data);
        this.ruleForm.id = req.data[0].ID;
        this.ruleForm.username = req.data[0].USERNAME;
        this.ruleForm.password = req.data[0].PASSWORD;
        this.ruleForm.realname = req.data[0].REALNAME;
        this.ruleForm.status = req.data[0].STATUS;
        this.ruleForm.departid = req.data[0].DEPARTID;
      });
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          this.$confirm("进行修改数据, 是否继续?", "提示", {
            confirmButtonText: "确定",
            cancelButtonText: "取消",
            type: "info",
          })
            .then(() => {
              let id = this.ruleForm.id;
              let username = this.ruleForm.username;
              let password = this.ruleForm.password;
              let realname = this.ruleForm.realname;
              let status = this.ruleForm.status;
              let departid = this.ruleForm.departid;
              this.$http
                .get(
                  "http://localhost:8081/user/updateUser?id=" +
                    id +
                    "&username=" +
                    username +
                    "&password=" +
                    password +
                    "&realname=" +
                    realname +
                    "&status=" +
                    status +
                    "&departid=" +
                    departid,
                  { xhrFields: { withCredentials: true } },
                  { crossDomain: true }
                )
                .then((req) => {
                  if (req.data != null) {
                    this.$router.push({ name: "index" });
                    this.$message({
                      showClose: true,
                      message: "修改成功",
                      type: "success",
                    });
                  }
                });
            })
            .catch(() => {
              this.$message({
                type: "info",
                message: "已取消修改!",
              });
            });
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },

    resetForm(formName) {
      this.$refs[formName].resetFields();
    },
  },
};
</script>

<style scoped>
#box {
  width: 700px;
  height: 200px;
  margin: auto;
}
</style>