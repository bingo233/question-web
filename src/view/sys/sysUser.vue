<template>
    <div>
      <el-form :inline="true">
        <el-form-item label="用户名">
          <el-input v-model="userName"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary">搜索</el-button>
        </el-form-item>
      </el-form>

      <el-table :data="userList" :stripe="true" :border="true">
        <el-table-column label="用户">
          <template slot-scope="scope">

          </template>
        </el-table-column>
        <el-table-column label="手机号" prop="phone"></el-table-column>
        <el-table-column label="状态">
          <template slot-scope="scope">
            <span v-if="scope.row.status == 0" style="color: #8c939d">无效</span>
            <span v-else-if="scope.row.status == 1" style="color: #66b1ff">正常</span>
            <span v-else style="color: #f56c6c">删除</span>
          </template>
        </el-table-column>
        <el-table-column label="创建人" prop="create_name"></el-table-column>
        <el-table-column label="创建时间" prop="create_time"></el-table-column>
        <el-table-column label="修改人" prop="modify_name"></el-table-column>
        <el-table-column label="修改时间" prop="modify_time"></el-table-column>
      </el-table>
    </div>
</template>

<script>
    export default {
      data() {
        return {
          queryData: {
            userName: ''
          },
          userList: {

          }
        }
      },
      mounted() {

      },
      methods: {
        getUsers() {
          
        }
      }
    }
</script>

<style scoped>

</style>
