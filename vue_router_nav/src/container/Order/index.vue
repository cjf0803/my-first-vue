<template>
  <div class="order">
    订单
    <el-row>
      <el-col :span="24"
        ><div class="grid-content bg-purple-dark">A</div></el-col
      >
    </el-row>
    <el-row>
      <el-col :span="12"><div class="grid-content bg-purple">B</div></el-col>
      <el-col :span="12"
        ><div class="grid-content bg-purple-light">C</div></el-col
      >
    </el-row>
    <el-row>
      <el-col :span="8"><div class="grid-content bg-purple">D</div></el-col>
      <el-col :span="8"
        ><div class="grid-content bg-purple-light">E</div></el-col
      >
      <el-col :span="8"><div class="grid-content bg-purple">F</div></el-col>
    </el-row>
    <el-row>
      <el-col :span="6"><div class="grid-content bg-purple"></div></el-col>
      <el-col :span="6"
        ><div class="grid-content bg-purple-light"></div
      ></el-col>
      <el-col :span="6"><div class="grid-content bg-purple"></div></el-col>
      <el-col :span="6"
        ><div class="grid-content bg-purple-light"></div
      ></el-col>
    </el-row>
    <el-row>
      <el-col :span="4"><div class="grid-content bg-purple"></div></el-col>
      <el-col :span="4"
        ><div class="grid-content bg-purple-light"></div
      ></el-col>
      <el-col :span="4"><div class="grid-content bg-purple"></div></el-col>
      <el-col :span="4"
        ><div class="grid-content bg-purple-light"></div
      ></el-col>
      <el-col :span="4"><div class="grid-content bg-purple"></div></el-col>
      <el-col :span="4"
        ><div class="grid-content bg-purple-light"></div
      ></el-col>
    </el-row>
    <swiper :options="swiperOption">
      <!-- slides -->
      <swiper-slide>I'm Slide 1</swiper-slide>
      <swiper-slide>I'm Slide 2</swiper-slide>
      <swiper-slide>I'm Slide 3</swiper-slide>
      <swiper-slide>I'm Slide 4</swiper-slide>
      <swiper-slide>I'm Slide 5</swiper-slide>
      <swiper-slide>I'm Slide 6</swiper-slide>
      <swiper-slide>I'm Slide 7</swiper-slide>
      <!-- Optional controls -->
      <div class="swiper-pagination" slot="pagination"></div>
      <div class="swiper-button-prev" slot="button-prev"></div>
      <div class="swiper-button-next" slot="button-next"></div>
      <div class="swiper-scrollbar" slot="scrollbar"></div>
    </swiper>
    <swiper :options="swiperOption1">
      <swiper-slide v-for="slide of banners" :key="slide.id">
        <img  class=" img" :src="slide.img" alt="" />
      </swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
    <Nav_v />
  </div>
</template>

<script>
import Nav_v from "../../components/Nav/index.vue";
export default {
  name: "Order_v",
  components: {
    Nav_v,
  },
  data() {
    return {
      banners: [
        {
          id: '001',
          img: require("@/assets/1.jpg"),
        },
        {
          id: '002',
          img: require("@/assets/2.jpg"),
        },
        {
          id: '003',
          img: require("@/assets/3.jpg"),
        }
      ],
    
      swiperOption: {
        pagination: {
          el: ".swiper-pagination",
        },
        autoplay: true,
        // some swiper options...
      },
      swiperOption1:{
        autoplay: true,
      }
    };
  },
  mounted() {
    setTimeout(() => {
      this.banners.push("../../assets/4.jpg");
      console.log("banners update");
    }, 3000);
    console.log(
      "This is current swiper instance object",
      this.mySwiper,
      "It will slideTo banners 3"
    );
    // this.mySwiper.slideTo(3, 1000, false);
    // current swiper instance
    // 然后你就可以使用当前上下文内的swiper对象去做你想做的事了
    // console.log("this is current swiper instance object", this.swiper);
    // this.swiper.slideTo(3, 1000, false);
  },
  computed: {
    swiper() {
      return this.$refs.mySwiper.swiper;
    },
  },
  mounted() {
    //这是get请求无参;
    this.$axios
      .get("http://reactnative.dev/movies.json")
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  },
};
</script>

<style>
.el-row {
  margin-bottom: 20px;
}
.el-col {
  border-radius: 4px;
}
.bg-purple-dark {
  background: #99a9bf;
}
.bg-purple {
  background: #d3dce6;
}
.bg-purple-light {
  background: #e5e9f2;
}
.grid-content {
  border-radius: 4px;
  min-height: 36px;
}
.row-bg {
  padding: 10px 0;
  background-color: #f9fafc;
}
img {
  width: 100%;
  height: 300px;
}
</style>