import { createRouter, createWebHistory } from "vue-router";

const routerHistory = createWebHistory();

import Home from "@/pages/home";
import About from "@/pages/about";

const routers = createRouter({
    history: routerHistory,
    routes: [
        {
            path:"/",
            component: Home,
        },
        {
            path:"/about",
            component: About,
        },
    ]

    
});

export default routers;