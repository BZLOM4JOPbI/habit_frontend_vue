<script setup lang="ts">
import { reactive, ref, } from 'vue';
import BaseInput from '@/components/base/BaseInput.vue'
import BaseButton from '@/components/base/BaseButton.vue'
import ValidateService from '@/utils/validation'
import { useUserStore, } from '@/stores/user'
import type { UserSignUp, } from '@/models/user'
import { useRouter, } from 'vue-router';


const user = useUserStore();
const router = useRouter();
const btnDisabled = ref<Boolean>(false);

const userModel:UserSignUp = reactive({
    phone: '',
    name: '',
    email: '',
    password: '',
    password_confirmation: '',
}); 
const userModelErrors:UserSignUp = reactive({
    phone: '',
    name: '',
    email: '',
    password: '',
    password_confirmation: '',
});
const submitHandler = async () => {
    btnDisabled.value = true; 
    userModelErrors.name = ValidateService.usernameValidate(userModel.name);
    userModelErrors.password = ValidateService.passwordValidate(userModel.password);
    userModelErrors.phone = ValidateService.phoneValidate(userModel.phone);
    userModelErrors.email = ValidateService.emailValidate(userModel.email);
    if (!userModelErrors.password) {
        userModelErrors.password_confirmation = ValidateService.passwordsEquality(userModel.password, userModel.password_confirmation);
    }

    let errorField: keyof UserSignUp;
    for (errorField in userModelErrors) {
        btnDisabled.value = false;
        if (userModelErrors[errorField]) return
    }

    const result = await user.signUp(userModel);
    if (result.isSuccesful) {
        router.push('/');
    } else {
        if (result.errors) {
            const responseErrors: UserSignUp = (result.errors as UserSignUp)
            let errorField: keyof UserSignUp;
            for (errorField in responseErrors) {
                userModelErrors[errorField] = responseErrors[errorField][0]
            }
        }
    }
    btnDisabled.value = false;
};


</script>

<template>
    <section class="form__wrap">
        <form class="form" @submit.prevent="submitHandler">
                <BaseInput 
                    v-model="userModel.phone" 
                    :label="'Phone'" 
                    :type="'tel'" 
                    :error-message="userModelErrors.phone" 
                />
                <BaseInput 
                    v-model="userModel.email" 
                    :label="'Email'" 
                    :type="'email'" 
                    :error-message="userModelErrors.email" 
                />
                <BaseInput 
                    v-model="userModel.name" 
                    :label="'Name'" 
                    :type="'text'" 
                    :error-message="userModelErrors.name" 
                />
                <BaseInput 
                    v-model="userModel.password" 
                    :label="'Password'" 
                    :type="'password'" 
                    :error-message="userModelErrors.password" 
                />
                <BaseInput 
                    v-model="userModel.password_confirmation" 
                    :label="'Password Repeat'" 
                    :type="'password'" 
                    :error-message="userModelErrors.password_confirmation"
                />
                <BaseButton :label="'Submit'" :is-disable="btnDisabled"/>
        </form>
    </section>
</template>

<style scoped lang="sass">

</style>