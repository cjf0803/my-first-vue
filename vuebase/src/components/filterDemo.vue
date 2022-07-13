<template>
  <div class="filterDemo">
    {{ money|rmb }}
    {{text|author}}
  </div>
</template>

<script>
export default {
    name:'filterDemo',
    data() {
        return {
            money:20,
            text:'xiyouji'
        }
    },
    filters:{
        rmb:function(value){
            if(!value) return '';
            value= value.toString();
            return "$"+value
        },
        author:function(data){
            if(!data) return '';
            return data +'来自cjf';
        }
    }
}
</script>

<style>

</style>