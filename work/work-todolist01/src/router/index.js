import {createRouter,createWebHistory} from 'vue-router';
import Home from "../views/Home";
const routes = [
    {
        path:'/',
        name:'Home',
        components: Home
    },
    {
        path:'/about',
        name:'about',
        components:about
    }
]
//创建路由对象
const router = createRouter({
    history:createWebHistory(process.env.BASE_URL),
    routes
})
export default router;