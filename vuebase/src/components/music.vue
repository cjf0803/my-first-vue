<template>
  <div class="music">
    音乐实例
    <p class="p1" ref="p1">原来元素</p>
    <input type="text" ref="text" value="">
    <button type="button" @click="change">点我一下</button>
  </div>
</template>

<script>
export default {
  name: "music_vue",
  data() {
    return {};
  },
  mounted() {
    this.$refs.p1.innerHTML = "牛逼啊";
    console.log(this.$refs.p1);
    this.$refs.text.value='耶耶'
  },
  methods:{
    change(){
        console.log(
            this.$refs.text.value
        )
    }
  }
};
</script>

<style>
</style>