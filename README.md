# m-admin1

#### eslint 配置

#### elementui 使用

#### axios/插件定义

#### async/await 函数使用

### 登录/登出 `Login`

- 调用接口登录成功后保存 token
- 在路由导航中校验token，token失效或者未登录重定向到登录
- 调用退出接口，退出成功退出登录清除 token，跳转登录页

### 整体布局`Home`

- 布局容器 container main aside
- 头部 layout 布局 row col
- 侧边栏 el-menu  
  关键属性：index 唯一标示，可用作 path 进行路由跳转

### 路由嵌套构建子页面

- el-menu 开启路由模式
- 路由的 children 属性定义自路由
- 父组件内部添加 router-view 组件作为子路由入口

```javascript
  //router
  {
    path: '/',
    name: 'home',
    component: Home,
    children:[
      {path: 'user',
      name: 'user',
      component: () => import(/* webpackChunkName: "about" */ '@/components/user/User.vue')
     }
    ]
  }
  //home
   <el-main class="content">
    <router-view></router-view>
  </el-main>
```

### 用户列表`user`

- 面包屑 搜索框，表格，等组件
- 表格一些坑

```javascript
//1、正常表格列数据通过prop接收对应字段
  <el-table-column prop="createAt" label="创建时间" align='center'> </el-table-column>
  //2、如果需要获取行列其他信息，需要通过`slot-scope`
      <el-table-column prop="" label="操作" align='center' min-width="120">
        <template slot-scope="scope">
<el-button size="mini" @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
        </template>
      </el-table-column>
//3、对字段进行格式化formatter,类似filter
<el-table-column  label="用户状态" align='center' :formatter="statusFormat"> 
      </el-table-column>

```

### request封装
axios二次封装
封装api

### 权限管理
-根据路由生成sideBar
- 创建vue实例的时候将vue-router挂载，但这个时候vue-router挂载一些登录或者不用权限的公用的页面。
- 当用户登录后，获取用roles/types,将roles/types和路由表/按钮视图表进行权限作比较，生成最终用户可访问的路由表和按钮视图表。
- 调用router.addRoutes(store.getters.addRouters)添加用户可访问的路由，和使用自定义指令 v-permission控制按钮视图
- 使用vuex管理路由表和按钮视图表。