<script setup lang="ts">
    import { RouterLink, RouterView } from 'vue-router'
    import Header from './components/layout/Header.vue'
    import Footer from './components/layout/Footer.vue'
</script>

<template>
    <Header />
    <main class="main">
        <RouterView />
    </main>
    <Footer />
</template>

<style scoped lang="sass">
    @import "@/assets/styles/main"
    .main 
        flex: 1 1 auto

</style>
