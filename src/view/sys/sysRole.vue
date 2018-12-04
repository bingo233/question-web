<template>
  <div>
    <el-form :model="formData" :inline="true">
      <el-form-item label="角色名称">
        <el-input v-model="formData.name" placeholder="请输入角色名称"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary">查询</el-button>
      </el-form-item>
      <el-form-item>
        <el-button type="primary">新增</el-button>
      </el-form-item>
      <el-form-item>
        <el-button>绑定菜单</el-button>
      </el-form-item>
    </el-form>
    <el-table :data="tableData">
      <el-table-column label="角色名称" prop="name"></el-table-column>
      <el-table-column label="备注" prop="remark"></el-table-column>
      <el-table-column label="状态">
        <template slot-scope="scope">
          <el-tag size="small" type="warning" v-if="scope.row.status == 0">无效</el-tag>
          <el-tag size="small" v-else-if="scope.row.status == 1">正常</el-tag>
          <el-tag size="small" type="danger" v-else-if="scope.row.status == -99">正常</el-tag>
        </template>
      </el-table-column>
      <el-table-column label="创建人" prop="creater"></el-table-column>
      <el-table-column label="创建时间" prop="create_time"></el-table-column>
      <el-table-column label="修改人" prop="modifer"></el-table-column>
      <el-table-column label="修改时间" prop="modify_time"></el-table-column>
      <el-table-column label="操作">
        <template slot-scope="scope">
          <!-- <el-button size="mini" type="primary" plain>绑定菜单</el-button> -->
          <el-button size="mini" type="primary" plain>修改</el-button>
          <el-button size="mini" type="danger" plain>删除</el-button>
        </template>
      </el-table-column>
    </el-table>

    <el-dialog :title="roleDialog.title" :visible.sync="roleDialog.show">
      <el-form :model="roleFormData">
        <el-form-item label="角色名称">
          <el-input v-model="roleFormData.name" placeholder=""></el-input>
        </el-form-item>
        <el-form-item label="角色状态">
          <el-select v-model="value" placeholder="请选择">
            <el-option
              v-for="item in roleStatus"
              :key="item.value"
              :label="item.label"
              v-model="roleFormData.status"
              :value="item.value">
            </el-option>
          </el-select>
        </el-form-item>
      </el-form>
    </el-dialog>
  </div>
</template>

<script>
  import roleApi from '@/api/role'
  export default {
    data() {
      return {
        formData: {
          name: ''
        },
        tableData: [],
        roleDialog: {
          title: '新增角色',
          show: false
        },
        roleFormData: {

        },
        roleStatus: []
      }
    },
    mounted() {
      this.getRoles()
    },
    methods: {
      getRoles() {
        roleApi.getRoles(this.formData, res => {
          if (res.code == 200) {
            this.tableData = res.data
          }
        })
      }
    }
  }
</script>