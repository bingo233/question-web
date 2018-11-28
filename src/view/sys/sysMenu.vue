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
    <tree-table :tabData="tabData" firstColLabel="id" firstColProp="id" :expendAll="false" childrenName="children">
      <!--<el-table-column label="id" prop="id"></el-table-column>-->
      <el-table-column label="事件" prop="event"></el-table-column>
      <el-table-column label="备注" prop="comment"></el-table-column>
    </tree-table>
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
        ],
        tabData: [
          {
            id: '名称名称名称名称名称',
            event: '事件1',
            timeLine: 50,
            comment: '无'
          },
          {
            id: '名称名称名称名称名称1',
            event: '事件1',
            timeLine: 100,
            comment: '无',
            children: [
              {
                id:  '名称名称名称名称名称2',
                event: '事件2',
                timeLine: 10,
                comment: '无'
              },
              {
                id: '名称名称名称名称名称3',
                event: '事件3',
                timeLine: 90,
                comment: '无',
                children: [
                  {
                    id: '名称名称名称名称名称4',
                    event: '事件4',
                    timeLine: 5,
                    comment: '无'
                  },
                  {
                    id: '名称名称名称名称名称5',
                    event: '事件5',
                    timeLine: 10,
                    comment: '无'
                  },
                  {
                    id: '名称名称名称名称名称6',
                    event: '事件6',
                    timeLine: 75,
                    comment: '无',
                    children: [
                      {
                        id: '名称名称名称名称名称7',
                        event: '事件7',
                        timeLine: 50,
                        comment: '无',
                        children: [
                          {
                            id: '名称名称名称名称名称8',
                            event: '事件71',
                            timeLine: 25,
                            comment: 'xx'
                          },
                          {
                            id: 72,
                            event: '事件72',
                            timeLine: 5,
                            comment: 'xx'
                          },
                          {
                            id: 73,
                            event: '事件73',
                            timeLine: 20,
                            comment: 'xx'
                          }
                        ]
                      },
                      {
                        id: 8,
                        event: '事件8',
                        timeLine: 25,
                        comment: '无'
                      }
                    ]
                  }
                ]
              }
            ]
          }
        ]
      }
    }
  }
</script>
