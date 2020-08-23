<template>
  <div class="wrap">
    <el-form
      :model="formData"
      :label-position="labelPosition"
      label-width="80px"
      class="container"
      ref="formWrap"
      :rules="rules"
    >
      <el-form-item label="账号" prop="account">
        <el-input v-model="formData.account"></el-input>
      </el-form-item>
      <el-form-item label="密码" type="password" prop="pass">
        <el-input v-model="formData.pass" show-password></el-input>
      </el-form-item>
      <el-button type="primary" class="loginBtn" @click="checkPram('formWrap')"
        >登录</el-button
      >
    </el-form>
  </div>
</template>
<script>
import {login} from '@/api/user.js';
export default {
  name: "Login",
  data() {
    return {
      labelPosition: "top",
      formData: {
        account: "",
        pass: ""
      },
      rules: {
        account: [{ required: true, message: "请输入账号", trigger: "blur" }],
        pass: [{ required: true, message: "请输入密码", trigger: "blur" }]
      }
    };
  },
  methods: {
    checkPram(formName) {
      var that = this;
      this.$refs[formName].validate(valid => {
        if (valid) {
          that.goLogin();
        }
      });
    },
    async goLogin() {
      //  var result =  await login(this.formData);
      
      if (this.formData.account === "lxr") {
       
        //登录成功保存token
        localStorage.setItem('token','yterytetyeyteri')
        this.$message.success("登录成功");
        this.$router.push({ name: "home" });
      } else {
        this.$message.error("账号不存在！");
      }
    }
  }
};
</script>
<style scoped>
.wrap {
  width: 100%;
  height: 100%;
  background: lightblue;
}
.container {
  width: 300px;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  border: 1px solid #eee;
  padding: 20px;
  border-radius: 8px;
  background: #fff;
}
.loginBtn {
  width: 100%;
  margin: 0 auto;
}
</style>
