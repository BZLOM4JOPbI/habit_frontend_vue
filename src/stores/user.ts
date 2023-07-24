import { ref, computed, reactive, } from 'vue'
import { defineStore, } from 'pinia'
import axios from 'axios';

export const useUserStore = defineStore('user', () => {
    const user = ref();
    const token = ref();

    const signUp = async (credentials: Object):void => {

        const { data, } = await axios.post('http://127.0.0.1:8000/api/auth/signup', {
            name: credentials.userName,
            email: credentials.email,
            phone: credentials.phoneNumber,
            password: credentials.password,
            password_confirmation: credentials.passwordRepeat,
        }, {
            headers: {
                'Content-Type': 'application/json',
            },
        })
        user.value = data.user;
        token.value = data.token;
    };

    return { signUp, }
})
