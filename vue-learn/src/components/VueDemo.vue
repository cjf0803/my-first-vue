<template lang="html">
    <div>
        {{ getMsg }}
        {{ mMsg()}}
        <div :class="{'active':cjf,'color':cjf,'font':cjf}">
            我房帅呆呆
        </div>
        <div :class="cssObj" >

        </div>
        <button @click="cssChange" type="button" name="button">点我一下</button>
        <div :class="[isActive? msg:'']"></div>
        <!-- old active hello_active -->
        <div class="old" :class="[isActive?'active':'noactive',{'yey':cjf}]"></div>
        <div :style="{ color:'red',fontSize:'50px'}">
            cjf
        </div>
        <input v-model.trim="name" type="text"> <br>
            {{ name }}
            <input type="checkbox" id="checkbox" name="checkbox" v-model="checkbox">
            <label for="checkbox">{{ checkbox }}</label>
        <button type="button" @click="changeName" >改变名字</button>
    </div>
</template>
<script>
export default{
    name:"VueDemo",
    data() {
        return {
            msg:"hello",
            cjf:true,
            cssObj:{
                'c1':true,
                'c2':false

            },
            isActive:true,
            lala:'这是默认数据',
            checkbox:true,
            dmsg:'',
            name:'cjf'
            
        }
    },
    computed:{
        getMsg(){
            return this.msg.split('').reverse().join('')
        }
    },
    methods:{
        mMsg(){
            return this.msg.split('').reverse().join('')
        },
        cssChange(){
                this.cjf=!this.cjf
        },
        changeName(){
            this.name+='11'
        }
    },

    //实时监听数据变化
    watch:{
        dmsg(data){
            if (data=="100") {
                this.dmsg="啦啦啦啦"
            }
        },
        name(data){
            console.log(data)
        }

    }
}
</script>
<style lang="css">
    .color{
       color: red
    }
    .font{
        font-size: 50px;
    }
</style>