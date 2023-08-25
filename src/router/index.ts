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
            redirect: '/feed',
            name: 'index-redirect',
            meta: {
                forAuth: true,
            },
        },
        {
            path: '/feed',
            name: 'feed',
            component: FeedView,
            meta: {
                layout: 'BaseLayout',
                forAuth: true,
            },
        },
        {
            path: '/profile',
            component: ProfileView,
            name: 'profile',
            meta: {
                layout: 'BaseLayout',
                forAuth: true,
            },
        },
        {
            path: '/search',
            component: SearchView,
            name: 'search',
            meta: {
                layout: 'BaseLayout',
                forAuth: true,
            },
        },
        {
            path: '/notifications',
            component: NotificationView,
            name: 'notifications',
            meta: {
                layout: 'BaseLayout',
                forAuth: true,
            },
        },
        {
            path: '/trend',
            component: TrendView,
            meta: {
                layout: 'BaseLayout',
                forAuth: true,
            },
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
        {
            path: '/:username',
            name: 'profile',
            component: ProfileView,
            meta: {
                layout: 'BaseLayout',
                forAuth: true,
            },
        },
    ],
})

router.beforeEach(authMiddleware);

export default router
