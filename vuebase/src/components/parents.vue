<template>
  <div class="parents">
    <slotDemoVue>
        <template slot-scope="data">
            <div>
                {{ data.ct}}
            </div>
        </template>
    </slotDemoVue>
    父组件:{{ msg }}
    <childVue :title="title" :age="age"  @key="receive" nick='' parent="" />
    
  </div>
</template>

<script>

import childVue from './child.vue'
import slotDemoVue from './slotDemo.vue'
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
        childVue,
        slotDemoVue
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