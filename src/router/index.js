import Vue from 'vue'
import Router from 'vue-router'

// 路由懒加载
const Cart = () => import('views/cart/Cart')
const Home = () => import('views/home/Home')
const User = () => import('views/user/User')
const Category = () => import('views/category/Category')
const Detail = () => import('views/detail/Detail')
Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '',
            redirect: '/category'
        },
        {
            path: '/home',
            name: 'home',
            component: Home
        },
        {
            path: '/cart',
            name: 'cart',
            component: Cart
        },
        {
            path: '/category',
            name: 'category',
            component: Category
        },
        {
            path: '/user',
            name: 'user',
            component: User
        },
        {
            path: '/detail/:iid',
            name: 'detail',
            component: Detail
        }
    ],
    mode: 'history'
})