import { createRouter, createWebHistory, } from 'vue-router'
import IndexView from "../views/IndexView.vue";
import RegisterView from "../views/RegisterView.vue";
import LoginView from "../views/LoginView.vue";
import FeedView from "../views/FeedView.vue";
import TrendView from "../views/TrendView.vue";
import SearchView from "../views/SearchView.vue";
import ProfileView from "../views/ProfileView.vue";
import NotificationView from "../views/NotificationView.vue";

import authMiddleware from './middleware/auth'


const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'index',
            // component: IndexView,
            redirect: '/feed',
            meta: {
                layout: 'BaseLayout',
                forAuth: true,
            },
            children: [
                {
                    path: 'feed',
                    name: 'feed',
                    component: FeedView,
                },
                {
                    path: 'profile',
                    component: ProfileView,
                    name: 'profile',
                },
                {
                    path: 'search',
                    component: SearchView,
                    name: 'search',
                },
                {
                    path: 'notifications',
                    component: NotificationView,
                    name: 'notifications',
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
