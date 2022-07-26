<template lang="html">
  <div class="banner">
    <swiper :options="swiperOption">
      <swiper-slide>
        <img src="http://p4.music.126.net/Ea88ud2UYyWtjHQqqt0gRA==/109951164006892980.jpg" alt="">
      </swiper-slide>
      <swiper-slide>
        <img src="http://p1.music.126.net/Cs4n5KxFFt6fO1Sj89tlRg==/109951167286189358.jpg" alt="">
      </swiper-slide>
      <swiper-slide>
        <img src="http://p1.music.126.net/Ep8NNLccz2h8q2oNlTNMug==/109951167362574403.jpg" alt="">
      </swiper-slide>
      <div class="swiper-pagination"  slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>

import 'swiper/dist/css/swiper.css'
import { swiper, swiperSlide } from 'vue-awesome-swiper'

export default {
  data(){
    return{
      swiperOption:{
        pagination: {
          el: '.swiper-pagination',
        },
        autoplay:true
      }
    }
  },
  components: {
    swiper,
    swiperSlide
  }
}
</script>

<style scoped>

.banner img{
 
  height: 280px;
  width: 100%;
}

</style>
