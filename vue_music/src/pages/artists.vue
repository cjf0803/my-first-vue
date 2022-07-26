<template lang="html">
  <div class="artists">
     <VuePullRefresh :on-refresh="onRefresh">
      <ul class="list">
        <router-link tag="li" :to="{name:'ArtistsDetails' ,params:{picUrl:item.picUrl,name:item.name,id:item.id}}" :key="index" class="artist" v-for="(item,index) in artistsData">
          <div class="pic">
            <img :alt="item.name" :src="item.picUrl">
          </div>
          <div class="info">
            <div>{{ item.name }}</div>
          </div>
        </router-link>
      </ul>
      </VuePullRefresh>
    </div>
</template>

<script>
import VuePullRefresh from 'vue-pull-refresh';
export default {
  name:"artists",
  data(){
    return{
       artistsData:[],
       offset:0
    }
  },
  components:{
    VuePullRefresh
  },
  mounted(){
      const artistsURL = this.HOST + "/top/artists?offset="+this.offset+"&limit=15"
      this.$axios.get(artistsURL)
        .then(res => {
          this.artistsData=res.data.artists
          this.offset+=15
        })
        .catch(error => {
          console.log(error);
        })
    },
    methods:{
    // 下拉的时候触发函数
    onRefresh: function() {
        var that = this;
        const moreListUrl = this.HOST +"/top/artists?offset="+this.offset+"&limit=15"
        return new Promise(function (resolve, reject) {
          setTimeout(() => {
            that.$axios.get(moreListUrl)
              .then(res => {
                console.log(res.data);
               res.data.more==false ? alert("不要再刷嘞,已经到底啦~"):that.offset+=15
                that.artistsData = res.data.artists
                resolve();
              })
              .catch(error => {
                console.log(error);
              })
          },777)
        });
    }
  }
  }

</script>

<style scoped>

.artists{
  padding: 0 17px;
  background: #fff;
}

.list li {
    padding-left: 0;
    min-height: 70px;
    display: flex;
    align-items: center;
    border-bottom: 1px solid #F2F2F2;
}

.pic{
  width: 54px;
  height: 54px;
  margin-right: 15px;
}

.info {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    font-size: 16px;
    cursor: pointer;
}

.pic img{
  border-radius: 27px;
  overflow: hidden;
}


</style>
