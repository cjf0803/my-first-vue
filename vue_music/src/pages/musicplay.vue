<template>
  <div class="play">
    <div class="header">
      <div class="title">
        <router-link to="/home">
          <i class="iconfont icon-shouye left"></i>
        </router-link>
        <div class="music-info">
          <p>{{ this.$route.params.songname }}</p>
          <p class="author">{{ this.$route.params.author }}</p>
        </div>
        <router-link to="/search"
          ><i class="iconfont icon-sousuo right"></i
        ></router-link>
      </div>
    </div>

    <div class="song-info">
      <div class="song-info-img">
        <img :src="this.$route.params.songPicUrl" alt="" />
        <LRCVue :currentTime="currentTime" :durationTime="durationTime" :songid="this.$route.params.songid" />
      </div>
      <div class="iconbox">
        <i class="iconfont icon-shoucang2 left"></i>
        <i class="box"></i>
        <i class="iconfont icon-xiazai right"></i>
      </div>
    </div>
    <div class="song">
      <audio ref="player" :src="currentUrl[0].url" controls autoplay></audio>
    </div>
  </div>
</template>

<script>
import Vue from "vue";
import "../assets/font/iconfont.css";
// 异步操作
const LRCVue = Vue.component("lrc", (resolve) =>
  require(["../components/LRC"], resolve)
);
export default {
  name: "musicplay",
  data() {
    return {
      currentUrl: [
        {
          url: "",
        },
      ],
      currentTime:0,
      durationTime:0
    };
  },
  components: {
    LRCVue,
  },
  mounted() {
    const playUrl = this.HOST + "/song/url?id=" + this.$route.params.songid;
    this.$axios
      .get(playUrl)
      .then((res) => {
        console.log(res.data.data);
        this.currentUrl = res.data.data;
      })
      .catch((error) => {
        console.log(error);
      });
    this.addEventListeners();
  },
  beforeDestroyed() {
    this.removeEventListeners();
  },
  methods: {
    addEventListeners() {
      this.$refs.player.addEventListener("timeupdate", this._currentTime),
        this.$refs.player.addEventListener("canplay", this._durationTime);
    },
    removeEventListeners: function () {
      this.$refs.player.removeEventListener("timeupdate", this._currentTime);
      this.$refs.player.removeEventListener("canplay", this._durationTime);
    },
    _currentTime() {
      this.currentTime = this.$refs.player.currentTime;
      // currentTime是audio标签提供的获取当前播放时间的方法
    },
    _durationTime() {
      this.durationTime = this.$refs.player.duration;
      // duration是audio标签提供的获得歌曲播放整体时间的方法
    },
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

.song {
  width: 100%;
  text-align: center;
}

.song audio {
  width: 80%;
}

.active {
  color: rgb(14, 96, 131);
}

.author {
  font-size: 15px;
  color: #999;
  margin-top: 5px;
}
</style>