import { createRouter, createWebHashHistory, createWebHistory } from "vue-router"

const routes = [
    {
        path: "/",
        alias: ["/index", "/home"],
        component: () => import("@/views/Index.vue")
    },
    {
        path: "/LuckyPray",
        component: () => import("@/views/lucky-pray/LuckyPray.vue")
    },
]

const router = createRouter({
    //使用url的#符号之后的部分模拟url路径的变化,因为不会触发页面刷新,所以不需要服务端支持
    //history: createWebHashHistory(), 
    history: createWebHistory(),
    routes
})

export default router
