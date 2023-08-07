<script setup lang="ts">
import { computed, ref, } from 'vue';
import { RouterLink, useRouter, } from 'vue-router'


const currentYear = new Date().getFullYear();

</script>

<template>
    <header class="header">
        <div class="container">
            <nav class="header-inner">
                <div class="header-burger_btn">
                    <div class="header-burger_btn_inner">
                        <div class="header-burger_btn_rectangle"></div>
                        <div class="header-burger_btn_rectangle"></div>
                        <div class="header-burger_btn_rectangle"></div>
                    </div>
                </div>
                <div class="header-logo_wrap underline-increase">
                    <div class="header-logo logo">h</div>
                </div>
                <div class="header-search"></div>
                <div class="header-feed">
                    <RouterLink to="/" class="header-feed_link">For You</RouterLink>
                    <RouterLink to="/" class="header-feed_link">Your Trends</RouterLink>
                    <div class="header-feed_current"></div>
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
        // border-bottom: 1px solid black
    .header-inner 
        padding: 14px 0 2px
        display: grid
        grid-template-columns: repeat(6, 1fr)
        align-items: center
        row-gap: 12px
        // justify-content: space-between
        // gap: 20px
    .header-logo_wrap
        justify-self: center
        grid-column: span 2
    .header-logo 
        font-size: $font-size-xl
        @media screen and (max-width: 500px) 
            font-size: $font-size-l
    .header-burger_btn
        grid-column: span 2
        width: 30px
        cursor: pointer
    .header-burger_btn_inner
        padding-top: 80%
        position: relative
    .header-burger_btn_rectangle
        position: absolute
        width: 100%
        height: 3px
        background-color: $bg-dark
        &:nth-child(1)
            top: 0
        &:nth-child(2)
            top: 50%
            transform: translateY(-50%)
        &:nth-child(3)
            bottom: 0
    .header-search
        justify-self: end
        grid-column: span 2
        width: 30px
        height: 30px
        background-color: $bg-dark
    .header-feed
        position: relative
        grid-column: span 6
        display: grid
        grid-template-columns: 1fr 1fr
    .header-feed_link
        font-size: $font-size-s
        width: 100%
        text-align: center
        padding-block: 5px
    .header-feed_current
        position: absolute
        height: 2px
        width: 50%
        bottom: 0
        background-color: black
        transform: translateX(0) translateY(100%)

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
        @media screen and (max-width: 760px)
            margin: 60px 0  100px
        @media screen and (max-width: 500px)
            margin: 40px 0  100px
</style>