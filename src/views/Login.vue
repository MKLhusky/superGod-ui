<template>
  <div class="loginbody">
    <div class="logindata">
      <div class="logintext">
        <h2>剑来</h2>
      </div>
      <div class="formdata">
        <el-form ref="form" :model="user" :rules="rules">
          <el-form-item prop="username">
            <el-input
                v-model="user.userAccount"
                clearable
                placeholder="请输入账号"
            ></el-input>
          </el-form-item>
          <el-form-item prop="password">
            <el-input
                v-model="user.password"
                clearable
                placeholder="请输入密码"
                show-password
            ></el-input>
          </el-form-item>
        </el-form>
      </div>

      <div class="button">
        <el-button type="primary" @click="userLogin">登录</el-button>
        <el-button class="shou" @click="register">注册</el-button>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import router from "@/router"

export default {
  name: "login",
  data() {
    return {
      user: {
        password: "",
        userAccount: "",
        token: ""
      },
      checked: false,
      rules: {
        username: [
          { required: true, message: "请输入用户名", trigger: "blur" },
          { max: 10, message: "不能大于10个字符", trigger: "blur" },
        ],
        password: [
          { required: true, message: "请输入密码", trigger: "blur" },
          { max: 10, message: "不能大于10个字符", trigger: "blur" },
        ],
      },
    };
  },
  mounted() {
  },
  setup(){
  },
  methods: {
    userLogin(){
      axios.post("/system/login", this.user).then(res =>{
        this.user.token = res.data
        this.$message.success("操作成功")
        console.log("res.data.token")
        console.log(res.data)
        window.localStorage.setItem("token", res.data)
        router.push({path:  "/DailyAttendance"})
      })
    }
  },

};
</script>

<style scoped>
.loginbody {
  width: 100%;
  height: 100%;
  min-width: 100%;
  background-image: url("../assets/1679660288277.jpg");
  background-size: 100% 100%;
  background-position: center center;
  overflow: auto;
  background-repeat: no-repeat;
  position: fixed;
  line-height: 100%;
  padding-top: -8px;
}

.logintext {
  margin-bottom: 20px;
  line-height: 50px;
  text-align: center;
  font-size: 30px;
  font-weight: bolder;
  color: white;
  text-shadow: 2px 2px 4px #000000;
}

.logindata {
  width: 400px;
  height: 300px;
  transform: translate(-50%);
  margin-left: 50%;
}

.tool {
  display: flex;
  justify-content: space-between;
  color: #606266;
}

.button {
  margin-top: 10px;
  text-align: center;
}

.shou {
  cursor: pointer;
  color: #606266;
}

</style>