<template lang="html">
  <div class="art-list">
    <ul class="list">
        <router-link tag="li" :to="{name:'musicplay',params:{songid:item.id,songname:item.al.name,songPicUrl:item.al.picUrl,author:item.ar[0].name}}" class="song" v-for="(item,index) in listArr" :key="index">
        <div class="poster">
          <img :src="item.al.picUrl" alt="">
        </div>
        <div class="left">
          {{ item.al.name }}
        </div>
      </router-link>
    </ul>
  </div>
</template>

<script>
export default {
  name:"artlist",
  data(){
    return{
      listArr:[]
    }
  },
  props:{
    Aid:{
      type:Number,
      default:0
    }
  },
  mounted(){
    const ArtList = this.HOST + "/artists?id="+this.Aid
    this.$axios.get(ArtList)
      .then(res => {
        
        this.listArr = res.data.hotSongs
      })
      .catch(error => {
        console.log(error);
      })
  }
}
</script>

<style scoped>

.art-list{
  padding: 0 17px;
}

.song{
  height: 50px;
  line-height: 50px;
  border-bottom: 1px solid #999;
}
.left{
  font-size: 18;
 font-family:fantasy;
 font-weight: 500;
 cursor: pointer;
 color:cornflowerblue;
 font-style: oblique;
}

.poster {
    position: relative;
    width: 45px;
    margin-right: 8px;
    float: left;
}
</style>
