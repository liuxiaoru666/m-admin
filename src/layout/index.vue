<template>
  <el-container class="wrap">
   <!-- 头部 -->
    <el-header class="header-wrap">
            <m-header></m-header>
      </el-header>
    <el-container>
      <!-- sideBar -->
      <el-aside class="sideBar">
        <m-menu :menuData='sideBarData'></m-menu>
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
import mMenu from './component/mMenu';
export default {
  name: "Home",
  components: {
    mHeader,
    mMenu
  },
  data(){
    return{
      sideBarData:[//左侧导航数据
        {label:'用户管理',
        path:'user',
        order:'1',
        children:[
          {label:'用户列表',path:'user'}
        ]
        },
        {label:'权限管理',
        path:'right',
         order:'2',
        children:[
          {label:'角色列表',path:'role'},
          {label:'权限列表',path:'rightList'}
        ]
        },
        {label:'商品管理',
        path:'goods',
         order:'3',
        children:[
          {label:'商品列表',path:'goods'},
          {label:'商品分类',path:'goodsType'}
        ]
        },
        {label:'订单管理',
        path:'order',
         order:'4',
        children:[
          {label:'订单列表',path:'orderList'}
        ]
        },
        {label:'数据统计',
        path:'report',
         order:'  ',
        children:[
          {label:'数据报表',path:'report'}
        ]
        }
      ]
    }
  }
};
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
