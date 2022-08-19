<template>
  <div>
    <form action="">
      <p>姓名：<input type="text" v-model="uname" /></p>
      <p>密码：<input type="password" v-model="upwd" /></p>
      <p>类型：<input type="text" v-model="type" /></p>
      <p><input type="button" @click="addUser" value="提交" /></p>
    </form>
  </div>
</template>

<script>
export default {
  name: "add_v",
  data() {
    return {
      uname: "",
      upwd: "",
      type: '',
    };
  },
  methods: {
    addUser: function () {
      let uname = this.uname;
      let upwd = this.upwd;
      let type = this.type;

      if (confirm("是否添加？")) {
        this.$http
          .get(
            "http://localhost:8082/user/addUser?uname=" +
              uname +
              "&upwd=" +
              upwd +
              "&type=" +
              type
          )
          .then((req) => {
            if (req.data == true) {
              alert("添加成功")
              this.$router.push({ name: "index" });
            }
          })
          .catch((error) => {
            console.log(error);
          });
      }
    },
  },
};
</script>

<style>
</style>