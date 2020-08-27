<template>
  <el-menu :unique-opened="true" :router='true' class="menu">
    <side-bar-item
      v-for="route in routes"
      :key='route.path'
      :item="route"
      :base-path='route.path'
    />
  </el-menu>
</template>

<script>
import sideBarItem from "./sideBarItem.vue";
export default {
  props: ["routes"],
  components: {
    sideBarItem
  }
};
</script>
<style style="scoped">
.menu {
  border: none;
}
</style>
