<script setup lang="ts">
import GuestSwitch from './GuestSwitch.vue'


</script>

<template>
    <header class="header">
        <div class="container">
            <nav class="header__inner">
                <div class="header__logo-wrap underline-increase">
                    <div class="header__logo logo">habit</div>
                </div>
                <GuestSwitch />
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
    z-index: 5
.header__inner 
    padding: 20px 0
    display: flex
    align-items: center
    justify-content: space-between
    flex-wrap: wrap
    gap: 20px
.header__logo 
    font-size: $font-size-xl
    @media screen and (max-width: 500px) 
        font-size: $font-size-l
</style>