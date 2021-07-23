<template>
    <div class="container">
        <div>已完成{{isComplete}} / 全部{{ all}}</div>
        <button v-if="isComplete > 0" @click="clear">清除已完成</button>
    </div>

</template>

<script>
    import {ref} from 'vue'
    export default {
        name: "NavFooter",
        setup(props,txt){
            let isComplete = ref(1)
            let all = ref(3)
            //清除方法
            let clear = ()=>{console.log('clear')}
            return{
                isComplete,
                all,
                clear
            }
        }
    }
</script>

<style scoped>
.container{
    display: flex;
    align-items: center;
}
</style>