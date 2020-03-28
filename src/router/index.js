import Vue from 'vue'
import VueRouter from 'vue-router'
import Layout from '@/layout'

Vue.use(VueRouter)

export const routes = [
    {
        path: '/404',
        component: () => import('@/views/404'),
        hidden: true
    },
    {
        path: '/',
        component: Layout,
        redirect: '/index',
        children: [
            {
                path: 'index',
                name: 'Index',
                component: () => import('@/views/index')
            },
            {
                path: 'search',
                name: 'Search',
                component: () => import('@/views/search/index')
            },
            {
                path: 'post/:id',
                name: 'Post',
                component: () => import('@/views/post/index')
            },
            {
                path: 'user/:id',
                name: 'User',
                component: () => import('@/views/user/index')
            },
            {
                path: 'category/:id',
                name: 'Category',
                component: () => import('@/views/post/category/index')
            },
            {
                path: 'tag/:name',
                name: 'Tag',
                component: () => import('@/views/post/tag/index')
            },
            {
                path: 'shop',
                name: 'Shop',
                component: () => import('@/views/shop/index')
            },
            {
                path: 'about',
                name: 'AboutUs',
                component: () => import('@/views/about/index')
            },
            {
                path: 'links',
                name: 'Links',
                component: () => import('@/views/links/index')
            },
            {
                path: 'feedback',
                name: 'Feedback',
                component: () => import('@/views/feedback/index')
            }
        ]
    },
    /* *符号匹配在最后 */
    { path: '*', redirect: '/404', hidden: true }
]

const createRouter = () =>
    new VueRouter({
        routes
    })

const router = createRouter()
export default router
