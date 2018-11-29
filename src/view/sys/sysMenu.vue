<template>
  <div>
    <el-form :model="queryData" :inline="true" >
      <el-form-item label="菜单名称">
        <el-input v-model="queryData.likeStr"></el-input>
      </el-form-item>
      <el-form-item label="">
        <el-button type="primary">搜索</el-button>
      </el-form-item>
      <el-form-item label="">
        <el-button type="primary" @click="updateDialog.show = true">新增</el-button>
      </el-form-item>
    </el-form>
    <tree-table :tabData="menuData" firstColLabel="名称" firstColProp="name" :expendAll="false" childrenName="children">
      <!--<el-table-column label="id" prop="id"></el-table-column>-->
      <el-table-column label="路径" prop="path"></el-table-column>
      <el-table-column label="备注" prop="comment"></el-table-column>
    </tree-table>

    <el-dialog :title="updateDialog.title" :visible.sync="updateDialog.show" width="600px">
      <el-form :model="updateDialog.formData" label-width="80px">
        <el-form-item label="父级菜单">
          <el-cascader
            :options="menuData"
            :props="cascaderProps"
            style="width: 480px"
            v-model="updateDialog.formData.pid">
          </el-cascader>
        </el-form-item>
        <el-form-item label="菜单名称">
          <el-input v-model="updateDialog.formData.name" placeholder=""></el-input>
        </el-form-item>
        <el-form-item label="链接地址">
          <el-input v-model="updateDialog.formData.path" placeholder=""></el-input>
        </el-form-item>
        <el-form-item label="菜单图标">
          <div style="width:50px;height:50px;border:1px solid red;"></div>
          <el-upload
            class="upload-demo"
            action="http://localhost:3000/upload/uploadSvg"
            @on-success="svgUploadSuccess"
            
            :file-list="fileList">
            <el-button size="small" type="primary">点击上传</el-button>
            <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
          </el-upload>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="updateDialog.show = false">取 消</el-button>
        <el-button type="primary" @click="updateDialog.show = false">确 定</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
  import treeTable from '@/components/TreeTable'
  import utils from '@/utils/utils'
  import menuApi from '@/api/menu'
  export default{
    components:{
      treeTable
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
          formData: {}
        },
        cascaderProps: {
          value: 'id',
          label: 'name',
          children: 'children'
        },
        fileList: []
      }
    },
    mounted() {
      this.getMenus()
    },
    methods: {
      getMenus() {
        menuApi.getMenus(res => {
          if (res.code === 200) {
            this.menuData = utils.arrToThree(res.data,{cName: 'children'})
          }
        })
      },
      svgUploadSuccess(response, file, fileList) {
        console.log(response)
      }
    }
  }
</script>
