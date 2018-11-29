<template>
  <div class="tree-table-box">
    <el-table :data="tableData" :row-style="showRow" v-bind="$attrs" :border="true">
      <el-table-column :label="firstColLabel" :prop="firstColProp" width="200" :show-overflow-tooltip="true">
      <template slot-scope="scope">
        <span class="table-tree-space" v-for="space in scope.row._level" :key="space"></span>
        <span class="table-tree-togger" v-if="scope.row.isParent" @click="toggerExpanded(scope.$index)">
            <i v-if="!scope.row._expanded" class="el-icon-plus" />
            <i v-else class="el-icon-minus"/>
          </span>
        <span>{{scope.row[firstColProp]}}</span>
      </template>
      </el-table-column>
      <slot></slot>
    </el-table>
  </div>
</template>

<script>
import treeToArray from './treeToArray'
export default {
  name: 'TreeTable',
  props: {
    tabData: {
      type: Array,
      default: function () {
        return []
      }
    },
    firstColLabel: {
      type: String,
      default: ''
    },
    firstColProp: {
      type: String,
      default: ''
    },
    expendAll: {
      type: Boolean,
      default: false
    },
    childrenName: {
      type: String,
      default: 'children'
    }
  },
  data() {
    return {

    }
  },
  computed: {
    tableData() {
      const s = treeToArray(this.tabData,this.childrenName,this.expendAll);
      // console.log(s);
      return s
    }
  },
  created() {
    console.log(this.$slots)
  },
  mounted() {
    // console.log(treeToArray(this.tabData,'children'),1)
  },
  methods: {
    toggerExpanded(index) {
      let row = this.tableData[index];
      row._expanded = !row._expanded
    },
    showRow(row, rowIndex) {
      const show = (row.row.parent ? (row.row.parent._expanded && row.row.parent._show) : true);
      row.row._show = show;
      return show ? 'animation:treeTableShow 1s;-webkit-animation:treeTableShow 1s;' : 'display:none;'
    }
  }
}
</script>

<style lang="less">
.tree-table-box{
  .table-tree-space{
    display: inline-block;
    width: 18px;
    height: 1px;
  }
  .table-tree-togger{
    display: inline-block;
    cursor: pointer;
    color: #2196F3;
    margin-left: -18px;
  }

  @keyframes treeTableShow {
    from {opacity: 0;
    }
    to {opacity: 1;
    }
  }
  @-webkit-keyframes treeTableShow {
    from {opacity: 0;
    }
    to {opacity: 1;
    }
  }
}
</style>
