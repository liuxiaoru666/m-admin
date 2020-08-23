<template>
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
</template>

<script>
export default {
  name: "mHeader",
  methods: {
    handleLogout() {
      //清除token
      //调用退出登录接口
      //页面跳转
      localStorage.removeItem("token");
      this.$message.success("退出成功");
      this.$router.push({ name: "login" });
    }
  }
};
</script>
<style style="scoped">
.logo img {
  height: 60px;
}
.mid {
  text-align: center;
}
 .logout {
  line-height: 60px;
}
</style>
