<template>
  <div>
    <div class="main">
      <table>
        <tr>
          <td>编号</td>
          <td>姓名</td>
          <td>密码</td>
          <td>类型</td>
          <td>操作</td>
        </tr>
        <tr v-for="(item, index) in list" :key="index">
          <td>{{ item.id }}</td>
          <td>{{ item.uname }}</td>
          <td>{{ item.upwd }}</td>
          <td>{{ item.type }}</td>
          <td><button @click="del(item.id)">删除</button></td>
          <td><button @click="update(item.id)">修改</button></td>
        </tr>
      </table>
      <div id="fenye">
        <button @click="fenye(1)">首页</button>
        <button @click="fenye(index - 1)">上一页</button>
        <button @click="fenye(index + 1)">下一页</button>
      </div>
    </div>
    <button @click="addUser">点击进入添加用户</button>
  </div>
</template>

<script>
export default {
  name: "index_v",
  data() {
    return {
      //前台要获取后台的list集合和index分页参数
      //在model要定义这两个变量，等待后台给这两个变量赋值
      list: [],
      index: 1,
    };
  },
  mounted() {
    this.$http
      .get("http://localhost:8082/user/findUser?index=1")
      .then((req) => {
        console.log(req.data);
        this.list = req.data.list;
        this.index = req.data.index;
      });
  },
  methods: {
    fenye: function (index) {
      this.$http
        .get("http://localhost:8082/user/findUser?index=" + index)
        .then((req) => {
          this.list = req.data.list;
          this.index = req.data.index;
        });
    },

    del: function (id) {
      if (confirm("是否删除？")) {
      this.$http
        .get("http://localhost:8082/user/delUser?id=" + id)
        .then((req) => {
            if (req.data == true) {
              alert("删除成功");
              window.location.reload();
            }
          
        });
      }
    },
    addUser: function () {
      this.$router.push({ name: "add" });
    },
    update:function(id){
      alert(id)
      this.$router.push({ name: "update" ,params:{
        id:id
      }});

    }
    
  },
};
</script>

<style>
.main {
  width: 500px;
  height: 150px;
  text-align: center;
}
.main table {
  border: 2px solid lightgreen;
  size: medium;
}
#fenye {
  margin-top: 5px;
  margin-right: 300px;
}
</style>