<template>
  <div class="">
    <Title_v  :name="this.$route.params.name" :picUrl="this.$route.params.picUrl" />
    <List_v :Aid="this.$route.params.id" />
  </div>
</template>

<script>
import Title_v from "../../components/details/title.vue"
import List_v from "../../components/details/list.vue"
export default {
    name:'details',
    data() {
        return {
            
        }
    },
    components:{
        Title_v,
        List_v
    }
}
</script>

<style>

</style>