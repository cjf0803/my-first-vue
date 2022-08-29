<template>
  <el-container class="index-container">
    <!--头部-->
    <el-header style="height: 100px">
      <div class="head-logo">
        <img src="../assets/logo.png" />
        <span>图书管理系统</span>
      </div>
      <div class="head-button">
        <p style="float:left;margin:7px 10px 0px ; font-family: fantasy;font-size: large;">欢迎    {{username}}    登录</p>
        <el-button type="danger" @click="loginOut" icon="el-icon-switch-button">退出</el-button>
      </div>
    </el-header>

    <!--页面主体区域-->
    <el-container>
      <!--页面左侧区域-->
      <el-aside width="200px">
        <!--侧边栏菜单区域-->
        <el-menu
          background-color="#333744"
          text-color="#fff"
          active-text-color="#409eff"
          :router="true"
          ><!--二级菜单颜色,unique-opened菜单只打开一个.:router="true":开启菜单路由模式-->
          <!--一级菜单-->
          <el-submenu index="1">
            <!--一级菜单模板区-->
            <template slot="title">
              <!--图标-->
              <i class="el-icon-user"></i>
              <!--文本-->
              <span>用户管理</span>
            </template>
            <!--二级菜单-->
            <!--index对应要跳转到的视图-->
            <el-menu-item index="index">
              <template slot="title">
                <!--图标-->
                <div class="space">
                <i class="el-icon-menu"></i
                ><!--二级菜单图标-->
                <!--文本-->
                <span>用户列表</span>
                </div>
              </template>
            </el-menu-item>
            <el-menu-item index="add">
              <template slot="title">
                <!--图标-->
                <div class="space">
                <i class="el-icon-circle-plus-outline"></i
                ><!--二级菜单图标-->
                <!--文本-->
                <span>添加用户</span>
                </div>
              </template>
            </el-menu-item>
            <el-menu-item index="findUserMo">
              <template slot="title">
                <!--图标-->
                <div class="space">
                <i class="el-icon-s-operation"></i
                ><!--二级菜单图标-->
                <!--文本-->
                <span>模糊查询</span>
                </div>
              </template>
            </el-menu-item>
          </el-submenu>
        </el-menu>

        <!--侧边栏菜单区域-->
        <el-menu
          background-color="#333744"
          text-color="#fff"
          active-text-color="#409eff"
          :router="true"
        >
          <!--一级菜单-->
          <el-submenu index="1">
            <!--一级菜单模板区-->
            <template slot="title">
              <!--图标-->
              <i class="el-icon-reading"></i>
              <!--文本-->
              <span>书籍管理</span>
            </template>
            <!--二级菜单-->
            <el-menu-item index="bookIndex">
            
              <template slot="title">
                <!--图标-->
                <div class="space">
                <i class="el-icon-menu"></i>
                <!--文本-->
                <span>书籍列表</span>
                </div>
              </template>
            </el-menu-item>
            <el-menu-item index="addBook">
              <template slot="title">
                <!--图标-->
                <div class="space">
                <i class="el-icon-document-add"></i>
                <!--文本-->
                <span>添加图书</span>
                </div>
              </template>
            </el-menu-item>
            <el-menu-item index="findBookMo">
              <template slot="title">
                <!--图标-->
                <div class="space">
                <i class="el-icon-search"></i>
                <!--文本-->
                <span>模糊查询</span>
                </div>
              </template>
            </el-menu-item>
          </el-submenu>
        </el-menu>

        <!--侧边栏菜单区域-->
        <el-menu
          background-color="#333744"
          text-color="#fff"
          active-text-color="#409eff"
          :router="true"
        >
          <!--一级菜单-->
          <el-submenu index="1">
            <!--一级菜单模板区-->
            <template slot="title">
              <!--图标-->
              <i class="el-icon-truck"></i>
              <!--文本-->
              <span>借阅管理</span>
            </template>
            <!--二级菜单-->
            <el-menu-item index="lendIndex">
              <template slot="title">
                <!--图标-->
                <div class="space">
                <i class="el-icon-set-up"></i>
                <!--文本-->
                <span>借阅列表</span>
                </div>
              </template>
            </el-menu-item>

            <el-menu-item index="findLendMo">
              <template slot="title">
                <!--图标-->
                <div class="space">
                <i class="el-icon-lollipop"></i>
                <!--文本-->
                <span>模糊查询</span>
                </div>
              </template>
            </el-menu-item>
          </el-submenu>
        </el-menu>

        <!--侧边栏菜单区域-->
        <el-menu
          background-color="#333744"
          text-color="#fff"
          active-text-color="#409eff"
        >
          <!--一级菜单-->
          <el-submenu index="1">
            <!--一级菜单模板区-->
            <template slot="title">
              <!--图标-->
              <i class="el-icon-shopping-cart-full"></i>
              <!--文本-->
              <span>订单管理</span>
            </template>
            <!--二级菜单-->
            <el-menu-item index="1-4-1">
              <template slot="title">
                <!--图标-->
                <div class="space">
                <i class="el-icon-menu"></i>
                <!--文本-->
                <span>导航一</span>
                </div>
              </template>
            </el-menu-item>
            <el-menu-item index="1-4-1">
              <template slot="title">
                <!--图标-->
                <div class="space">
                <i class="el-icon-menu"></i>
                <!--文本-->
                <span>导航二</span>
                </div>
              </template>
            </el-menu-item>
            <el-menu-item index="1-4-1">
              <template slot="title">
                <!--图标-->
                <div class="space">
                <i class="el-icon-menu"></i>
                <!--文本-->
                <span>导航三</span>
                </div>
              </template>
            </el-menu-item>
          </el-submenu>
        </el-menu>
        <!--侧边栏菜单区域-->
        <el-menu
          background-color="#333744"
          text-color="#fff"
          active-text-color="#409eff"
        >
          <!--一级菜单-->
          <el-submenu index="1">
            <!--一级菜单模板区-->
            <template slot="title">
              <!--图标-->
              <i class="el-icon-location"></i>
              <!--文本-->
              <span>数据统计</span>
            </template>
            <!--二级菜单-->
            <el-menu-item index="1-4-1">
              <template slot="title">
                <!--图标-->
                <div class="space">
                <i class="el-icon-menu"></i>
                <!--文本-->
                <span>导航一</span>
                </div>
              </template>
            </el-menu-item>
            <el-menu-item index="1-4-1">
              <template slot="title">
                <!--图标-->
                <div class="space">
                <i class="el-icon-menu"></i>
                <!--文本-->
                <span>导航二</span>
                </div>
              </template>
            </el-menu-item>
            <el-menu-item index="1-4-1">
              <template slot="title">
                <!--图标-->
                <div class="space">
                <i class="el-icon-menu"></i>
                <!--文本-->
                <span>导航三</span>
                </div>
              </template>
            </el-menu-item>
          </el-submenu>
        </el-menu>
        <el-menu
          background-color="#333744"
          text-color="#fff"
          active-text-color="#409eff"
        >
          <!--一级菜单-->
          <el-submenu index="1">
            <!--一级菜单模板区-->
            <template slot="title">
              <!--图标-->
              <i class="el-icon-coin"></i>
              <!--文本-->
              <span>图书分析</span>
            </template>
            <!--二级菜单-->
            <el-menu-item index="1-4-1">
              <template slot="title">
                <!--图标-->
                <div class="space">
                <i class="el-icon-menu"></i>
                <!--文本-->
                <span>导航一</span>
                </div>
              </template>
            </el-menu-item>
            <el-menu-item index="1-4-1">
              <template slot="title">
                <!--图标-->
                <div class="space">
                <i class="el-icon-menu"></i>
                <!--文本-->
                <span>导航二</span>
                </div>
              </template>
            </el-menu-item>
            <el-menu-item index="1-4-1">
              <template slot="title">
                <!--图标-->

                <div class="space">
                <i class="el-icon-menu"></i>
                <!--文本-->
                <span>导航三</span>
                </div>
              </template>
            </el-menu-item>
          </el-submenu>
        </el-menu>
      </el-aside>

      <!--页面右侧区域-->
      <el-main>
        <!--路由的占位符-->
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
export default {
  name: "index1_v",
  data() {
    return {
      username:''
    };
  },
  mounted(){
    this.username=sessionStorage.getItem("username")
  },
  methods: {
    loginOut: function () {
      this.$confirm("退出当前用户, 是否退出?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning",
      })
        .then(() => {
          this.$http
            .get(
              "http://localhost:8081/user/loginOut",
              { xhrFields: { withCredentials: true } },
              { crossDomain: true }
            )
            .then((res) => {
              console.log(res);
              if (res.data == true) {
                this.$router.push({ name: "login" });
              }
            });
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "已取消操作!",
          });
        });
    },
  },
};
</script>

<style scoped>
.index-container {
  height: 750px;
  margin-top: -30px;
}
.el-header {
  background-color: #373d41;
  display: flex;
  justify-content: space-between;
  padding-left: 0;
  align-items: center;
  color: #fff;
  height: 200px;
}
span {
  margin-left: 20px;
}
.head-logo {
  display: flex;
  align-items: center;
}
.head-logo img {
  width: 80px;
  height: 80px;
  margin-left: 10px;
}
.font-left {
  font-size: 20px;
  color: white;
  font-weight: bolder;
  margin-left: -920px;
  margin-top: 10px;
}
.head-button {
  align-items: center;
}
.el-aside {
  background-color: #333744;
}
.el-main {
  background-color: #eaedf1;
}
.space{
  margin-left:17px
}
</style>