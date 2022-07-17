<template>
  <div class="base">
    这是base 路径：{{ getCurrentUrl }}
  </div>
</template>

<script>
export default {
    name:'BaseVue',
    data() {
        return {
            
        }
    },
    computed:{
      getCurrentUrl(){
        return this.$route.path
      }
    }
}
</script>

<style>

</style>