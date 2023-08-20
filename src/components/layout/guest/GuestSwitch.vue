<script setup lang="ts">
import { RouterLink, useRouter, } from 'vue-router'
import { computed, ref, } from 'vue';
const router = useRouter();
const isSignInPage = computed(() => router.currentRoute.value.name === 'SignIn');
const isSignUpPage = computed(() => router.currentRoute.value.name === 'SignUp');

const switcherPositionClasses = ref({
    'switch_left': isSignInPage,
    'switch_right': isSignUpPage,
});
</script>

<template>
    <div 
        class="switch"
        :class="switcherPositionClasses"
    >
        <RouterLink to="/signin" class="switch__link">Sign In</RouterLink>
        <div class="switch__background"></div>
        <RouterLink to="/signup" class="switch__link">Sign Up</RouterLink>
    </div>
</template>

<style scoped lang="sass">
@import "@/assets/styles/main"


.switch 
    flex-shrink: 0
    position: relative
    display: grid
    grid-template-columns: 1fr 1fr
    font-size: $font-size-s
    border: $b-width solid $bg-dark
    // border-radius: $b-radius-s
    overflow-x: hidden
    @media screen and (max-width: 700px) 
        font-size: $font-size-ss
.switch__link 
    font-size: inherit
    padding: 1em 1.5em
    color: $font-color-base
    transition: color .15s
    @media screen and (max-width: 500px) 
        padding: 0.75em 1.125em
    @media screen and (max-width: 400px) 
        padding: 0.6em 0.9em

.switch__background
    position: absolute
    width: calc(50% + 1px)
    top: 0
    bottom: 0
    background-color: $bg-dark
    z-index: -1
    transition: transform .2s
    transform-origin: center
.switch_left
    .switch__link:first-child
        color: $font-color-light
    .switch__background
        transform: translateX(0%)
.switch_right
    .switch__link:last-child
        color: $font-color-light
    .switch__background
        transform: translateX(100%)
</style>