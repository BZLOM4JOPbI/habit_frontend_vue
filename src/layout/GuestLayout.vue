<script setup lang="ts">
import { computed, ref, } from 'vue';
import { RouterLink, useRouter, } from 'vue-router'


const currentYear = new Date().getFullYear();

const router = useRouter();
const isSignInPage = computed(() => router.currentRoute.value.name === 'SignIn');
const isSignUpPage = computed(() => router.currentRoute.value.name === 'SignUp');

const switcherPositionClasses = ref({
    'header-switch-left': isSignInPage,
    'header-switch-right': isSignUpPage,
});
</script>

<template>
    <header class="header">
        <div class="container">
            <nav class="header-inner">
                <div class="header-logo_wrap underline-increase">
                    <RouterLink to="/" class="header-logo logo">habit</RouterLink>
                </div>
                <!-- <div class="header-links">
                    <RouterLink to="/signin" class="header-link underline-decrease">Sign In</RouterLink>
                    <RouterLink to="/signup" class="header-link underline-decrease">Sign Up</RouterLink>
                </div> -->
                <div 
                    class="header-switch"
                    :class="switcherPositionClasses"
                >
                    <RouterLink to="/signin" class="header-switch_el">Sign In</RouterLink>
                    <div class="header-switch_bg"></div>
                    <RouterLink to="/signup" class="header-switch_el">Sign Up</RouterLink>
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
        row-gap: 20px
    .header-logo 
        font-size: 36px
    .header-link
        margin-right: 20px
        &:last-of-type
            margin-right: 0
    .header-switch 
        flex-shrink: 0
        position: relative
        display: grid
        grid-template-columns: 1fr 1fr
        font-size: $font-size-s
        border: $b-width solid $bg-dark
        // border-radius: $b-radius-s
        overflow: hidden
        @media screen and (max-width: 700px) 
            font-size: $font-size-ss
    .header-switch_el 
        font-size: inherit
        padding: 1em 1.5em
        color: $font-color-base
        transition: color .15s
        @media screen and (max-width: 500px) 
            padding: 0.75em 1.125em
        @media screen and (max-width: 400px) 
            padding: 0.6em 0.9em
    .header-switch_bg
        position: absolute
        width: 50%
        top: 0
        bottom: 0
        background-color: $bg-dark
        z-index: -1
        transition: left .2s, right .2s
    .header-switch-left
        .header-switch_el:first-child
            color: $font-color-light
        .header-switch_bg
            right: 50%
            left: -3px
    .header-switch-right
        .header-switch_el:last-child
            color: $font-color-light
        .header-switch_bg
            left: 50%
            right: -3px
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