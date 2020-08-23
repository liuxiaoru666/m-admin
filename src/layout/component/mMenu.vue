<template>
  <el-menu :unique-opened="true" :router="true" class="menu">
    <el-menu-item index="/">
        <i class="el-icon-menu"></i>
        <span slot="title">首页</span>
      </el-menu-item>
      <el-submenu v-for="item in menuData" :key='item.label' :index='item.order'>
        <template slot="title">
        <i class="el-icon-location"></i>
        <span>{{item.label}}</span>
      </template>
        <el-menu-item v-for = 'item1 in item.children' :key = 'item1.label' :index="item1.path">
          <template slot="title">
            <i class="el-icon-setting"></i>
            <span>{{item1.label}}</span>
          </template>
        </el-menu-item>
      </el-submenu>
    <!-- <el-submenu index="1">
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
    </el-submenu> -->
  </el-menu>
</template>

<script>
export default {
  props:['menuData']
};
</script>
<style style="scoped">
.menu {
  border: none;
}
</style>
