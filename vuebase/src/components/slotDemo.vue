<template>
  <div class="slotDemo">
    <slot name="v1"></slot>
    <slot name="v2">我是默认信息</slot>
    <slot ct="耶耶耶"></slot>
  </div>
</template>

<script>
export default {
    name:'slotDemo',
    data() {
        return {
            
        }
    },
}
</script>

<style>

</style>