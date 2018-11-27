<template>
  <div class="app-slider-box">
    <div class="app-slider-header">
      <img src="@/assets/images/logo.png">
      <span>商城后台管理</span>
    </div>
    <el-scrollbar>
      <slider-menu :routes="routes" :isCollapse="isCollapse" class="slider-menu-box"></slider-menu>
    </el-scrollbar>
  </div>
</template>

<script>
import {mapGetters} from 'vuex'
import sliderMenu from './sliderMenu'
import utils from '@/utils/utils'

export default {
  data() {
    return {
      routes: this.$store.getters.userMenus
    }
  },
  components:{
    sliderMenu
  },
  computed:{
    ...mapGetters([
      'slider'
    ]),
    isCollapse() {
      return !this.slider.isCollapse
    }
  },
  mounted(){
    console.log(this.$store.getters.userMenus)
  }
}
</script>

<style lang="less">
.app-slider-box{
  height: 100%;
  background-color: #304156;
  color: rgb(191, 203, 217);
  font-size: 14px;
  
  .app-slider-header{
    height: 50px;
    background:#102238;
    line-height: 50px;
    text-align: center;
    overflow: hidden;
    img{
      width: 35px;
      border-radius: 4px;
      vertical-align:middle;
      margin-bottom: 5px;
      margin-right: 5px;
    }
    span{
      display: inline-block;
      line-height: 50px;
      font-size: 18px;
    }
  }
  .slider-menu-box{
    width: 100%;
    border: none;
  }
}
</style>
