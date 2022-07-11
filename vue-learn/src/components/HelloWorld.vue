<template>
  <div class="hello">
    {{ cjf }}
    <br />
    {{ msg }}
    <br />
    {{ 22 + 1 }}
    <br>
    <a :href="url">{{ name }}</a>
    <div :class="yy">hahahah</div>
    <p v-if="flag">我房帅呆呆</p>
    <button @click="click('hah',$event) " type="button" name="button">按钮</button>
    
    <button @click="add() " type="button" name="button">添加</button>
    
  </div>
 
</template>

<script>
export default {
  name: "HelloWorld",
  data() {
    return {
      cjf: "哈哈哈",
      msg: "welcome to vue",
      name:"百度",
      url:"http://www.baidu.com",
      yy:"isActive",
      flag:false,
     hello:["hello1","hello2","hello3"]
    
    };
  },
  methods:{
    click(data,event){
      console.log(data);
       console.log(event);
     this.flag=!this.flag
    },
    add(){
      this.hello.push("hello4")
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
