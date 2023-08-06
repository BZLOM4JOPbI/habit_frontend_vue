<script setup lang="ts">
import { useUserStore, } from "@/stores/user"
import BaseButton from '@/components/base/BaseButton.vue'
import BaseTitle from '../components/base/BaseTitle.vue'
import { ref, } from "vue";
import { useRouter, } from 'vue-router';


const router = useRouter();
const userStore = useUserStore();

const btnDisabled = ref<Boolean>(false);
const handeLogout = async () => {
    btnDisabled.value = true; 
    const result = await userStore.signOut();
    if (result) {
        btnDisabled.value = false;
        router.push('/signin');
    }
    btnDisabled.value = false;
};
const createdAt = ref(new Date((userStore.user?.created_at as string))
    .toLocaleString(undefined, {
        year: 'numeric', 
        month: '2-digit', 
        day: '2-digit',
        weekday:"long", 
        hour: '2-digit', 
        hour12: false, 
        minute:'2-digit', 
        second:'2-digit',
    })
)
</script>
<template>
    <div class="container">
        <div class="main-inner">
            <BaseTitle :title="'Profile'" />
            <div class="profile-field">UserName: <span>{{ userStore.user?.name }}</span></div>
            <div class="profile-field">Email: <span>{{ userStore.user?.email }}</span></div>
            <div class="profile-field">Created at: <span>{{ createdAt }}</span></div>        
            <BaseButton :label="'Sign Out'" @click="handeLogout" />
        </div>
    </div>
</template>

<style scoped lang="sass">
@import "@/assets/styles/main"


.main-inner 
    display: flex
    flex-direction: column
    align-items: center
    gap: 20px
.profile-field
    text-align: center
    font-size: $font-size-m
    font-weight: 500
    span 
        font-size: inherit
    @media screen and (max-width: 600px) 
        font-size: $font-size-s
    
</style>