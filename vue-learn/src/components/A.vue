<template>
  <div>
    <p>这里是A组件</p>
    <button @click="change" type="button " name="button " >改变一下</button>
    <p>{{ msg}}</p>
  </div>
</template>

<script>
export default {
    name:'A_1',
    data() {
        return {
            msg:'默认值',
            flag:true
        }
    },
    methods:{
        change(){
            if(this.flag){
            this.msg='改变了'
            this.flag=false
            }else{
                this.msg='默认值'
                this.flag=true
            }
        }
    }
}
</script>

<style>

</style>