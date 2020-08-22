<template>
  <el-card class="card">
    <!-- //面包屑  -->
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item to="/">首页</el-breadcrumb-item>
      <el-breadcrumb-item>用户管理</el-breadcrumb-item>
      <el-breadcrumb-item>用户列表</el-breadcrumb-item>
    </el-breadcrumb>
    <!-- 搜索框 -->
    <el-row class="search">
      <el-input placeholder="请输入内容" v-model="inputVal" class="searchInput">
        <el-button slot="append" icon="el-icon-search"></el-button>
      </el-input>
      <el-button type="primary" @click="addUserVisible = true"
        >添加用户</el-button
      >
    </el-row>
    <!-- 表格 -->
    <el-table :data="tableData" style="width: 100%;margin-top:20px">
      <el-table-column prop="" label="#" width="60" type="index">
      </el-table-column>
      <el-table-column prop="name" label="姓名" width="120" align="center">
      </el-table-column>
      <el-table-column prop="email" label="邮箱" align="center">
      </el-table-column>
      <el-table-column prop="phone" label="电话" align="center">
      </el-table-column>
      <el-table-column prop="createAt" label="创建时间" align="center">
      </el-table-column>
      <el-table-column label="用户状态" align="center">
        <template slot-scope="scope">
          <el-switch
            v-model="scope.row.status"
            @change="changeStatus"
          ></el-switch>
        </template>
      </el-table-column>
      <el-table-column prop="" label="操作" align="center" min-width="200">
        <template slot-scope="scope">
          <el-button size="mini" @click="handleEdit(scope.$index, scope.row)"
            >编辑</el-button
          >
          <el-button
            size="mini"
            type="primary"
            @click="handleRole(scope.$index, scope.row)"
            >分配角色</el-button
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
    <!-- 分页 -->
    <el-pagination
      small
      layout="prev, pager, next"
      :total="50"
      class="pageination"
    >
    </el-pagination>
    <!-- 添加编辑用户 -->
    <el-dialog
      title="添加用户"
      :visible.sync="addUserVisible"
      width="30%"
      lock-scroll
    >
      <el-form :model="addUserForm" ref="addUserForm" :rules="addUserRules">
        <el-form-item label="用户名" prop="name">
          <el-input v-model="addUserForm.name"></el-input>
        </el-form-item>
        <el-form-item label="邮箱" prop="email">
          <el-input v-model="addUserForm.email"></el-input>
        </el-form-item>
        <el-form-item label="电话" prop="phone">
          <el-input v-model="addUserForm.phone"></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="cancelAddUser('addUserForm')">取 消</el-button>
        <el-button type="primary" @click="addUser('addUserForm')"
          >确 定</el-button
        >
      </div>
    </el-dialog>
    <!-- 分配角色  -->
    <el-dialog title="分配角色" :visible.sync="roleVisible" width="30%">
      <el-form :model="roleForm" label-position="top">
        <el-form-item label="用户名">
          <el-input v-model="roleForm.name" disabled></el-input>
        </el-form-item>
        <el-form-item label="选择角色">
          <el-select v-model="roleForm.role" placeholder="请选择角色">
            <el-option
              :label="item.label"
              :value="item.id"
              v-for="(item, index) in optionList"
              :key="index"
            ></el-option>
          </el-select>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="roleVisible = false">取 消</el-button>
        <el-button type="primary" @click="confirmRole">确 定</el-button>
      </div>
    </el-dialog>
  </el-card>
</template>
<script>
export default {
  data() {
    return {
      inputVal: "",
      addUserVisible: false,
      roleVisible: false,
      isAdd: true, //添加还是编辑操作
      roleForm: {
        name: "",
        role: ""
      }, //角色
      addUserForm: {
        name: "",
        email: "",
        phone: ""
      },
      addUserRules: {
        name: [{ required: true, message: "请输入用户名", trigger: "change" }],
        email: [{ required: true, message: "请输入邮箱", trigger: "change" }],
        phone: [{ required: true, message: "请输入手机号", trigger: "change" }]
      },

      tableData: [
        {
          email: "liuxiaoru666@163.com",
          name: "王小虎",
          phone: "17610859110",
          createAt: "2020-08-21",
          status: 0
        },
        {
          email: "liuxiaoru666@163.com",
          name: "张攀登",
          phone: "17610859110",
          createAt: "2020-08-21",
          status: 1
        }
      ],
      optionList: [
        { label: "角色1", id: "1" },
        { label: "角色2", id: "2" },
        { label: "角色3", id: "3" },
        { label: "角色4", id: "4" }
      ]
    };
  },
  methods: {
    changeStatus(val) {
      console.log(val);
    },
    //添加用户
    addUser(formName, type) {
      var that = this;
      this.$refs[formName].validate(res => {
        if (res) {
          if (that.isAdd) {
            that.$message.success("添加成功");
          } else {
            that.$message.success("编辑成功");
          }
          that.addUserVisible = false;
          that.isAdd = true;
          that.$refs[formName].resetFields();
        }
      });
    },
    //取消添加
    cancelAddUser(formName) {
      this.isAdd = true;
      this.addUserVisible = false;
      this.$refs[formName].resetFields();
    },
    //编辑
    handleEdit(i, r) {
      this.addUserForm.name = r.name;
      this.addUserForm.email = r.email;
      this.addUserForm.phone = r.phone;
      this.isAdd = false;
      this.addUserVisible = true;
    },
    //删除
    handleDelete(i, r) {
      this.$messageBox.confirm("确认删除么").then(() => {
        this.$message.success("删除成功");
      });
    },
    handleRole(i, r) {
      this.roleForm.name = r.name;
      this.roleForm.role = '2'
      this.roleVisible = true;
    },
    confirmRole() {
      console.log(this.roleForm);
      this.roleVisible = false;
      this.$message.success('分配角色成功')
    }
  }
};
</script>
<style scoped>
.search {
  margin-top: 20px;
  /* width: 500px; */
}
.searchInput {
  width: 300px;
  margin-right: 20px;
}
.pageination {
  margin-top: 20px;
}
.addForm {
  width: 30%;
}
</style>
