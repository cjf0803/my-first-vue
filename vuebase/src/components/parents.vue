<template>
  <div class="parents">
    父组件:{{ msg }}
    <childVue :title="title" :age="age"  @key="receive" nick='' parent="" />
    
  </div>
</template>

<script>

import childVue from './child.vue'
export default {
    name:'parents_vue',
    data() {
        return {
            msg:'',
            age:20,
            title:'来自父亲的任务：定个小目标，整他一个亿'
        }
    },
    components:{
        childVue
    },
    methods:{
        receive(data){
            this.msg=data
        }
    }
}
</script>

<style>

</style>