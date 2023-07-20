<script setup lang="ts">
    import { RouterLink, RouterView } from 'vue-router'
    import Header from './components/layout/Header.vue'
    import Footer from './components/layout/Footer.vue'
    import Welcome from './components/layout/Welcome.vue'
</script>

<template>
    <Header />
    <main class="main">
        <RouterView />
    </main>
    <Welcome />
    <Footer />
</template>

<style scoped lang="sass">
    @import "@/assets/styles/main"
    .main 
        flex: 1 1 auto

</style>
