<script setup lang="ts">
import ProfileHeader from '@/components/layout/profile/ProfileHeader.vue'
import { useUserStore, } from '@/stores/user'

const user = useUserStore();
</script>

<template>
    <ProfileHeader />
    <main class="main">
        <slot />
    </main>
    <!-- <BaseBottomMenu 
        :username="(user.user?.name as string)"
    /> -->
</template>

<style scoped lang="sass">
@import "@/assets/styles/main"


.main 
    flex: 1 1 auto
    // padding-block: 25px
</style>