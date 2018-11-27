<template>
    <svg @click="toggleMenu" t="1492500959545" class="hamburger"  :class="toggleMenuClass" viewBox="0 0 1024 1024"
      version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1691" xmlns:xlink="http://www.w3.org/1999/xlink" width="50" height="50">
      <path d="M966.8023 568.849776 57.196677 568.849776c-31.397081 0-56.850799-25.452695-56.850799-56.850799l0 0c0-31.397081 25.452695-56.849776 56.850799-56.849776l909.605623 0c31.397081 0 56.849776 25.452695 56.849776 56.849776l0 0C1023.653099 543.397081 998.200404 568.849776 966.8023 568.849776z"
        p-id="1692"></path>
      <path d="M966.8023 881.527125 57.196677 881.527125c-31.397081 0-56.850799-25.452695-56.850799-56.849776l0 0c0-31.397081 25.452695-56.849776 56.850799-56.849776l909.605623 0c31.397081 0 56.849776 25.452695 56.849776 56.849776l0 0C1023.653099 856.07443 998.200404 881.527125 966.8023 881.527125z"
        p-id="1693"></path>
      <path d="M966.8023 256.17345 57.196677 256.17345c-31.397081 0-56.850799-25.452695-56.850799-56.849776l0 0c0-31.397081 25.452695-56.850799 56.850799-56.850799l909.605623 0c31.397081 0 56.849776 25.452695 56.849776 56.850799l0 0C1023.653099 230.720755 998.200404 256.17345 966.8023 256.17345z"
        p-id="1694"></path>
    </svg>
</template>

<script>
import {mapGetters} from 'vuex'

export default {
  computed:{
    ...mapGetters([
      'slider'
    ]),
    toggleMenuClass() {
      return this.slider.isCollapse ? 'hamburgerDefault' : 'hamburgerToggle'
    }
  },
  data() {
    return {
     // toggleMenuClass: ''
    }
  },
  methods: {
    toggleMenu() {
      this.$store.commit('TOGGLE_SLIDER')
    }
  }
}
</script>

<style lang="less">
  .hamburger{
    height: 20px;
    width: 20px;
    padding: 14px;
    float: left;
  }
  .hamburgerDefault{
    -webkit-transform:rotate(0deg);
    transform:rotate(0deg);
    -webkit-transition:-webkit-transform 0.5s linear;
    transition:transform 0.5s linear;
  }
  .hamburgerToggle{
    -webkit-transform:rotate(90deg);
    transform:rotate(90deg);
    -webkit-transition:-webkit-transform 0.5s linear;
    transition:transform 0.5s linear;
  }
</style>