<script setup lang="ts">
import { reactive, ref, } from 'vue';
import BaseInput from '../components/base/BaseInput.vue'
import PhoneInput from '../components/base/PhoneInput.vue'
import BaseTitle from '../components/base/BaseTitle.vue'
import BaseButton from '../components/base/BaseButton.vue'
import FormRegister from '../components/form/FormRegister.vue'


const userModel = reactive({
    phoneNumber: '',
    userName: '',
    password: '',
    passwordRepeat: '',
}); 

</script>

<template>
    <div class="container">
        <div class="main-inner">
            <BaseTitle :title="'Sign Up'" />
            <FormRegister>
                <PhoneInput v-model="userModel.phoneNumber" :type="'tel'" />
                <BaseInput v-model="userModel.userName" :label="'Name'" :type="'text'" />
                <BaseInput v-model="userModel.password" :label="'Password'" :type="'password'" />
                <BaseInput v-model="userModel.passwordRepeat" :label="'Password Repeat'" :type="'password'"/>
                <BaseButton :label="'Submit'" />
            </FormRegister>
        </div>
    </div>
</template>

<style scoped lang="sass">
    @import "@/assets/styles/main"
</style>