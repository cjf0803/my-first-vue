<template lang="html">
<!-- 只能存在一个根容器 -->
    <div class="container">
        新组建
        <p>{{ title}}</p>
        <input type="text" v-model="box">
        <button @click="amsg" type="button">子传父</button>
    </div>
    
</template>

<script>
export default {
  name: "learnVue",
  //将所有初始化状态放入data中
  data() {
    return {
        box:''
    };
  },
  props:["title"],
  methods:{
    amsg(){
        this.$emit('key',this.box)
    }
  }
};
</script>
<!-- 样式 -->
<style  >
.container{
    background-color: rgb(25, 137, 137);
}
</style>