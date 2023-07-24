<script setup lang="ts">
import { reactive, } from 'vue';
import BaseInput from '@/components/base/BaseInput.vue'
import BaseButton from '@/components/base/BaseButton.vue'
import { usernameValidate, passwordValidate, passwordsEquality, phoneValidate, } from '@/utils/validation'


const userModel = reactive({
    phoneNumber: '',
    userName: '',
    password: '',
    passwordRepeat: '',
}); 
const userModelErrors = reactive({
    phoneNumber: '',
    userName: '',
    password: '',
    passwordRepeat: '',
});
const submitHandler = () => {
    userModelErrors.userName = usernameValidate(userModel.userName);
    userModelErrors.password = passwordValidate(userModel.password);
    userModelErrors.phoneNumber = phoneValidate(userModel.phoneNumber);

    if (!userModelErrors.password) {
        userModelErrors.passwordRepeat = passwordsEquality(userModel.password, userModel.passwordRepeat);
    }
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
        </form>
    </section>
</template>

<style scoped lang="sass">

</style>