import { ref, computed, } from 'vue'
import { defineStore, } from 'pinia'
import axios from 'axios';
import type { UserSignUp, } from '@/models/user'
export const useUserStore = defineStore('user', () => {
    const user = ref(null);
    const token = ref<string | null>(JSON.parse((localStorage.getItem('token') as string)) || null);

    const isAuth = computed(() => {
        return Boolean(user.value && token.value)
    });

    const signUp = async (credentials: UserSignUp):Promise<void> => {
        const serverApi = import.meta.env.VITE_API_URL;
        const { data, } = await axios.post(`${serverApi}/api/auth/signup`, 
            {
                name: credentials.userName,
                email: credentials.email,
                phone: credentials.phoneNumber,
                password: credentials.password,
                password_confirmation: credentials.passwordRepeat,
            }, 
            {
                headers: {
                    'Content-Type': 'application/json',
                },
            }
        );
        user.value = data.user;
        token.value = data.token;
        localStorage.setItem('token', JSON.stringify(token.value));
    };

    const signOut = ():void => {
        user.value = null;
        token.value = null;
        localStorage.removeItem('token');
    };

    return { signUp, signOut, user, token, isAuth, }
})
