<template>
  <div class="anim">
    <button @click="show=!show">点我一下</button>
    <transition
    name="custom-classes-transition"
    enter-active-class="animated zoomInRight"
    leave-active-class="animated rollOut"
    > 
    <p class="box" v-if="show">hello</p>  
    </transition>
    
  </div>
</template>

<script>
export default {
    name:'animVue',
    data() {
        return {
            show:true
        }
    },
}
</script>

<style lang="css">
.box{
    width: 100px;
    height: 100px;
    background-color: aqua;
    margin: auto;
    margin-top: 10px;
    line-height: 100px;
}

    /* .fade-enter ,.fade-leave-to{
        opacity: 0;
        width: 0px;
        height: 0px;
    }
  
    .fade-enter-to, .fade-leave{
        opacity: 1;
        width: 100px;
        height:100px;
    }
    /* 过渡 */
    /* .fade-enter-active,.fade-leave-active{
        transition: all 0.75s;
    }  */

   
    /* 过渡 */
    /* .fade-enter-active{
       animation:cjf-in 0.5s;
    }
    .fade-leave-active{
        animation:cjf-in 0.5s reverse;
    }
    @keyframes cjf-in{
        0%{
            transform: scale(0);
        }
        50%{
            transform: scale(1.5);
        }
        100%{
            transform: scale(1);
        }
    }  */
     /* @keyframes cjf-out{
        0%{
            transform: scale(1);
        }
        50%{
            transform: scale(1.5);
        }
        100%{
            transform: scale(0);
        }
    } */
</style>