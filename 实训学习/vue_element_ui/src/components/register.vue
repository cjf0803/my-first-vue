<template>
  <div>
    <div class="container">
      <div class="forms-container">
        <div class="signin-signup">
          <form action="#" class="sign-up-form">
            <h2 class="title">注册</h2>
            <div class="input-field">
              <i class="fas fa-user"></i>
              <input type="text" placeholder="用户名" />
            </div>
            <div class="input-field">
              <i class="fas fa-envelope"></i>
              <input type="email" placeholder="邮箱" />
            </div>
            <div class="input-field">
              <i class="fas fa-lock"></i>
              <input type="password" placeholder="密码" />
            </div>
            <input type="submit" class="btn" value="注 册" />
            <p class="social-text">或者通过以下平台注册</p>
            <div class="social-media">
              <a href="#" class="social-icon">
                <i class="fab fa-weixin"></i>
              </a>
              <a href="#" class="social-icon">
                <i class="fab fa-qq"></i>
              </a>
              <a href="#" class="social-icon">
                <i class="fab fa-alipay"></i>
              </a>
              <a href="#" class="social-icon">
                <i class="fab fa-github"></i>
              </a>
            </div>
          </form>
        </div>
      </div>
      <div class="panels-container">
        <div class="panel right-panel">
          <div class="content">
            <h3>已经是我们自己人了吗?</h3>
            <p>那好兄弟,你直接点击登录按钮,登录到我们这优秀的系统里!!</p>
            <button class="btn transparent" id="sign-in-btn">登 录</button>
          </div>
          <img src="../assets/img/register.svg" class="image" alt="" />
        </div>
      </div>
    </div>
    </div>
  
</template>

<script>
import "../assets/js/app.js";
import "../assets/css/style.css";
export default {
  name: "register_v",
  data() {
    return {};
  },
};
</script>

<style>
</style>