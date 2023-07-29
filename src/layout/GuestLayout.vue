<script setup lang="ts">
import { RouterLink, RouterView, } from 'vue-router'


const currentYear = new Date().getFullYear();

</script>

<template>
    <header class="header">
        <div class="container">
            <nav class="header-inner">
                <div class="header-logo_wrap underline-increase">
                    <RouterLink to="/" class="header-logo logo">habit</RouterLink>
                </div>
                <div class="header-links">
                    <RouterLink to="/signin" class="header-link underline-decrease">Sign In</RouterLink>
                    <RouterLink to="/signup" class="header-link underline-decrease">Sign Up</RouterLink>
                </div>
            </nav>
        </div>
    </header>
    <main class="main">
        <slot />
    </main>
    <footer class="footer">
        <div class="container">
            <div class="footer-inner">
                <div class="footer-logo logo">habit</div>
                <div class="footer-copy">&copy;{{ currentYear }}</div>
            </div>
        </div>
    </footer>
</template>

<style scoped lang="sass">
    @import "@/assets/styles/main"


    .header
        position: sticky
        top: 0
        left: 0
        right: 0
        background-color: $bg-color
    .header-inner 
        padding: 20px 0
        display: flex
        align-items: center
        justify-content: space-between
    .header-logo 
        font-size: 36px
    .header-link
        margin-right: 20px
        &:last-of-type
            margin-right: 0


    .footer-inner 
        padding: 20px 0
        display: flex
        justify-content: center
        align-items: flex-start
    .footer-logo 
        font-size: 24px
    .footer-copy
        font-weight: 700
        

    .main 
        margin: 80px 0 100px
        flex: 1 1 auto

</style>