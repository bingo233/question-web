<template>
  <div class="sys-menu-container">
    <el-form :model="queryData" :inline="true" >
      <el-form-item label="菜单名称">
        <el-input v-model="queryData.likeStr"></el-input>
      </el-form-item>
      <el-form-item label="">
        <el-button type="primary">搜索</el-button>
      </el-form-item>
      <el-form-item label="">
        <el-button type="primary" @click="updateDialog = {show:true,title:'新增菜单'}">新增</el-button>
      </el-form-item>
    </el-form>
    <tree-table :loading="listLoading" :tabData="menuData" firstColLabel="名称" firstColProp="name" :expendAll="true" childrenName="children">
      <!--<el-table-column label="id" prop="id"></el-table-column>-->
      <el-table-column label="路径" prop="url"></el-table-column>
      <el-table-column label="备注" prop="comment"></el-table-column>
      <el-table-column label="操作">
        <template slot-scope="scope">
          <el-button
            size="mini"
            @click="editForm(scope.$index, scope.row)">编辑</el-button>
          <el-button
            size="mini"
            type="danger"
            @click="deletForm(scope.$index, scope.row)">删除</el-button>
      </template>
      </el-table-column>
    </tree-table>

    <el-dialog :title="updateDialog.title" :visible.sync="updateDialog.show" width="600px">
      <el-form :model="formData" label-width="80px" :rules="formRules" ref="menuForm">
        <el-form-item label="父级菜单" prop="pid">
          <el-cascader
            :options="menuData"
            :props="cascaderProps"
            style="width: 480px"
            @change="selectParentMenu"
            :change-on-select="true"
            v-model="parentSelector">
          </el-cascader>
        </el-form-item>
        <el-form-item label="菜单名称" prop="name">
          <el-input v-model="formData.name" placeholder=""></el-input>
        </el-form-item>
        <el-form-item label="链接地址" prop="url">
          <el-input v-model="formData.url" placeholder=""></el-input>
        </el-form-item>
        <el-form-item label="菜单图标" prop="icon">
          <div class="menu-svg-box">
            <web-svg :svgId="svgId" width="40px" height="40px"></web-svg>
          </div>
          <el-upload
            class="upload-demo"
            action="http://localhost:3000/upload/uploadSvg"
            :on-success="svgUploadSuccess"
            :show-file-list="false"
            accept="image/svg+xml"
            :multiple="false"
            :file-list="fileList">
            <el-button size="small" type="primary">点击上传</el-button>
            <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
          </el-upload>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="updateDialog.show = false">取 消</el-button>
        <el-button type="primary" @click="submitForm">确 定</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
  import treeTable from '@/components/TreeTable'
  import utils from '@/utils/utils'
  import menuApi from '@/api/menu'
  import webSvg from '@/components/SvgIcon/webSvg'
  import menu from "../../store/modules/menu";

  export default{
    components:{
      treeTable,
      webSvg
    },
    data() {
      return {
        queryData: {
          likeStr: ''
        },
        menuData: [],
        updateDialog: {
          title: '新增菜单',
          show: false,
        },
        listLoading: false,
        formData: {},
        cascaderProps: {
          value: 'id',
          label: 'name',
          children: 'children'
        },
        svgId: '',
        fileList: [],
        parentSelector: [],
        formRules: {
          name: [
            { required: true, message: '请输入菜单名称', trigger: 'blur' },
            { max: 5, message: '长度不可以大于5个字符', trigger: 'blur' }
          ],
          url: [
            { required: true, message: '请输入菜单路径', trigger: 'blur' },
            { max: 100, message: '长度不可以大于100个字符', trigger: 'blur' }
          ]
        }
      }
    },
    mounted() {
      this.getMenus()
    },
    methods: {
      getMenus() {
        this.listLoading = true
        menuApi.getMenus(res => {
          if (res.code === 200) {
            this.menuData = utils.arrToThree(res.data,{cName: 'children'})
            console.log(this.menuData)
          }
          this.listLoading = false
        })
      },
      selectParentMenu(value) {
        this.formData.path = value.join('/')
        this.formData.pid = value[value.length-1]
      },
      svgUploadSuccess(response, file, fileList) {
        this.formData.icon = this.svgId = response.filename
      },
      submitForm() {
        this.$refs.menuForm.validate((valid) => {
          if (valid) {
            delete this.formData.parent
            delete this.formData._level
            delete this.formData._expanded
            delete this.formData._show
            delete this.formData.isParent
            delete this.formData.children

            menuApi.saveMenu(this.formData, res => {
              if (res.code == 200) {
                this.updateDialog.show = false;
                this.getMenus()
              } else {

              }
            })
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
      editForm(index , row) {
        this.updateDialog = {
          show: true,
          title: '菜单编辑'
        };

        this.formData = row;
        this.svgId = this.formData.icon
      },
      deletForm(index ,row ) {
        this.$confirm('确定删除此条记录?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          menuApi.deleteMenu({id: row.id}, res => {
            if (res.code == 200) {
              this.$message({
                message: res.title,
                type: 'success'
              });
              this.getMenus()
            }else {
              this.$message({
                message: res.title,
                type: 'error'
              });
            }
          })
        })
      }
    }
  }
</script>

<style lang="less">
// style="width:50px;height:50px;border:1px solid red;"
.sys-menu-container{
  .menu-svg-box{
    width: 50px;
    height: 50px;
    background: #909399;
    color: #ffffff;
    text-align: center;
    overflow: hidden;
    line-height: 81px;
  }
}
</style>
