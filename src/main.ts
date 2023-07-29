import './assets/styles/main.sass'

import { createApp, } from 'vue'
import { createPinia, } from 'pinia'

import App from './App.vue'
import router from './router'

import GuestLayout from './layout/GuestLayout.vue'
import Maska from 'maska'

const app = createApp(App);

app.use(createPinia());
app.use(router);
app.use(Maska);
app.component('GuestLayout', GuestLayout);

app.mount('#app');