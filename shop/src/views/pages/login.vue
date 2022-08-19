<template>
  <div class="login_wrap">
    <div class="form_wrap">
      <el-form
        ref="formRef"
        :model="loginData"
        label-width="80px"
        class="demo-dynamic"
      >
        <el-form-item
          prop="username"
          label="用户名"
          :rules="[
            {
              required: true,
              message: '此项为必填项',
              trigger: 'blur',
            },
          ]"
        >
          <el-input v-model="loginData.username" />
        </el-form-item>
        <el-form-item
          prop="password"
          label="密码"
          :rules="[
            {
              required: true,
              message: '此项为必填项',
              trigger: 'blur',
            },
          ]"
        >
          <el-input type="password" v-model="loginData.password" />
        </el-form-item>
        <el-button type="primary" class="login_btn" @click="handlerLogin"
          >登录</el-button
        >
      </el-form>
    </div>
  </div>
</template>

<script>
import { reactive, toRefs } from "vue";
import { useStore } from "vuex";
import { useRouter } from "vue-router";
import { loginApi } from "@/util/request";
export default {
  name: "login",
  setup() {
    const store = useStore();
    const router = useRouter();
    // const count=store.state.number.count
    const data = reactive({
      loginData: {
        username: "",
        password: "",
      },
      // num:count
    });
    const handlerLogin = () => {
      //请求后台接口
      //默认用户：admin/123456
      loginApi(data.loginData).then(res=> {
        if (res.data) {
          store.commit("setUserInfo",res.data);
          localStorage.setItem("loginData", JSON.stringify(res.data));
          //跳转/users
          router.push({
            path: "/",
          });
        }
     
      });
    };
    return {
      ...toRefs(data),
      handlerLogin,
    };
  },
};
</script>

<style scoped>
.login_wrap {
  width: 100%;
  height: 100vh;
  background: rgb(126, 126, 213);
  position: relative;
}
.form_wrap {
  position: fixed;
  top: 50%;
  left: 50%;
  width: 30%;
  height: 20%;
  transform: translate(-50%, -50%);
  background: white;
  border-radius: 5px;
  padding: 30px 50px;
  box-shadow: 0 0 20px rgb(47, 51, 47);
}
.login_btn {
  margin: 5px 240px 0 0;
}
</style>