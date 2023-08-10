import { createRouter, createWebHistory, } from 'vue-router'
import IndexView from "../views/IndexView.vue";
import RegisterView from "../views/RegisterView.vue";
import LoginView from "../views/LoginView.vue";
import FeedView from "../views/FeedView.vue";
import TrendView from "../views/TrendView.vue";

import authMiddleware from './middleware/auth'


const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'index',
            component: IndexView,
            redirect: '/feed',
            meta: {
                layout: 'DefaultLayout',
                forAuth: true,
            },
            children: [
                {
                    path: 'feed',
                    component: FeedView,
                },
                {
                    path: 'trend',
                    component: TrendView,
                },
            ],
        },
        {
            path: '/signup',
            name: 'SignUp',
            component: RegisterView,
            meta: {
                layout: 'GuestLayout',
                forGuest: true,
            },
        },
        {
            path: '/signin',
            name: 'SignIn',
            component: LoginView,
            meta: {
                layout: 'GuestLayout',
                forGuest: true,
            },
        },

    ],
})

router.beforeEach(authMiddleware);

export default router
