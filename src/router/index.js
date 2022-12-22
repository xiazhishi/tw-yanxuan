import { createRouter, createWebHashHistory } from 'vue-router'

//路由数组
const routes = [
    {
        path: '/',
        redirect:'/home'
    },
    {
        path: "/home",
        component: ()=>import('../views/Home/Home.vue'),
        meta: {
            isShowNav:true
        }
    },
    {
        path: "/cart",
        component: () => import('../views/Cart/Cart.vue'),
        meta: {
            isShowNav: true
        }
    },
    {
        path: "/category",
        component: () => import('../views/Category/Category.vue'),
        meta: {
            isShowNav: true
        }
    },
    {
        path: "/user",
        component: () => import('../views/User/User.vue'),
        meta: {
            isShowNav: true
        }
    },
    {
        path: "/login",
        component: () => import('../views/Login/Login.vue'),
        meta: {
            isShowNav: false
        }
    },
]

//路由对象
const router = createRouter({

    history: createWebHashHistory(),

    routes //上面的路由数组

})

//导出路由对象，在main.js中引用
export default router