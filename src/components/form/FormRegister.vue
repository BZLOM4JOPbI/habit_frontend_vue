<script setup lang="ts">
import { reactive, } from 'vue';
import BaseInput from '@/components/base/BaseInput.vue'
import BaseButton from '@/components/base/BaseButton.vue'
import { usernameValidate, passwordValidate, passwordsEquality, phoneValidate, } from '@/utils/validation'
import { useUserStore, } from '@/stores/user'


const store = useUserStore();

const userModel = reactive({
    phoneNumber: '',
    userName: '',
    email: '',
    password: '',
    passwordRepeat: '',
}); 
const userModelErrors = reactive({
    phoneNumber: '',
    userName: '',
    email: '',
    password: '',
    passwordRepeat: '',
});
const submitHandler = async () => {
    userModelErrors.userName = usernameValidate(userModel.userName);
    userModelErrors.password = passwordValidate(userModel.password);
    userModelErrors.phoneNumber = phoneValidate(userModel.phoneNumber);

    if (!userModelErrors.password) {
        userModelErrors.passwordRepeat = passwordsEquality(userModel.password, userModel.passwordRepeat);
    }
    for (const field in userModelErrors) {
        if (userModelErrors[field]) return
    }
    await store.signUp(userModel);
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
        </form>
    </section>
</template>

<style scoped lang="sass">

</style>