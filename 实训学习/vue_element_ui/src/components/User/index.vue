<template>
  <div>
    <div class="flex">
      <div class="input_box">
        <el-input
          v-model="keywords"
          placeholder="请输入关键字"
          class="input-with-select"
          clearable
        >
          <template #append>
            <el-button @click="searchList" icon="el-icon-search"></el-button>
          </template>
        </el-input>
      </div>
    </div>
    <!-- <div >
      <div class="btn">
        <el-button
          type="primary"
          icon="el-icon-circle-plus-outline"
          @click="addUser"
         
          >添加用户</el-button
        >
      </div>
      
    </div> -->
    <el-table :data="tableData" style="width: 100%;text-align: center;">
      <el-table-column prop="id" label="编号" width="120"> </el-table-column>
      <el-table-column prop="username" label="姓名" width="120"> </el-table-column>
      <el-table-column prop="password" label="密码" width="120"> </el-table-column>
      <el-table-column prop="realname" label="昵称"  width="160"> </el-table-column>
      <el-table-column prop="status.status_name" label="类型" width="160"> </el-table-column>
      <el-table-column prop="depart.depart_name" label="职业"> </el-table-column>
      <el-table-column label="操作" >
        <!-- scope作用域插槽，可以通过scope绑定当前行的数据 -->
        <template slot-scope="scope">
          <el-button
            @click="delUser(scope.row)"
            type="primary"
            icon="el-icon-delete"
            >删除</el-button
          >
          <el-button
            @click="updateUser(scope.row)"
            type="info"
            icon="el-icon-info"
            >修改</el-button
          >
        </template>
      </el-table-column>
    </el-table>
    <div class="fenye">
      <!-- 分页 -->
      <el-pagination
        background
        @current-change="changePage"
        layout="total,prev, pager, next,jumper"
        :current-page="currentPage"
        :page-size="pageSize"
        :total="total"
      >
      </el-pagination>
    </div>
  </div>
</template>

<script>
export default {
  name: "index_v",
  data() {
    return {
      uname: "",
      total: 0,
      keywords:"",
      pageSize: 1,
      index: 1,
      currentPage: 1,
      tableData: [
        {
          id: '',
          username: "",
          password: "",
          realname: '',
          status:{
            status_id:'',
            status_name:''
          },
          depart:{
            depart_id:'',
            depart_name:''
          }
        },
      ],
    };
  },
  mounted() {
    this.uname = this.$store.state.uname;
    //先从sessionStorage 取出数据
    // this.uname1=sessionStorage.getItem("uname")
    this.$http
      .get("http://localhost:8081/user/findUser?index=1")
      .then((req) => {
        console.log(req.data);
        this.tableData = req.data.list;
        this.total = req.data.count;
        this.pageSize = req.data.list.length;
      });
  },
  methods: {
    changePage: function (index) {
      this.$http
        .get("http://localhost:8081/user/findUser?index=" + index)
        .then((res) => {
          this.tableData = res.data.list;
        });
    },
    delUser: function (row) {
      console.log(row);
      this.$confirm("此操作将永久删除, 是否继续?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning",
      })
        .then(() => {
          this.$http
            .get(
              "http://localhost:8081/user/deleteUser?id=" + row.id,
              { xhrFields: { withCredentials: true } },
              { crossDomain: true }
            )
            .then((res) => {
              if (res != null) {
                this.$router.push({ name: "index" });
                this.$message({
                  showClose: true,
                  message: "删除成功",
                  type: "success",
                });
                setTimeout(() => {
                  window.location.reload();
                }, 777);
              }
            });
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "已取消删除!",
          });
        });
    },
    updateUser: function (row) {
      this.$router.push({ name: "update", params: { id: row.id } });
    },
    addUser: function () {
      this.$router.push({ name: "add" });
    },
    upload: function () {
      this.$router.push({ name: "upload" });
    },
    duobiao: function () {
      this.$router.push({ name: "duobiao" });
    },
    searchList: function () {
      this.$router.push({ name: "findUserMo",params:{keywords:this.keywords} });
      
    },
  },
};
</script>

<style scoped>
.btn {
  text-align: left;
}
.fenye {
  margin-top: 10px;
}
.input_box {
  display: flex;
  width: 200px;
  margin-right: 15px;
  margin-bottom: 10px;
}
.flex{
  float: left;
}
.el-button--info {
    color: #FFF;
    background-color: #909399;
    border-color: #909399;
    height: 38px;
}
</style>