<template>
  <div class="app-wrapper">
    <el-container>
      <el-aside width="180px" class="app-aside" :class="toggelSliderClass">
        <slider-bar></slider-bar>
      </el-aside>
      <el-container>
        <el-header height="50px" style="background: #ffffff;">
          <nav-bar></nav-bar>
        </el-header>
        <el-main>
          <el-card class="box-card">
            <router-view></router-view>
          </el-card>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import resize from './mixins/resize'
import sliderBar from './sliderBar/sliderBar'
import navBar from './navBar/navBar'
import {mapGetters} from 'vuex'

export default {
  computed: {
    ...mapGetters([
      'slider'
    ]),
    isCollapse() {
      return !this.slider.isCollapse
    },
    toggelSliderClass() {
      console.log(this.isCollapse);
      return this.isCollapse ? 'app-slider-close' : 'app-slider-open'
    }
  },
  mixins:resize,
  data() {
    return {

    }
  },
  components:{
    sliderBar,
    navBar
  }
}
</script>

<style>
  .app-slider-open{
    width: 180px;
    -webkit-animation:slider-open 0.5s ease;
  }
  .app-slider-close{

    -webkit-animation:slider-close 0.5s ease;
    width: 60px !important;
  }
  @keyframes slider-open{
    from {width:60px;}
    to {width:180px;}
  }

  @-webkit-keyframes slider-open /*Safari and Chrome*/{
    from {width:60px;}
    to {width:180px;}
  }

  @keyframes slider-close{
    from {width:180px;}
    to {width:60px;}
  }

  @-webkit-keyframes slider-close /*Safari and Chrome*/{
    from {width:180px;}
    to {width:60px;}
  }
</style>
