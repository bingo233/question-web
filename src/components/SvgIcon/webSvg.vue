<template>
  <svg t="1539155019608" class="icon" v-html="svgPath" viewBox="0 0 1028 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2345" xmlns:xlink="http://www.w3.org/1999/xlink" :width="width" :height="height" style="fill: currentColor;">

  </svg>
</template>

<script>

    import svgApi from '@/api/svg'
    export default {
      name: "webSvg",
      data() {
        return {
          svgPath: ''
        }
      },
      props: {
          svgId: {
            type: String,
            default: ''
          },
          width: {
            type: Number,
            default: 18
          },
          height: {
            type: Number,
            default: 18
          }
      },
      mounted() {
        svgApi({id:this.svgId},res => {
          this.svgPath = res
        })
      }
    }
</script>
