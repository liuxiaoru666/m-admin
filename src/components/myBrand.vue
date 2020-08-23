<template>
  <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item to="/">首页</el-breadcrumb-item>
      <el-breadcrumb-item>{{level1}}</el-breadcrumb-item>
      <el-breadcrumb-item>{{level1}}</el-breadcrumb-item>
    </el-breadcrumb>
</template>

<script>
export default {
name:'m-brand',
 props:['level1','level2']
}

</script>
<style style='scoped'>
</style>