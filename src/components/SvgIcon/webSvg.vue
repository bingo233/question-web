<template>
  <span v-html="svgPath" class="web-svg-container" :style="containerStyle">

  </span>
</template>

<script>

    import svgApi from '@/api/svg'
    export default {
      name: "webSvg",
      data() {
        return {
          svgPath: '',
          containerStyle: {
            display: 'inline-block',
            width: this.width,
            height: this.height
          }
        }
      },
      props: {
          svgId: {
            type: String,
            default: ''
          },
          width: {
            type: String,
            default: '18px'
          },
          height: {
            type: String,
            default: '18px'
          }
      },
      watch: {
        svgId() {
          if (!this.svgId) {
            return this.svgPath = ''
          }
          svgApi({id:this.svgId},res => {
            this.svgPath = res
          })
        }
      },
      mounted() {
        if (!this.id) {
          return this.svgPath = ''
        }
        // svgApi({id:this.svgId},res => {
        //   this.svgPath = res
        // })
      }
    }
</script>

<style>
  .web-svg-container svg{
    fill: currentColor;
  }
</style>
