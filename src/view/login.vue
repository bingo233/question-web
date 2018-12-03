<template>
  <div class="login-content">
    <div class="login-form-box">
      <el-form :model="formData" :rules="rules" class="login-form">
        <h1>商城管理系统</h1>
        <el-form-item label="" prop="acc">
          <span class="login-icon">
            <svg-icon icon="user" />
          </span>
          <el-input type="text" v-model="formData.acc" autocomplete="off" placeholder="请输入用户名"></el-input>
        </el-form-item>
        <el-form-item label="" prop="pwd">
          <span class="login-icon">
            <svg-icon icon="password" />
          </span>
          <el-input type="password" v-model="formData.pwd" autocomplete="off" placeholder="请输入密码"></el-input>
        </el-form-item>
        <el-button type="primary" class="login-btn" @click="loginCheck" :loading="loginLoading">登录</el-button>
      </el-form>
    </div>
  </div>
</template>

<script>
  import loginApi from "@/api/login"
  import auth from '@/utils/autor'

  export default {
    data() {
      return {
        svgPath: '',
        loginLoading: false,
        formData: {
          acc:'',
          pwd:''
        },
        rules: {
          acc: [
            { required: true, message: '请输入用户名', trigger: 'blur' }
          ],
          pwd: [
            { required: true, message: '请输入密码', trigger: 'blur' }
          ]
        }
      }
    },
    methods: {
      loginCheck() {
        this.loginLoading = true;
        loginApi.loginCheck(this.formData, res => {
          if (res.code === 200) {
            console.log(res.data);
            auth.setToken(res.data);
            window.location.reload()
          }else {
            this.$message.error(res.content);
          }
          this.loginLoading = false;
        });
      }
    }
  }
</script>

<style lang="less">
  .login-content{
    position: relative;
    width: 100%;
    height: 100%;
    background: #2d3a4b;
    color: #ffffff;
    text-align: center;
    .login-form-box{
      width: 520px;
      position: absolute;
      height: 365px;
      top: 0;
      overflow: hidden;
      bottom: 39%;
      margin: auto;
      left: 0;
      right: 0;
      .login-form{
        margin: 61px;
        h1{
          margin-bottom: 50px;
        }
        input{
          background-color: #2d3a4b;
          height: 45px;
          border: none;
          color: #ffffff;
        }
        .el-input{
          width: 90%;
        }
        .login-icon{
          width: 13px;
          display: inline-block;
          font-size: 17px;
          text-align: center;
        }
        .el-form-item{
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 6px;
        }
        .login-btn{
          width: 100%;
        }
      }
    }
  }
</style>
