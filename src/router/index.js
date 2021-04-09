import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
Vue.use(VueRouter)

const routes = [{
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/about',
        name: 'About',
        component: () =>
            import ('../views/About.vue')
    },
    {
        path: '/login',
        name: 'Login',
        component: () =>
            import ('../views/Login.vue')
    },
    {
        path: '/register',
        name: 'Register',
        component: () =>
            import ('../views/Register.vue')
    },
    {
        path: '/news',
        name: 'News',
        component: () =>
            import ('../views/News.vue')
    },
    {
        path: '/activity',
        name: 'Activity',
        component: () =>
            import ('../views/Activity.vue')
    },
    {
        path: '/activity1',
        name: 'Activity1',
        component: () =>
            import ('../views/Activity1.vue')
    },
    {
        path: '/benefit',
        name: 'Benefit',
        component: () =>
            import ('../views/Benefit.vue')
    },
    {
        path: '/benefit1',
        name: 'Benefit1',
        component: () =>
            import ('../views/Benefit1.vue')
    },
    {
        path: '/news1',
        name: 'News1',
        component: () =>
            import ('../views/News1.vue')
    },
    {
        path: '/profile',
        name: 'Profile',
        component: () =>
            import ('../views/Profile.vue')
    },
    {
        path: '/regis_complete',
        name: 'Regis_complete',
        component: () =>
            import ('../views/Register_complete.vue')
    },
    {
        path: '/contact',
        name: 'Contact',
        component: () =>
            import ('../views/Contact.vue')
    }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router