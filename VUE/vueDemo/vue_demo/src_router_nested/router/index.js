/* 
路由器模块
*/
import Vue from "vue";
import VueRouter from "vue-router";
import About from "../views/About";
import Home from "../views/Home";
import News from "../views/News";
import Message from "../views/Message";

Vue.use(VueRouter);

export default new VueRouter({
    routes: [{
            path: "/about",
            component: About
        },
        {
            path: "/home",
            component: Home,
            children: [{
                    path: "/home/news",
                    component: News
                },
                {
                    //路径的两种写法
                    path: "message",
                    component: Message
                },
                {
                    path: '/',
                    redirect: '/home/news'
                }
            ]
        },
        {
            path: "/",
            redirect: "/about"
        }
    ],
    // 指定选中的路由链接的 class
    linkActiveClass: "active"
});