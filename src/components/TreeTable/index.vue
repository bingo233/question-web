<template>
  <div class="tree-table-box">
    <el-table :data="tableData" :row-style="showRow" v-bind="$attrs">
      <el-table-column label="id" prop="id">
        <template slot-scope="scope">
          <span class="table-tree-space" v-for="space in scope.row._level" :key="space"></span>
          <span class="table-tree-togger" v-if="scope.row.isParent">
            <i v-if="!scope.row._expanded" class="el-icon-plus" @click="toggerExpanded(scope.$index)"/>
            <i v-else class="el-icon-minus"/>
          </span>
          
          <span>{{scope.row.id}}</span>
        </template>
      </el-table-column>
      <el-table-column label="事件" prop="event"></el-table-column>
      <el-table-column label="备注" prop="comment"></el-table-column>
    </el-table>
  </div>
</template>

<script>
import treeToArray from './treeToArray'
export default {
  name: 'TreeTable',
  data() {
    return {
      tabData: [
        {
          id: 0,
          event: '事件1',
          timeLine: 50,
          comment: '无'
        },
        {
          id: 1,
          event: '事件1',
          timeLine: 100,
          comment: '无',
          children: [
            {
              id: 2,
              event: '事件2',
              timeLine: 10,
              comment: '无'
            },
            {
              id: 3,
              event: '事件3',
              timeLine: 90,
              comment: '无',
              children: [
                {
                  id: 4,
                  event: '事件4',
                  timeLine: 5,
                  comment: '无'
                },
                {
                  id: 5,
                  event: '事件5',
                  timeLine: 10,
                  comment: '无'
                },
                {
                  id: 6,
                  event: '事件6',
                  timeLine: 75,
                  comment: '无',
                  children: [
                    {
                      id: 7,
                      event: '事件7',
                      timeLine: 50,
                      comment: '无',
                      children: [
                        {
                          id: 71,
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
  },
  computed: {
    tableData() {
      const s = treeToArray(this.tabData,'children')
      // console.log(s)
      return s
    }
  },
  mounted() {
    // console.log(treeToArray(this.tabData,'children'),1)
  },
  methods: {
    toggerExpanded(index) {
      let row = this.tableData[index]
      row._expanded = !row._expanded
    },
    showRow(row, rowIndex) {
      console.log(1111)
      if ((row.row.parent && row.row.parent._expanded) || !row.row.parent) {
        return 'display:table-row;'
      }
      return 'display:none;'
    }
  }
}
</script>

<style lang="less">
.tree-table-box{
  .table-tree-space{
    background: red;
    display: inline-block;
    width: 18px;
    height: 1px;
  }
  .table-tree-togger{
    display: inline-block;
  }
}
</style>