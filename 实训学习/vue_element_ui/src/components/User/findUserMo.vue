<template>
  <div>
    <h1>这是模糊查询</h1>
    <div class="flex">
      <div class="input_box">
        <el-input
          v-model="keywords"
          placeholder="请输入关键字"
          class="input-with-select"
          
        >
          <template #append>
            <el-button @click="searchList" icon="el-icon-search"></el-button>
          </template>
        </el-input>
      </div>
    </div>
    
    
    <el-table :data="tableData" style="width: 100%; text-align: center">
      <el-table-column prop="id" label="编号" width="120"> </el-table-column>
      <el-table-column prop="username" label="姓名" width="120"> </el-table-column>
      <el-table-column prop="password" label="密码" width="120"> </el-table-column>
      <el-table-column prop="realname" label="昵称"  width="160"> </el-table-column>
      <el-table-column prop="status.status_name" label="类型" width="160"> </el-table-column>
      <el-table-column prop="depart.depart_name" label="职业"> </el-table-column>
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
  name: "findUserMo",
  data() {
    return {
      uname: "",
      total: 0,
      pageSize: 0,
      index: 1,
      keywords:'',
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
      .get("http://localhost:8081/user/findUserMo?index=1&username="+this.$route.params.keywords)
      .then((req) => {
        console.log(req.data);
        if(this.$route.params.keywords!=null){
        this.$message({
                  showClose: true,
                  message: "查询成功",
                  type: "success",
                });
        }
        this.tableData = req.data.list;
        this.total = req.data.count;
        this.pageSize = req.data.list.length;
      });
  },
  methods: {
    changePage: function (index) {
      this.$http
        .get("http://localhost:8081/user/findUserMo?index=" + index+"&username="+this.$route.params.keywords)
        .then((res) => {
          this.tableData = res.data.list;

        });
    },
    searchList: function () {
       this.$http
      .get("http://localhost:8081/user/findUserMo?index=1&username="+this.keywords)
      .then((req) => {
       
        this.tableData = req.data.list;
        this.total = req.data.count;
        this.pageSize = req.data.list.length;
      });

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
</style>