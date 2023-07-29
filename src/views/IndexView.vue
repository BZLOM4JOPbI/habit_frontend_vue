<script setup lang="ts">
import { useUserStore, } from "@/stores/user"
import BaseButton from '@/components/base/BaseButton.vue'
import { computed, ref, } from "vue";
import { useRouter, } from 'vue-router';


const router = useRouter();
const userStore = useUserStore();
const userName = computed(() => {
    return userStore.user ? userStore.user.name : 'VueJS!'
});

const btnDisabled = ref<Boolean>(false);
const handeLogout = async () => {
    btnDisabled.value = true; 
    userStore.signOut();
    router.push('/signin');
    btnDisabled.value = false;
};
</script>
<template>
    <div class="container">
        <div class="main-inner">
            Hello, {{  userName }}
            <BaseButton :label="'Sign Out'" @click="handeLogout" />
        </div>
    </div>
</template>