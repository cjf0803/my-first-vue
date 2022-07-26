<template lang="html">
  <div class="">
    <MusicList :url="url" />
  </div>
</template>

<script>

import MusicList from "../../components/Music_List"

export default {
  data(){
    return{
      url:"/album?id=32311"
    }
  },
  components:{
    MusicList
  }
}
</script>

<style lang="css">
</style>
