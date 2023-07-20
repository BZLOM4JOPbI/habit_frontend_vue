<script setup lang="ts">
    import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
    <header class="header">
        <div class="container">
            <div class="header-inner">
                Header
            </div>
        </div>
    </header>
    <main class="main">
        <RouterView />
    </main>
    <footer class="footer">
        <div class="container">
            <div class="footer-inner">
                footer
            </div>
        </div>
    </footer>
</template>

<style scoped lang="sass">
    .main 
        flex: 1 1 auto
</style>
