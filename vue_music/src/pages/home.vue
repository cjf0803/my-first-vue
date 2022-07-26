<template>
  <div class="home">
    <VuePullRefresh :on-refresh="onRefresh">
    <Today_RecommendVue title="今日榜单" :musicType=url1 /> 
    <SwiperBanner />
    <News_MusicVue />  
    <keep-alive>
      <Music_ListnavVue />
    </keep-alive>
  
    <router-view />
    <Today_RecommendVue title="热门歌单" :musicType=url2 /> 
    </VuePullRefresh>
  </div>
</template>

<script>
import Today_RecommendVue from "../components/Today_Recommend.vue";
import News_MusicVue from "../components/News_Music.vue";
import SwiperBanner from "../components/Swiper_Banner.vue"
import Music_ListnavVue from "./musiclist/music_listnav";
import VuePullRefresh from 'vue-pull-refresh';


export default {
  data() {
    return {
        url1:1,
        url2:3
    }
  },
  components: {
    Today_RecommendVue,
    News_MusicVue,
    SwiperBanner,
    Music_ListnavVue,
    VuePullRefresh
    
},
 methods:{
    // 下拉的时候触发函数
    onRefresh: function() {
        return new Promise(function (resolve, reject) {
          setTimeout(() => {         
              })
              resolve()
          })
        }
    }
}

</script>

<style >

</style>