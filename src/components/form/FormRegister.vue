<script setup lang="ts">
import { reactive, } from 'vue';
import BaseInput from '@/components/base/BaseInput.vue'
import BaseButton from '@/components/base/BaseButton.vue'
import ValidateService from '@/utils/validation'
import { useUserStore, } from '@/stores/user'
import type { UserSignUp, } from '@/models/user'


const user = useUserStore();

const userModel:UserSignUp = reactive({
    phoneNumber: '',
    userName: '',
    email: '',
    password: '',
    passwordRepeat: '',
}); 
const userModelErrors:UserSignUp = reactive({
    phoneNumber: '',
    userName: '',
    email: '',
    password: '',
    passwordRepeat: '',
});
const submitHandler = async () => {
    userModelErrors.userName = ValidateService.usernameValidate(userModel.userName);
    userModelErrors.password = ValidateService.passwordValidate(userModel.password);
    userModelErrors.phoneNumber = ValidateService.phoneValidate(userModel.phoneNumber);
    userModelErrors.email = ValidateService.emailValidate(userModel.email);
    if (!userModelErrors.password) {
        userModelErrors.passwordRepeat = ValidateService.passwordsEquality(userModel.password, userModel.passwordRepeat);
    }

    let errorField: keyof UserSignUp;
    for (errorField in userModelErrors) {
        if (userModelErrors[errorField]) return
    }

    await user.signUp(userModel);
    console.log(user.user);
};


</script>

<template>
    <section class="form-wrap">
        <form class="form" @submit.prevent="submitHandler">
                <BaseInput 
                    v-model="userModel.phoneNumber" 
                    :label="'Phone'" 
                    :type="'tel'" 
                    :error-message="userModelErrors.phoneNumber" 
                />
                <BaseInput 
                    v-model="userModel.email" 
                    :label="'Email'" 
                    :type="'email'" 
                    :error-message="userModelErrors.email" 
                />
                <BaseInput 
                    v-model="userModel.userName" 
                    :label="'Name'" 
                    :type="'text'" 
                    :error-message="userModelErrors.userName" 
                />
                <BaseInput 
                    v-model="userModel.password" 
                    :label="'Password'" 
                    :type="'password'" 
                    :error-message="userModelErrors.password" 
                />
                <BaseInput 
                    v-model="userModel.passwordRepeat" 
                    :label="'Password Repeat'" 
                    :type="'password'" 
                    :error-message="userModelErrors.passwordRepeat"
                />
                <BaseButton :label="'Submit'" />
                {{ user.isAuth }}
        </form>
        {{ user.token }}
    </section>
    <BaseButton :label="'Sign Out'" @click="user.signOut" />
</template>

<style scoped lang="sass">

</style>