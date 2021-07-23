<template>
    <div v-for="(item,index) in list" :key="index">
        <div>
            <input type="checkbox" v-model="item.complete">
            {{ item.title}}
            <button @click="del(item,index)">删除</button>
        </div>
    </div>
</template>

<script>
    import {ref} from "vue"
    export default {
        name: "NavMain",
        setup(props,txt){
            let list = ref([
                {
                    title:'吃饭',
                    complete:false,
                },
                {
                    title:'睡觉',
                    complete:false,
                },
                {
                    title:'敲代码',
                    complete:false,
                }
            ])
            let del = (item,index)=>{
                console.log(item);
                console.log(index);
            }
            return{
                list,
                del
            }
        }
    }
</script>

<style scoped>

</style>