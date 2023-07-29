import { ref, computed, } from 'vue'
import { defineStore, } from 'pinia'
import axios from 'axios';
import type { UserSignUp, } from '@/models/user'
export const useUserStore = defineStore('user', () => {
    const user = ref<null | object>(null);
    const token = ref<string | null>(JSON.parse((localStorage.getItem('token') as string)) || null);

    const isAuth = computed(() => {
        return Boolean(token.value)
    });

    const serverApi = import.meta.env.VITE_API_URL;
    const userRequest = axios.create({
        baseURL: serverApi,
        headers: {
            'Content-Type': 'application/json',
            'Authorization' : `Bearer ${token.value}`,
        },
    });

    const signUp = async (credentials: UserSignUp):Promise<void> => {
        await userRequest({
            method: 'POST',
            url: '/api/auth/signup', 
            data: {
                name: credentials.userName,
                email: credentials.email,
                phone: credentials.phoneNumber,
                password: credentials.password,
                password_confirmation: credentials.passwordRepeat,
            },
        })
            .then(Response => {
                if (Response.status !== 201) return

                const data = Response.data;
                user.value = data.user;
                token.value = data.token
                localStorage.setItem('token', JSON.stringify(token.value));
            })
            .catch(Error => console.error(Error))
    };

    const signIn = async (credential: object):Promise<void> => {
        await userRequest({
            method: 'POST',
            url: '/api/auth/signin',
            data: credential,
        })
            .then(Response => {
                console.log(Response);
                // if (Response.status !== 201) return

                // const data = Response.data;
                // user.value = data.user;
                // token.value = data.token
                // localStorage.setItem('token', JSON.stringify(token.value));
            })
            .catch(Error => console.error(Error)) 
    };

    const signOut = ():void => {
        user.value = null;
        token.value = null;
        localStorage.removeItem('token');
    };


    const getUserInfo = async ():Promise<void> => {
        await userRequest({
            method: 'GET',
            url: '/api/auth/info',
        })
            .then(Response => {
                if (Response.status !== 200) return

                user.value = Response.data;
            })
    };

    return { signUp, signOut, getUserInfo, user, token, isAuth, }
});


