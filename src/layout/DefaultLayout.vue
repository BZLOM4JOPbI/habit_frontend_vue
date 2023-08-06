<script setup lang="ts">
import { computed, ref, } from 'vue';
import { RouterLink, useRouter, } from 'vue-router'


const currentYear = new Date().getFullYear();

</script>

<template>
    <header class="header">
        <div class="container">
            <nav class="header-inner">
                <div class="header-logo_wrap underline-increase">
                    <div class="header-logo logo">habit</div>
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
        z-index: 1
    .header-inner 
        padding: 20px 0
        display: flex
        align-items: center
        justify-content: space-between
        flex-wrap: wrap
        gap: 20px
    .header-logo 
        font-size: $font-size-xl
        @media screen and (max-width: 500px) 
            font-size: $font-size-l
            
    .footer-inner 
        padding: 20px 0
        display: flex
        justify-content: center
        align-items: flex-start
    .footer-logo 
        font-size: 24px
    .footer-copy
        font-weight: 700
        user-select: none
        

    .main 
        margin: 80px 0 100px
        flex: 1 1 auto

</style>