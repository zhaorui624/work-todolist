<template>
    <h1>TodoList</h1>
    <nav-header/>
    <nav-main/>
    <nav-footer/>
    <div>{{list}}</div>
</template>

<script>
    import NavHeader from "../components/NavHeader";
    import NavMain from "../components/NavMain";
    import NavFooter from "../components/NavFooter";
    import {createStore} from 'vuex';
    import {computed} from 'vue';
    export default {
        name: "Home",
        components:{
            NavHeader,
            NavMain,
            NavFooter
        },
        setup(){
            let store = createStore();
            console.log(store);
            let list = computed(()=>{return store.state.list})
            return {
                list
            }
        }
    }
</script>

<style scoped>

</style>