<template>
  <div>
    <router-view></router-view>
  </div>
</template>

<script>
</script>

<style>
body,
html {
  padding: 0;
  margin: 0;
}
::-webkit-scrollbar {
  width: 0;
  height: 0;
}
/* flex布局类名 */
.flex-float {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.flex {
  display: flex;
  align-items: center;
}
.page_content {
  box-sizing: border-box;
  display: block;
  width: 100%;
  padding: 20px;
  background: #fff;
  margin-top: 30px;
}
</style>
