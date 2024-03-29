/* 
路由器模块
*/
import Vue from "vue";
import VueRouter from "vue-router";
import About from "../views/About";
import Home from "../views/Home";

Vue.use(VueRouter);


export default new VueRouter({
    routes: [{
            path: "/about",
            component: About
        },
        {
            path: "/home",
            component: Home
        },
        {
            path: '/',
            redirect: '/about'
        }
    ],
    // 指定选中的路由链接的 class
    linkActiveClass: 'active'
});