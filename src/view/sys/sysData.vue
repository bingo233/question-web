<template>
  <div>
    <el-form>
      <el-form-item label="">
        <el-button type="primary" @click="openDataDialog('add-action')">新增公共数据</el-button>
      </el-form-item>
    </el-form>
    <tree-table :tabData="dataList" firstColLabel="名称" firstColProp="name" :expendAll="true">
      <el-table-column label="编码" prop="code"></el-table-column>
      <el-table-column label="创建人" prop="create_name"></el-table-column>
      <el-table-column label="创建时间" prop="create_time"></el-table-column>
      <el-table-column label="修改人" prop="modify_name"></el-table-column>
      <el-table-column label="修改时间" prop="modify_time"></el-table-column>
      <el-table-column label="操作">
        <template slot-scope="scope">
          <el-button size="mini" @click="openDataDialog('updata-action', scope.row)">修改</el-button>
          <el-button size="mini" type="danger" @click="deleteData(scope.row)">删除</el-button>
        </template>
      </el-table-column>
    </tree-table>
    <el-dialog :title="dataDialog.title" :visible.sync="dataDialog.show" width="600px">
      <el-form :model="dataForm" label-width="80px" :rules="formRoles" ref="dataForm">
        <el-form-item label="父级">
          <el-cascader
            :options="dataList"
            v-model="parentSelectValue"
            :props="parentSelectProps"
            :change-on-select="true"
            :clearable="true"
            @change="parentSelected"
            style="width: 480px">
          </el-cascader>
        </el-form-item>
        <el-form-item label="名称" prop="name">
          <el-input v-model="dataForm.name" placeholder=""></el-input>
        </el-form-item>
        <el-form-item label="编码" prop="code">
          <el-input v-model="dataForm.code" placeholder=""></el-input>
        </el-form-item>
        <el-form-item label="排序号" prop="order_id">
          <el-input v-model="dataForm.order_id" placeholder="" type="number"></el-input>
        </el-form-item>
        <el-form-item label="状态" prop="status">
          <el-select v-model="dataForm.status" placeholder="请选择状态" style="width: 480px">
            <el-option
              v-for="item in statusOptions"
              :key="item.value"
              :label="item.label"
              :value="item.value">
            </el-option>
          </el-select>
        </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dataDialog.show = false">取 消</el-button>
        <el-button type="primary" @click="saveData">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
  import treeTable from '@/components/TreeTable'
  import dataApi from '@/api/sysData'
  import utils from '@/utils/utils'
  
  export default {
    components: {
      treeTable
    },
    data() {
      return {
        dataList: [],
        dataDialog: {
          title: '新增公共数据',
          show: false
        },
        dataForm: {
          status: 1
        },
        formRoles: {
          name: [
            { required: true, message: '请输入名称', trigger: 'blur' },
            { max: 10, message: '长度在 1 到 10 个字符', trigger: 'blur' }
          ],
          code: [
            { required: true, message: '请输入编码', trigger: 'blur' },
            { max: 20, message: '长度在 1 到 20 个字符', trigger: 'blur' }
          ],
          order_id: [
            { required: true, message: '请输排序号', trigger: 'blur' }
          ],
          status: [
            { required: true, message: '请选择状态', trigger: 'blur' }
          ]
        },
        parentSelectValue: [],
        parentSelectProps: {
          value: 'id',
          label: 'name'
        },
        statusOptions: [
          {
            value: 0,
            label: '无效'
          },
          {
            value: 1,
            label: '有效'
          }
        ]
      }
    },
    mounted() {
      this.getDataList()
    },
    methods: {
      getDataList() {
        dataApi.queryAll(res => {
          if (res.code == 200) {
            this.dataList = utils.arrToThree(res.data,{})
          }
        })
      },
      parentSelected(val) {
        this.dataForm.pid = val ? val[val.length-1] : null;
        this.dataForm.path = val ? val.join('/') : null;
      },
      openDataDialog(action, row) {
        this.dataForm = {status:1}
        if (action === 'add-action') {
          this.dataDialog.title = '新增公共数据';
          this.parentSelectValue = [];
        } else {
          this.dataDialog.title = '修改公共数据';
          
          delete row._level
          delete row._expanded
          delete row.isParent
          delete row._show

          this.dataForm = row;
          const path = this.dataForm.path;
          this.parentSelectValue = path ? path.split('/') : [];
        }
        this.dataDialog.show = true;
        
      },
      saveData() {
        this.$refs.dataForm.validate(valid => {
          if (valid) {
            dataApi.saveData(this.dataForm, res => {
              if (res.code == 200) {
                this.getDataList()
              }
            })
          }
        })
      },

      deleteData(row) {
        this.$confirm('确定删除此条记录?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          dataApi.deleteById({id: row.id}, res => {
            if (res.code == 200) {
              this.$message({
                message: res.title,
                type: 'success'
              });
              this.getDataList()
            } else {
              this.$message.error(res.title)
            }
          })
        })
      }
    }
  }
</script>
