<script setup lang="ts">
import BaseHeader from '@/components/layout/default/BaseHeader.vue';
import BaseFooter from '@/components/layout/default/BaseFooter.vue';
import BaseBottomMenu from '@/components/layout/default/BaseBottomMenu.vue';


</script>

<template>
    <BaseHeader />
    <main class="main">
        <slot />
    </main>
    <BaseBottomMenu />
    <BaseFooter />
</template>

<style scoped lang="sass">
    @import "@/assets/styles/main"


    .main 
        margin: 15pxpx 0 15px
        flex: 1 1 auto
        height: 200vh

</style>