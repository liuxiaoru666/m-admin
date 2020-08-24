<template>
  <el-card class='rightWrap'>
    <!-- //面包屑  -->
    <m-brand level1='权限管理' level2='权限列表'></m-brand>
    <!-- 表格 -->
    <el-table :data='dataSource' class='tb' border height='500'>
      <el-table-column label='权限名称' prop='name' align='center'></el-table-column>
      <el-table-column label='路径' prop='path' align='center'></el-table-column>
      <el-table-column label='层级' prop='level' align='center' :formatter="levelFormatter"></el-table-column>
    </el-table>
  </el-card>
</template>

<script>
export default {
name:'right',
data(){
  return{
    dataSource:[
      {name:'用户管理',path:'user',level:'0'},
      {name:'用户列表',path:'user',level:'1'},
      {name:'添加用户',path:'user',level:'1'},
      {name:'编辑用户',path:'user',level:'1'},
      {name:'删除用户',path:'user',level:'1'},
      {name:'分配用户角色',path:'user',level:'1'},
      {name:'用户管理',path:'user',level:'0'},
      {name:'用户列表',path:'user',level:'1'},
      {name:'添加用户',path:'user',level:'1'},
      {name:'编辑用户',path:'user',level:'1'},
      {name:'删除用户',path:'user',level:'1'},
      {name:'分配用户角色',path:'user',level:'1'}
    ],
    levelMap:{
      '0':'一级',
      '1':'二级',
      '2':'三级'
    }
  }
},
 methods:{
    levelFormatter(r){
      return this.levelMap[r.level]
    }
  }
}

</script>
<style style='scoped'>
.tb{
  margin-top:20px;
}
</style>