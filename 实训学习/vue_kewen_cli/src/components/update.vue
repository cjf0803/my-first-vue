<template>
  <div>
      <p>编号：<input type="text" v-model="id"></p>
      <p>用户名：<input type="text" v-model="uname"></p>
      <p>密码：<input type="text" v-model="upwd"></p>
      <p>类型：<input type="text" v-model="type"></p>
      <p><input type="button" @click="update" value="修改"></p>
  </div>
</template>

<script>
export default {
    name:'update_v',
    data() {
        return {
            id:'',
            uname:'',
            upwd:'',
            type:'',

        }
    },
   mounted() {
    
    this.$http
      .get("http://localhost:8082/user/findUserById?id="+this.$route.params.id)
      .then((req) => {
        console.log(req.data);
        this.id = req.data.user.id;
        this.uname = req.data.user.uname;
        this.upwd = req.data.user.upwd;
        this.type = req.data.user.type;
        
      });
  },
  methods:{
    update:function(){
      let id=this.id;
      let uname = this.uname;
      let upwd = this.upwd;
      let type = this.type;
      if(confirm("是否修改？")){
       this.$http
          .get(
            "http://localhost:8082/user/updateUser?id=" +id+"&uname="+
              uname +
              "&upwd=" +
              upwd +
              "&type=" +
              type
          ).then(req=>{
             if (req.data == true) {
              alert("修改成功")
              this.$router.push({ name: "index" });
            }
          })
          .catch((error) => {
            console.log(error);
          });
        
      }
    }
  }

}
</script>

<style>

</style>