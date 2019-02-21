import Vue from 'vue'
import vueRouter from 'vue-router'
Vue.use(vueRouter)


import App from '../App.vue'
import iCakes from "../pages/iCakes.vue"
import Register from "../pages/Register.vue"
import Login from "../pages/Login.vue"
import Mine from "../pages/Mine.vue"
import Products from "../pages/Products.vue"
import Cart from "../pages/Cart.vue"
import Detail from "../pages/Detail.vue"
import Buy from "../pages/Buy.vue"
const routes = [
    {
        name: 'app',
        path: '/app',
        component: App, 
        children: [
            {
                name: 'icakes',
                path: 'icakes',
                component: iCakes,
            },
            {
                name: 'mine',
                path: 'mine',
                component: Mine,
            },
            {
                name: 'register',
                path: 'register',
                component: Register,
            },
            {
                name: 'login',
                path: 'login',
                component: Login,
            },
            {
                name: 'products',
                path: 'products',
                component: Products,
            },
            {
                name: 'cart',
                path: 'cart',
                component: Cart,
            },
            
        ]
    }, {
        path: '/',
        redirect: {
            path: 'app/icakes'
        },
    },{
        name:'detail',
        path:'/detail',
        component:Detail
    },{
        name:'buy',
        path:'/buy',
        component:Buy
    }

]
const router = new vueRouter({
    mode: 'hash',
    routes,
})

export default router