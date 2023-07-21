<script setup lang="ts">
import { RouterLink, } from 'vue-router'
</script>

<template>
    <header class="header">
        <div class="container">
            <nav class="header-inner">
                <div class="header-logo_wrap underline-increase">
                    <RouterLink to="/" class="header-logo logo">habit</RouterLink>
                </div>
                <div class="header-links">
                    <RouterLink to="/" class="header-link underline-decrease">Nav Link</RouterLink>
                    <RouterLink to="/" class="header-link underline-decrease">Nav Link</RouterLink>
                    <RouterLink to="/" class="header-link underline-decrease">Nav Link</RouterLink>
                </div>
            </nav>
        </div>
    </header>
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
</style>