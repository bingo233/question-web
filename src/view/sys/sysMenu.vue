<template>
  <div>
    <el-form :model="queryData" :inline="true" >
      <el-form-item label="菜单名称">
        <el-input v-model="queryData.likeStr"></el-input>
      </el-form-item>
      <el-form-item label="">
        <el-button type="primary">搜索</el-button>
      </el-form-item>
    </el-form>
    <!-- <el-table :data="menuDatas">
      <el-table-column label="菜单名称" prop="name"></el-table-column>
      <el-table-column label="路径" prop="path"></el-table-column>
    </el-table> -->
    <tree-table></tree-table>
  </div>
</template>

<script>
  import treeTable from '@/components/TreeTable'
  export default{
    components:{
      treeTable
    },
    data() {
      return {
        queryData : {
          likeStr: ''
        },
        menuDatas: [
          {name: '测试',path: '/build/test'}
        ]
      }
    }
  }
</script>