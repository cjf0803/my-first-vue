<template>
  <div class="child">
    {{ getfoo }}
    子组件： {{ title }}--{{ age }}--{{nick}}
    <button @click="change" type="button ">向上传给父组件</button>
    <ul>
        <li v-for="(items,index) in girlfriends" :key="index">{{ items }}</li>
    </ul>
  </div>
</template>

<script>


export default {
    name:'child_vue',
    data() {
        return {
            
        }
    },
    //props:['title','age'],
    props:{
        title:String,
        age:Number,
        nick:{
            type:String,
            default:'国民老公'
        },
        parent:{
            type:String,
            required:true
        },
        girlfriends:{
            type:Object,
            default :function () {
                return {
                    g1:'123',
                    g2:'456'
                }
                
            }
        }
    },
    methods:{
        change(){
            this.$emit('key','我回你五个亿')
        }
    },
    computed:{
        getfoo(){
            return this.$root.foo
        }
    }
}
</script>

<style>

</style>