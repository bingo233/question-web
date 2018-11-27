<template>
  <svg class="svg-icon" :class="className">
    <use :xlink:href="iconId"></use>
  </svg>
</template>

<script>
export default{
  props:{
    className:{
      type: String
    },
    icon:{
      type: String
    }
  },
  computed:{
    iconId() {
      return '#icon-' + this.icon
    }
  }
}
</script>

<style>
.svg-icon{
  width: 1em;
  height: 1em;
  vertical-align: -0.15em;
  fill: currentColor;
  overflow: hidden;
  margin-right: 16px;
}
</style>