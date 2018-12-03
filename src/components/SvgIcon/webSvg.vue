<template>
  <span v-html="svgPath" class="web-svg-container" :class="webSvgClass" :data-key="svgId+'---ssss'" :style="containerStyle">

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
          },
          webSvgClass: {
            type: String
          }
      },
      watch: {
        svgId() {
          
          if (!this.svgId) {
            return this.svgPath = ''
          }
          svgApi({id:this.svgId},res => {
            console.log(this.svgId,111)
            if (res && res.code == 200) {
              console.log(res)
              this.svgPath = res.data
            }else {
              this.svgPath = ''
            }
          })
        }
      },
      mounted() {
        if (!this.svgId) {
          return false;
        }
        svgApi({id:this.svgId},res => {
          this.svgPath = res.data
        })
      }
    }
</script>

<style>
  .web-svg-container svg{
    fill: currentColor;
  }
</style>
