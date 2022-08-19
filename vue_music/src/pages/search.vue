<template lang="html">
  <div class="search">
    <!-- 这是搜索歌曲内容 -->
    <el-collapse accordion>
    <el-collapse-item title="-------#搜索歌曲内容-------" >
    <div class="search-title">   
      <el-input placeholder="请输入关键字搜索歌曲内容~" v-model="searchMusicContent" name="" clearable></el-input>   
      <el-row><el-button type="primary"  @click="searchMusicHandler" name="button" class="button">搜索歌曲</el-button></el-row>
    </div>
    
    <ul class="list searchlist">
     <router-link :key="index" tag="li" :to="{name:'musicplay',params:{songid:item.id,songname:item.name,songPicUrl:item.artists[0].img1v1Url,author:item.artists[0].name}}" class="song" v-for="(item,index) in songlist">
       <div class="left">
         <div class="info  single-line ">
             <div>
                 <span>{{ item.name }}</span>
             </div>
             <span class="txt">{{ item.artists[0].name }}</span>
         </div>
       </div>
     </router-link>
   </ul>
   </el-collapse-item>
   </el-collapse>
   <!-- 这是搜索歌手mv -->
   <el-collapse  accordion>
    <el-collapse-item title="-------#搜索歌手mv---------" >
    <div class="search-title">   
      <el-input placeholder="请输入歌手搜索歌曲Mv~" v-model="searchMv" name="" clearable></el-input>   
      <el-row><el-button type="success"  @click="searchMvHandler" name="button" class="button">搜索Mv</el-button></el-row>
    </div>
    <ul class="list searchlist">
     <router-link :key="index" tag="li" :to="{name:'mvplay',params:{mvid:item.id,mvname:item.name,mvPicUrl:item.imgurl,author:item.artistName}}" class="song" v-for="(item,index) in mvs">
       <div class="left">
         <div class="info  single-line ">
             <div>
                 <span>{{ item.name }}</span>
             </div>
             <span class="txt">{{ item.artistName }}</span>
         </div>
       </div>
     </router-link>
   </ul>
   </el-collapse-item>
   </el-collapse>
   <!-- 这是搜索歌手详情 -->
   <!-- <el-collapse accordion>
    <el-collapse-item  >
    <div class="search-title">   
      <el-input placeholder="请输入歌手搜索歌手详情~" v-model="searchArtistDetails" name="" clearable></el-input>   
      <el-row><el-button type="info"  @click="searchArtistDetailsHandler" name="button" class="button">搜索详情</el-button></el-row>
    </div>
    <ul class="list searchlist">
      <li class="song" v-for="(item,index) in v_details" :key="index">
       <div class="left">
         <div class="info  single-line ">
             <div>
                {{item.briefDesc}}
             </div>          
         </div>
       </div>
       </li>
   </ul>
   </el-collapse-item>
   </el-collapse> -->
  </div>
</template>

<script>
export default {
  name: "search",
  data() {
    return {
      searchMusicContent: "",
      searchMv:'',
      searchArtistDetails:'',
      songlist: [],
      Artistid:"",
      Artistid_detail:"",
      briefDesc:"",
      mvs:[],
      v_details:{}
    };
  },
  methods: {
    searchMusicHandler() {
      const searchURL =
        this.HOST + "/search/suggest?keywords=" + this.searchMusicContent;
      this.$axios
        .get(searchURL)
        .then((res) => {
          if (res.data.code > 201) {
            alert("搜索数据不存在");
            return;
          }
          this.songlist = res.data.result.songs;
          console.log(res.data.result.songs);
        })
        .catch((error) => {
          console.log(error);
        });
    },
     searchMvHandler() {
      const searchURL =
        this.HOST + "/search/suggest?keywords=" + this.searchMv;
      this.$axios
        .get(searchURL)
        .then((res) => {
          if (res.data.code > 201) {
            alert("搜索数据不存在");
            return;
          }
          this.Artistid = res.data.result.artists[0].id;
          
          const searchMvUrl=this.HOST+"/artist/mv?id="+this.Artistid;
          this.$axios.get(searchMvUrl).then((res)=>{
            if (res.data.code > 201) {
            alert("搜索数据不存在");
            return;
          }
          this.mvs=res.data.mvs
          console.log(res.data.mvs)
          
          })
          .catch((error1)=>{
            console.log(error1);
          })
        })
        .catch((error) => {
          console.log(error);
        });
    },
      searchArtistDetailsHandler() {
      const searchURL =
        this.HOST + "/search/suggest?keywords=" + this.searchArtistDetails;
      this.$axios
        .get(searchURL)
        .then((res) => {
          if (res.data.code > 201) {
            alert("搜索数据不存在");
            return;
          }
          this.Artistid_detail = res.data.result.artists[0].id;
          console.log(res.data.result.artists[0].id)
          const searchArtistDetailUrl=this.HOST+"/artist/detail?id="+this.Artistid_detail;
          this.$axios.get(searchArtistDetailUrl).then((res)=>{
            if (res.data.code > 201) {
            alert("搜索数据不存在");
            return;
          }
          this.v_details=res.data.data.artist
          console.log(res.data.data.artist.briefDesc)
          
          })
          .catch((error1)=>{
            console.log(error1);
          })
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
};
</script>

<style scoped>
.search-title {
  padding: 20px;
  overflow: hidden;
  clear: both;
}

input {
  width: 80%;
  height: 30px;
  line-height: 30px;
  background: #fff;
  border: 1px solid #f1f2f3;
  padding-left: 10px;
  float: left;
  display: inline-block;
}

button {
  margin:17px 0px 0px 411px
}

.list {
  word-wrap: break-word;
  -webkit-hyphens: auto;
  hyphens: auto;
  word-break: break-all;
  border-bottom: 1px solid #e5e5e5;
  border-top: 1px solid #e5e5e5;
}

.list li.song {
  -webkit-box-pack: justify;
  -webkit-justify-content: space-between;
  justify-content: space-between;
  min-height: 55px;
  text-align: left;
}

li {
  display: -webkit-box;
  display: -webkit-flex;
  display: flex;
  -webkit-box-orient: horizontal;
  -webkit-box-direction: normal;
  -webkit-flex-direction: row;
  flex-direction: row;
  -webkit-box-pack: start;
  -webkit-justify-content: flex-start;
  justify-content: flex-start;
  -webkit-box-align: center;
  -webkit-align-items: center;
  align-items: center;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  min-height: 50px;
  border-bottom: 1px solid #f2f2f2;
  padding-left: 10px;
}

.list .item.song .left,
.list li.song .left {
  display: -webkit-box;
  display: -webkit-flex;
  display: flex;
  -webkit-box-orient: horizontal;
  -webkit-box-direction: normal;
  -webkit-flex-direction: row;
  flex-direction: row;
  -webkit-box-pack: start;
  -webkit-justify-content: flex-start;
  justify-content: flex-start;
  -webkit-box-align: center;
  -webkit-align-items: center;
  align-items: center;
  -webkit-box-flex: 1;
  -webkit-flex: 1;
  flex: 1;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.list .item .info,
.list li .info {
  -webkit-box-flex: 1;
  -webkit-flex: 1;
  flex: 1;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.list li .info > span {
  font-weight: 400;
  display: block;
  font-size: 12px;
  color: #999;
}
</style>
