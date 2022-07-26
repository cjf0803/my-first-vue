<template>
  <div class="more-list">
    <VuePullRefresh :on-refresh="onRefresh">
      <div class="wrapper">
        <h3>{{ this.$route.params.title }}</h3>
        <router-link
          :to="{
            name: 'ArtistsDetails',
            params: { picUrl: item.picUrl, name: item.name, id: item.id },
          }"
          tag="div"
          class="info url log"
          v-for="(item, index) in moreListData"
          :key="index"
        >
          <div class="poster">
            <img :src="item.picUrl" />
          </div>
          <div class="text-wrap">
            <div class="author">{{ item.name }}</div>
          </div>
        </router-link>
      </div>
    </VuePullRefresh>
  </div>
</template>

<script>
import VuePullRefresh from "vue-pull-refresh";

export default {
  name: "morelist",
  data() {
    return {
      moreListData: {},
      offset: 0,
    };
  },
  mounted() {
    const moreListUrl =
      this.HOST +
      "/artist/list?type=" +
      this.$route.params.musicType +
      "&area=96&initial=b&limit=20&offset="+this.offset;
    this.$axios
      .get(moreListUrl)
      .then((res) => {
        this.moreListData = res.data.artists;
        this.offset = this.offset+20
      })
      .catch((error) => {
        console.log(error);
      });
  },
  components: {
    VuePullRefresh,
  },
  methods: {
    // 下拉的时候触发函数
    onRefresh: function () {
      var that = this;
      const moreListUrl =
        this.HOST +
        "/artist/list?type=" +
        this.$route.params.musicType +
        "&area=96&initial=b&limit=20&offset=" +
        that.offset;
      return new Promise(function (resolve, reject) {
        setTimeout(() => {
          that.$axios
            .get(moreListUrl)
            .then((res) => {
              console.log(res.data);
               res.data.more==false
                ? alert("不好意思，刷新到底了哦~")
                : (that.offset += 20),
                // that.moreListData = that.moreListData.concat(res.data.song_list)
                (that.moreListData = res.data.artists);
              resolve();
            })
            .catch((error) => {
              console.log(error);
            });
        }, 777);
      });
    },
  },
};
</script>

<style scoped>
.wrapper {
  padding-top: 18px;
  text-align: center;
  margin-bottom: 10px;
  background: #f1f1f1;
  clear: both;
  overflow: hidden;
  margin-left: 32px;
}

h3 {
  font-size: 22px;
  text-align: left;
  margin-left: 17px;
  margin-bottom: 5px;
}

.wrapper .info {
  width: 42%;
  float: left;
  text-align: center;
  padding-left: 17px;
  display: block;
  text-align: left;
  margin-bottom: 10px;
  position: relative;
}
</style>