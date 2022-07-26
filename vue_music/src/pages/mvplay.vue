<template>
  <div class="play">
    <div class="header">
      <div class="title">
        <router-link to="/home">
          <i class="iconfont icon-shouye left"></i>
        </router-link>
        <div class="music-info">
          <p>{{ this.$route.params.mvname }}</p>
          <p class="author">{{ this.$route.params.author }}</p>
        </div>
        <router-link to="/search"
          ><i class="iconfont icon-sousuo right"></i
        ></router-link>
      </div>
    </div>

    <div class="song-info">
      <div class="mv">
        <video
          :src="this.currentUrl.url"
          controls
          autoplay
          :poster="this.$route.params.mvPicUrl"
         
         
        ></video>
      </div>
      <div class="iconbox">
        <i class="iconfont icon-shoucang2 left"></i>
        <i class="box"></i>
        <i class="iconfont icon-xiazai right"></i>
      </div>
    </div>
  </div>
</template>

<script>
import "../assets/font/iconfont.css";
export default {
  name: "mvplay",
  data() {
    return {
      currentUrl: {
        url: "",
      },
    };
  },
  mounted() {
    const playUrl = this.HOST + "/mv/url?id=" + this.$route.params.mvid;
    this.$axios
      .get(playUrl)
      .then((res) => {
        
        this.currentUrl = res.data.data;
      })
      .catch((error) => {
        console.log(error);
      });
  },
};
</script>

<style scoped>
.header {
  padding: 15px;
}

.music-info {
  flex: 1;
  font-size: 20px;
}

.title {
  display: flex;
  text-align: center;
}

.left {
  font-size: 30px;
}

.ca {
  color: red;
}

.right {
  font-size: 30px;
}

.song-info {
  padding: 15px;
}

.song-info-img {
  text-align: center;
}

.song-info-img img {
  width: 50%;
  border-radius: 5px;
  box-shadow: 0 0 10px 0 rgba(50, 50, 50, 0.31);
  margin-bottom: 15px;
}

.song-lrc {
  margin-top: 10px;
  min-height: 50px;
}

.iconbox {
  display: flex;
  margin-top: 30px;
}

.iconbox .box {
  flex: 1;
}

.mv {
  width: 100%;
  text-align: center;
  height: 500px;
}

.mv video {
  width: 97%;
  height: 59%;
  margin-top:70px

}

.active {
  color: rgb(14, 96, 131);
}

.author {
  font-size: 18px;
  color: #999;
  margin-top: 5px;
}
p {
    font-size: 24px;
    font-style: italic;
}
</style>