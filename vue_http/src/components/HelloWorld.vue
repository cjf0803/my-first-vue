<template>
  <div class="hello">
    
  </div>
</template>

<script>


export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  mounted(){
    // 这是get请求无参
    // this.$axios.get("http://reactnative.dev/movies.json")
    // .then(res=>{
    //   console.log(res.data)
    // })
    // .catch(err=>{
    //   console.log(err)
    // })

    //这是get请求有参
    // this.$axios.get("http://api.tianapi.com/txapi/ncov/index",{
    //   params:{
    //     key:'d7c335f2e7856ec48c1962a99fcc6f98'
    //   }
    // })
    // .then(res=>{
    //   console.log(res.data)
    // })
    // .catch(err=>{
    //   console.log(err)
    // })

    //这是post请求
    this.$axios.post("http://api.tianapi.com/txapi/ncov/index",{
      key:'d7c335f2e7856ec48c1962a99fcc6f98'
    })
    .then(res=>{
      console.log(res.data)
    })
    .catch(err=>{
      console.log(err)
    })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
