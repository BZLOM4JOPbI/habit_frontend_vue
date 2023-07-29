import { ref, computed, } from 'vue'
import { defineStore, } from 'pinia'
import axios from 'axios';
import type { UserSignUp, UserSignIn, UserResponse, User, } from '@/models/user'
export const useUserStore = defineStore('user', () => {
    const user = ref<null | User>(null);
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

    const signUp = async (credentials: UserSignUp):Promise<UserResponse> => {
        const result:UserResponse = await userRequest({
            method: 'POST',
            url: '/api/auth/signup', 
            data: credentials,
        })
            .then(Response => {
                if (Response.status !== 201) {
                    return {
                        isSuccesful: false,
                        errors: null,
                    }
                }

                const data = Response.data;
                user.value = data.user;
                token.value = data.token
                localStorage.setItem('token', JSON.stringify(token.value));

                return {
                    isSuccesful: true,
                    errors: null,
                }
            })
            .catch(Error => {
                const reponseErrors: object = Error.response.data.errors;
                console.error(Error)
                return {
                    isSuccesful: false,
                    errors: reponseErrors,
                }
            });
        return result
    };

    const signIn = async (credential: UserSignIn):Promise<UserResponse> => {
        const result: UserResponse = await userRequest({
            method: 'POST',
            url: '/api/auth/signin',
            data: credential,
        })
            .then(Response => {
                if (Response.status !== 201) {
                    return {
                        isSuccesful: false,
                        errors: null,
                    }
                }

                const data = Response.data;
                user.value = data.user;
                token.value = data.token
                localStorage.setItem('token', JSON.stringify(token.value));

                return {
                    isSuccesful: true,
                    errors: null,
                }
            })
            .catch(Error => {
                const reponseErrors: object = Error.response.data.errors;
                console.error(Error)
                return {
                    isSuccesful: false,
                    errors: reponseErrors,
                }
            });
        return result
    };

    const signOut = ():void => {
        user.value = null;
        token.value = null;
        localStorage.removeItem('token');
    };


    const getUserInfo = async ():Promise<void> => {
        if (!token.value) return
        await userRequest({
            method: 'GET',
            url: '/api/auth/info',
        })
            .then(Response => {
                if (Response.status !== 200) return

                user.value = Response.data;
            })
    };

    return { signUp, signIn, signOut, getUserInfo, user, token, isAuth, }
});


