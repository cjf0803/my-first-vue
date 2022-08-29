<template>
  <div id="box">
    <h1 style="margin-bottom:20px">用户添加</h1>
    <el-form
      :model="ruleForm"
      status-icon
      :rules="rules"
      ref="ruleForm"
      label-width="100px"
      class="demo-ruleForm"
    >
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
          >添加</el-button
        >
        <el-button @click="resetForm('ruleForm')">重置</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  name: "addUser",
  data() {
    return {
      ruleForm: {
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
       
        username: [{ required: true, message: " 此项不能为空", trigger: "blur" }],
        password: [{ required: true, message: " 此项不能为空", trigger: "blur" }],
        realname: [{ required: true, message: " 此项不能为空", trigger: "blur" }],
        status: [{ required: true, message: " 此项不能为空", trigger: "blur" }],
        departid: [{ required: true, message: " 此项不能为空", trigger: "blur" }],
      },
    };
  },
   methods:{
     submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
        this.$confirm("进行添加数据, 是否继续?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "info",
      })
        .then(() => {
            
            let username=this.ruleForm.username;
            let password=this.ruleForm.password;
            let realname=this.ruleForm.realname;
            let status=this.ruleForm.status;
            let departid=this.ruleForm.departid;
            this.$http
             .get("http://localhost:8081/user/addUser?username="+username+"&password="+password+"&realname="+realname+"&status="+status+"&departid="+departid,{xhrFields: {withCredentials: true}},{crossDomain: true})
             .then(req=>{
                if(req!=null){
                  this.$router.push({name:'index'})
                   this.$message({
                  showClose: true,
                  message: "添加成功",
                  type: "success",
                });
                }
             })
        }).catch(() => {
          this.$message({
            type: "info",
            message: "已取消添加!",
          });
        });
    
      }else {
            
            return false;
          }
        })
     },

      resetForm(formName) {
        this.$refs[formName].resetFields();
      }
    }
};
</script>

<style scoped>
#box {
  width: 700px;
  height: 200px;
  margin: auto;
}
</style>