<script setup lang="ts">
import BaseHeader from '@/components/layout/default/BaseHeader.vue';
import BaseFooter from '@/components/layout/default/BaseFooter.vue';
import BaseBottomMenu from '@/components/layout/default/BaseBottomMenu.vue';
import { useUserStore, } from '@/stores/user'


const user = useUserStore();
</script>

<template>
    <BaseHeader />
    <main class="main">
        <slot />
    </main>
    <BaseFooter />
    <BaseBottomMenu 
        :username="(user.user?.name as string)"
    />
</template>

<style scoped lang="sass">
    @import "@/assets/styles/main"


    .main 
        flex: 1 1 auto
        padding: 20px 0
</style>