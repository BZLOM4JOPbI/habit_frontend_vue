import { createRouter, createWebHistory, } from 'vue-router'
import IndexView from "../views/IndexView.vue";
import RegisterView from "../views/RegisterView.vue";
import LoginView from "../views/LoginView.vue";

import authMiddleware from './middleware/auth'


const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'index',
            component: IndexView,
            meta: {
                layout: 'GuestLayout',
                // forAuth: true,
            },
        },
        {
            path: '/signup',
            name: 'register',
            component: RegisterView,
            meta: {
                layout: 'GuestLayout',
                // forGuest: true,
            },
        },
        {
            path: '/signin',
            name: 'login',
            component: LoginView,
            meta: {
                layout: 'GuestLayout',
                // forGuest: true,
            },
        },

    ],
})

router.beforeEach(authMiddleware);

export default router
