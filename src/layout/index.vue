<template>
  <div class="home">
    <el-container class="wrap">
      <el-header class="header">
        <el-row>
          <el-col :span="4">
            <div class="logo">
              <img src="@/assets/image/logo.png" alt="" />
            </div>
          </el-col>
          <el-col :span="18" class="mid">
            <h3>后台管理系统</h3>
          </el-col>
          <el-col :span="2" class="logout">
            <span @click='handleLogout'>退出登录</span>
          </el-col>
        </el-row>
      </el-header>
      <el-container>
        <el-aside class='sideBar'>
          <el-menu :unique-opened='true' :router='true' class='menu'>
            <el-submenu index="1">
              <template slot="title">
                <i class="el-icon-location"></i>
                <span>用户管理</span>
              </template>
                <el-menu-item index="user">
                  <template slot="title">
                 <i class="el-icon-setting"></i>
                <span>用户列表</span>
              </template>
                </el-menu-item>
            </el-submenu>
            <el-submenu index="2">
              <template slot="title">
                <i class="el-icon-location"></i>
                <span>权限管理</span>
              </template>
                <el-menu-item index="role">
                  <template slot="title">
                 <i class="el-icon-setting"></i>
                <span>角色列表</span>
              </template>
                </el-menu-item>
                <el-menu-item index="rightList">
                  <template slot="title">
                 <i class="el-icon-setting"></i>
                <span>权限列表</span>
              </template>
                </el-menu-item>
            </el-submenu>
            <el-submenu index="3">
              <template slot="title">
                <i class="el-icon-location"></i>
                <span>商品管理</span>
              </template>
                <el-menu-item index="3-1">
                  <template slot="title">
                 <i class="el-icon-setting"></i>
                <span>商品列表</span>
              </template>
                </el-menu-item>
                <el-menu-item index="3-2">
                  <template slot="title">
                 <i class="el-icon-setting"></i>
                <span>分类参数</span>
              </template>
                </el-menu-item>
                <el-menu-item index="3-3">
                  <template slot="title">
                 <i class="el-icon-setting"></i>
                <span>商品分类</span>
              </template>
                </el-menu-item>
            </el-submenu>
            <el-submenu index="4">
              <template slot="title">
                <i class="el-icon-location"></i>
                <span>订单管理</span>
              </template>
                <el-menu-item index="4-1">
                  <template slot="title">
                 <i class="el-icon-setting"></i>
                <span>订单列表</span>
              </template>
                </el-menu-item>
            </el-submenu>
            <el-submenu index="5">
              <template slot="title">
                <i class="el-icon-location"></i>
                <span>数据统计</span>
              </template>
                <el-menu-item index="5-1">
                  <template slot="title">
                 <i class="el-icon-setting"></i>
                <span>统计报表</span>
              </template>
                </el-menu-item>
            </el-submenu>
          </el-menu>
        </el-aside>
        <el-main class="content">
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "Home",
  data() {
    return {};
  },
  beforeCreate(){
 let token = localStorage.getItem('token');
 if(!token){
   this.$router.push({name:'login'});
 }
  },
  created() {},
  methods: {
    handleLogout(){
      //清除token
      //调用退出登录接口
      //页面跳转
      localStorage.removeItem('token');
      this.$message.success('退出成功');
      this.$router.push({name:'login'})
    }
  }
};
</script>
<style scoped>
.home {
  height: 100%;
}
.wrap {
  height: 100%;
}
.header {
  background: lightblue;
}
.header .logo img {
  height: 60px;
}
.header .mid {
  text-align: center;
}
.header .logout {
  line-height: 60px;
}
.main {
  min-height: 100%;
}
.sideBar{
  border-right:1px solid #eee;
}
.menu{
border:none;
}
</style>
