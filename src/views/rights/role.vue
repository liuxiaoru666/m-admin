<template>
  <el-card class="rolewrap">
    <!-- 面包屑 -->
    <m-brand level1="权限管理" level2="角色列表"></m-brand>
    <!-- button -->
    <el-row class="addBtn">
      <el-button type="primary">添加角色</el-button>
    </el-row>
    <!-- 表格 -->
    <el-table :data="tableData" style="width: 100%;margin-top:20px">
      <el-table-column type="expand" width="60">
        <template slot-scope="scope">
          <!-- 角色对应的权限视图 -->
          <p v-if="!scope.row.children || scope.row.children.length == '0'">
            当前角色没有权限
          </p>
          <right-view
            :rightData="scope.row.children"
            @closeRight="handlerClose"
            v-if="scope.row.children"
          ></right-view>
        </template>
      </el-table-column>
      <el-table-column prop="name" label="角色名称" width="120" align="center">
      </el-table-column>
      <el-table-column prop="desc" label="角色描述" align="center">
      </el-table-column>

      <el-table-column prop="" label="操作" align="center" min-width="200">
        <template slot-scope="scope">
          <el-button size="mini" @click="handleEdit(scope.$index, scope.row)"
            >编辑</el-button
          >
          <el-button
            size="mini"
            type="primary"
            @click="handleRights(scope.$index, scope.row)"
            >分配权限</el-button
          >
          <el-button
            size="mini"
            type="danger"
            @click="handleDelete(scope.$index, scope.row)"
            >删除</el-button
          >
        </template>
      </el-table-column>
    </el-table>
    <!-- 添加权限操作弹窗 -->
    <el-dialog
      title="修改权限"
      :visible.sync="addUserVisible"
      width="50%"
      lock-scroll
    >
      <el-tree
        :data="treeData"
        show-checkbox
        node-key="id"
        :default-expanded-keys="expandArr"
        :default-checked-keys="rightArr"
        :props="defaultProps"
      >
      </el-tree>

      <div slot="footer" class="dialog-footer">
        <el-button @click="addUserVisible = false">取 消</el-button>
        <el-button type="primary" @click="confirm()">确 定</el-button>
      </div>
    </el-dialog>
  </el-card>
</template>

<script>
import rightView from "@/components/rightView";
export default {
  data() {
    return {
      addUserVisible: false,
      tableData: [
        {
          name: "管理员",
          desc: "一段描述",
          children: [
            {
              authName: "用户管理",
              id: 1,
              children: [
                {
                  authName: "用户列表",
                  id: 2,
                  children: [
                    { authName: "添加用户", id: 3 },
                    { authName: "编辑用户", id: 4 },
                    { authName: "删除用户", id: 5 },
                    { authName: "分配角色", id: 6 }
                  ]
                }
              ]
            },
            {
              authName: "权限管理",
              id: 7,
              children: [
                {
                  authName: "角色列表",
                  id: 8,
                  children: [
                    { authName: "添加角色", id: 9 },
                    { authName: "编辑用户", id: 10 },
                    { authName: "删除用户", id: 11 },
                    { authName: "分配权限", id: 12 }
                  ]
                },
                { authName: "权限列表", id: 13 }
              ]
            },
            {
              authName: "商品管理",
              id: 14,
              children: [
                { authName: "商品列表", id: 15 },
                { authName: "分类参数", id: 16 },
                { authName: "商品分类", id: 17 }
              ]
            },
            {
              authName: "订单管理",
              id: 18,
              children: [{ authName: "订单列表", id: 19 }]
            },
            {
              authName: "数据统计",
              id: 20,
              children: [{ authName: "统计报表", id: 21 }]
            }
          ]
        },
        {
          name: "超管",
          desc: "一段描述"
        },
        {
          name: "测试",
          desc: "一段描述"
        }
      ],
      treeData: [],
      expandArr:[],
      rightArr:[],
      defaultProps: {
        children: "children",
        label: "authName"
      }
    };
  },
  components: {
    rightView
  },
  methods: {
    handleEdit(i, r) {},
    handleRights(i, r) {
      console.log(i)
      
      this.treeData=this.tableData[i].children;
      this.getAllId(this.treeData);
      this.getRights(this.treeData);
      this.addUserVisible = true;
    },
    getAllId(arr){
           arr.forEach((item)=>{
        this.expandArr.push(item.id);
        if(item.children&&item.children.length){
          this.getAllId(item.children)
        }
      })
    },
    getRights(arr){
           arr.forEach((item)=>{
        this.rightArr.push(item.id);
        if(item.children&&item.children.length){
          this.getRights(item.children)
        }
      })
    },
    handleDelete(i, r) {},
    handlerClose(id) {
      console.log(id);
    },
    confirm() {
      this.addUserVisible = true;
    }
  }
};
</script>
<style style="scoped">
.addBtn {
  margin-top: 20px;
}
.el-icon-arrow-right {
  margin-left: 20px;
}
</style>
