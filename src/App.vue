<script setup lang="ts">
import { RouterView, } from 'vue-router'
import Header from './components/layout/BaseHeader.vue'
import Footer from './components/layout/BaseFooter.vue'
import Welcome from './components/layout/BannerWelcome.vue'
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
