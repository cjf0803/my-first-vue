<template>
 <div>
    <router-view></router-view>
 </div>
</template>

<style>
@import url('./assets/reset.css');
#app {
 
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
nav{
  padding: 30px;
}
nav a{
  font-weight: bold;
  color:#2c3e50
}
nav a.router-link-exact-active{
  color:#42b983
}

/* flex布局类名 */
.flex-float{
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.flex{
  display: flex;
  align-items: center;
}
.page_content{
  box-sizing: border-box;
  display: block;
  width: 100%;
  padding:20px;
  margin-top: 30px;
  background:white
}
</style>
