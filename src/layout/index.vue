<template>
  <el-container class="wrap">
   <!-- 头部 -->
    <el-header class="header-wrap">
            <m-header></m-header>
      </el-header>
    <el-container>
      <!-- sideBar -->
      <el-aside class="sideBar">
        <side-bar :routes='routes'></side-bar>
      </el-aside>
      <!-- main -->
      <el-main class="content">
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
// @ is an alias to /src
import mHeader from "./component/mHeader";
import sideBar from './component/sideBar';
export default {
  name: "Home",
  components: {
    mHeader,
    sideBar
  },
  computed:{
    routes(){
      return this.$router.options.routes;
    }
  }
     
  }
</script>
<style scoped>
.wrap {
  height: 100%;
}
.header-wrap{
background: lightblue;
}
.main {
  min-height: 100%;
}
.sideBar {
  border-right: 1px solid #eee;
}

</style>
