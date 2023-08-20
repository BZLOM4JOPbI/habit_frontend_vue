<script setup lang="ts">
import DefaultHeader from '@/components/layout/default/DefaultHeader.vue';
import DefaultFooter from '@/components/layout/default/DefaultFooter.vue';


</script>

<template>
    <DefaultHeader />
    <main class="main">
        <slot />
    </main>
    <DefaultFooter />
</template>

<style scoped lang="sass">
    @import "@/assets/styles/main"


    .main 
        margin: 15pxpx 0 15px
        flex: 1 1 auto

</style>