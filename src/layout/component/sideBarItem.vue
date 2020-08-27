<template>
  <!-- hidden属性为true不显示在侧边栏 -->
  <div v-if="!item.hidden">
    <!-- 有子路由且子路由个数大于1个，显示submenu -->
    <el-submenu
      :index="basePath"
      v-if="item.children && item.children.length > 1"
    >
      <template slot="title">
        <!-- <i class="el-icon-location"></i> -->
        <span>{{ item.meta.title }}</span>
      </template>
      <!-- 组件递归 -->
      <side-bar-item
        v-for="child in item.children"
        :key="child.path"
        :item="child"
        :base-path="resolvePath(child.path)"
      />
    </el-submenu>
    <!-- 无子路由，显示item-->
    <el-menu-item :index="basePath" v-else>{{ item.meta.title }}</el-menu-item>
  </div>
</template>

<script>
import path from 'path';
export default {
  name: "sideBarItem",
  props: ["item", "basePath"],
  methods: {
    resolvePath(routePath) {
      return path.resolve(this.basePath, routePath);
    }
  }
};
</script>

<style scoped lang="less"></style>
