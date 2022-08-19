<template>
  <div>
    <form action="">
      <p>用户名：<input type="text" v-model="uname" /></p>
      <p>密码：<input type="password" v-model="upwd" /></p>
      <p><input type="button" value="提交" @click="login" /></p>
    </form>
  </div>
</template>

<script>
export default {
  name: "login_v",
  data() {
    return {
      uname: "",
      upwd: "",
    };
  },
  methods: {
    login: function () {
      let uname = this.uname;
      let upwd = this.upwd;
      this.$http
        .get(
          "http://localhost:8082/user/login?uname=" + uname + "&upwd=" + upwd
        )
        .then((req) => {
          console.log(req.data);
          alert(req.data);
          this.$router.push({ name: 'index'});
        });
    },
  },
};
</script>

<style>
</style>