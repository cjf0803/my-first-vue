<template>
  <div class="learnVue">
    <p>这是learn</p>
    {{ this.$route.params.id}}
    <ul>
      <router-link to="/learn/http">http</router-link>
      <router-link to="/learn/base">base</router-link>
    </ul>
    <router-view />
  </div>
</template>

<script>
export default {
  name: "LearnVue",
  data() {
    return {};
  },
};
</script>

<style>
ul{
  margin:20px 20px;
  padding: 10px 10px;
}
</style>