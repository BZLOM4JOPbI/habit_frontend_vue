<script setup lang="ts">
import { computed, onMounted, } from 'vue';
import { RouterView, } from 'vue-router'
import { useRouter,  } from 'vue-router'
import { useUserStore, } from './stores/user';
import BaseBottomMenu from '@/components/layout/base/BaseBottomMenu.vue';


const router = useRouter()
const layout = computed(() => {
    return router.currentRoute.value.meta.layout
})
const userStore = useUserStore();

onMounted(async () => {
    await userStore.getUserInfo();
})
</script>

<template>
    <component :is="layout">
        <RouterView />
    </component>
    <!-- 
        TODO: think about bottom menu injection
    -->
    <BaseBottomMenu 
        v-if="layout !== 'GuestLayout'"
        :username="(userStore.user?.name as string)"
    />
</template>

