<script setup lang="ts">
import { reactive, ref, } from 'vue';
import BaseInput from '@/components/base/BaseInput.vue'
import BaseButton from '@/components/base/BaseButton.vue'
import ValidateService from '@/utils/validation'
import { useUserStore, } from '@/stores/user'
import type { UserSignIn, } from '@/models/user'
import { useRouter,  } from 'vue-router'


const userStore = useUserStore();
const router = useRouter();
const btnDisabled = ref<Boolean>(false);

const userModel:UserSignIn = reactive({
    email: '',
    password: '',
}); 
const userModelErrors:UserSignIn = reactive({
    email: '',
    password: '',
});
const submitHandler = async () => {
    btnDisabled.value = true;
    userModelErrors.password = ValidateService.passwordValidate(userModel.password);
    userModelErrors.email = ValidateService.emailValidate(userModel.email);

    let errorField: keyof UserSignIn;
    for (errorField in userModelErrors) {
        btnDisabled.value = false;
        if (userModelErrors[errorField]) return
    }

    const result = await userStore.signIn(userModel);
    if (result.isSuccesful) {
        router.push('/');
    } else {
        if (result.errors) {
            const responseErrors: UserSignIn = (result.errors as UserSignIn)
            let errorField: keyof UserSignIn;
            for (errorField in responseErrors) {
                userModelErrors[errorField] = responseErrors[errorField][0]
            }
        }
    }
    btnDisabled.value = false;
};


</script>

<template>
    <section class="form-wrap">
        <form class="form" @submit.prevent="submitHandler">
                <BaseInput 
                    v-model="userModel.email" 
                    :label="'Email'" 
                    :type="'email'" 
                    :error-message="userModelErrors.email" 
                />
                <BaseInput 
                    v-model="userModel.password" 
                    :label="'Password'" 
                    :type="'password'" 
                    :error-message="userModelErrors.password" 
                />
                <BaseButton :label="'Submit'" :is-disable="btnDisabled"/>
        </form>
    </section>
</template>

<style scoped lang="sass">

</style>