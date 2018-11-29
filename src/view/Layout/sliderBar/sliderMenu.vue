<template>
    <el-menu
      default-active="2"
      background-color="#304156"
      text-color="#bfcbd9"
      :collapse="isCollapse"
      :router="true"
      >
      <template v-for="(item,idx) in routes" > 

        <el-submenu v-if="item.children && item.children.length > 0" :index="item.children[0].path" :key="idx">
          <template slot="title">
            <svg-icon :icon="item.icon" v-if="item.icon"></svg-icon>
            <span v-if="item.name">{{item.name}}</span>
          </template>
          <el-menu-item :index="menu.path" v-for="(menu,index) in item.children" :key="index">
            <svg-icon :icon="menu.icon" v-if="menu.icon"></svg-icon>
            <span v-if="menu.name">{{menu.name}}</span>
          </el-menu-item>
        </el-submenu>

        <el-menu-item v-else :index="item.path" :key="item.id">
          <svg-icon :icon="item.icon" v-if="item.icon"></svg-icon>
          <span slot="title" v-if="item.name">{{item.name}}</span>
        </el-menu-item>

      </template>

    </el-menu>
</template>

<script>

export default {
  props:{
    routes:{
      type: Array,
      default: () => []
    },
    isCollapse:{
      type: Boolean,
      default: false
    }
  },
  created() {
    console.log(this.routes)
  }
}
</script>