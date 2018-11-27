<template>
  <div>
    <span class="breadcrumb-item" v-for="(rout,idx) in routs" :key="idx">
      <router-link to="/page/page2">{{rout.meta.name}}</router-link>
      <span class="split">/</span>
    </span>
    <span class="breadcrumb-item" >
      <a href="javascript:;" class="current">{{currentRoute}}</a>
      <span class="split"></span>
    </span>
  </div>
</template>

<script>
export default{
  computed:{
    routs(){
      return this.$route.matched.filter(item=>{
        return item.meta.name !== this.$route.meta.name
      })
    },
    currentRoute(){
      return this.$route.meta.name
    }
  }
}
</script>

<style lang="less">
.breadcrumb-item {
  font-weight: 700;
  color: #c0c4cc;
  display: inline-block;
  float: left;
  .split{
    margin: 0 9px;
  }
  a{
    float: left;
    outline: none;
    color: #000000;
    text-decoration: none;
  }
  .current{
    color: #97a8be;
    font-weight: 100;
  }
}
</style>
