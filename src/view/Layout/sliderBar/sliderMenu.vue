<template>
    <el-menu
      default-active="2"
      background-color="#304156"
      text-color="#bfcbd9"
      :collapse="isCollapse"
      :router="true"
      >
      <template v-for="(item,idx) in routes" > 

        <el-submenu v-if="item.children && item.children.length > 0" :index="item.children[0].url" :key="idx">
          <template slot="title">
            <!-- <svg-icon :icon="item.icon" v-if="item.icon"></svg-icon> -->
            <web-svg :svgId="item.icon" v-if="item.icon" width="16px" height="16px" webSvgClass="app-menu-svg"></web-svg>
            <span v-if="item.name">{{item.name}}</span>
          </template>
          <el-menu-item :index="menu.url" v-for="(menu,index) in item.children" :key="index">
            <!-- <svg-icon :icon="menu.icon" v-if="menu.icon"></svg-icon> -->
            <web-svg :svgId="menu.icon" v-if="menu.icon" width="16px" height="16px" webSvgClass="app-menu-svg"></web-svg>
            <span v-if="menu.name">{{menu.name}}</span>
          </el-menu-item>
        </el-submenu>

        <el-menu-item v-else :index="item.url" :key="item.id">
          <!-- <svg-icon :icon="item.icon" v-if="item.icon"></svg-icon> -->
          <web-svg :svgId="item.icon" v-if="item.icon" width="16px" height="16px" webSvgClass="app-menu-svg"></web-svg>
          <span slot="title" v-if="item.name">{{item.name}}</span>
        </el-menu-item>

      </template>

    </el-menu>
</template>

<script>
import webSvg from '@/components/SvgIcon/webSvg'
export default {
  components: {
    webSvg
  },
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

<style lang="less">
  .app-menu-svg{
    line-height: 13px;
    margin-right: 5px;
  }
</style>