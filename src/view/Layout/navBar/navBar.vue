<template>
  <div class="app-nav-box">
    <hamburger></hamburger>
    <breadcrumb class="app-breadcrumb"></breadcrumb>

    <el-dropdown style="float:right;padding-right:20px;">
      <span class="el-dropdown-link">
        超级管理员
      </span>
      <el-dropdown-menu slot="dropdown">
        <el-dropdown-item>回到首页</el-dropdown-item>
        <el-dropdown-item divided>退出登录</el-dropdown-item>
      </el-dropdown-menu>
    </el-dropdown>

  </div>
</template>

<script>
import Hamburger from './hamburger'
import Breadcrumb from './Breadcrumb'

export default{
  components:{
    Hamburger,
    Breadcrumb
  }
}
</script>
<style lang="less">
.app-nav-box{
  height: 100%;
  line-height: 50px;
  .app-breadcrumb{
    margin-left: 37px;
  }
}
</style>