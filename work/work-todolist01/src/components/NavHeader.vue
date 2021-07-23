<template>
    <input type="text" placeholder="请输入内容" v-model="value" @keydown.enter="enter">
</template>

<script>
    import {ref} from 'vue';
    export default {
        name: "NavHeader",
        setup(props,txt){
             let value = ref('')
             let enter = ()=>{console.log(value.value)}
            return{
                value,
                enter
            }
        }
    }
</script>

<style scoped>

</style>