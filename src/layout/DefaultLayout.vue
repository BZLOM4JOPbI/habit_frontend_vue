<script setup lang="ts">
import { onMounted, ref, } from 'vue';
import { throttle, } from '@/utils/wrappers'
// import { RouterLink, useRouter, } from 'vue-router'


const currentYear = new Date().getFullYear();

const isBurgerShow = ref<Boolean>(false);
const header = ref<HTMLElement | null>(null);
const oldPageScroll = ref(0);

onMounted(() => {
    const throttledHeaderHide:EventListener = throttle(() => {
        const headerEl: HTMLElement | null = header.value;
        if (!headerEl) return
        const newPageScroll = document.documentElement.scrollTop;
        if (newPageScroll > oldPageScroll.value) {
            headerEl.classList.add('header-hide');
        } else {
            headerEl.classList.remove('header-hide')
        }
        console.log('yes');
        oldPageScroll.value = newPageScroll
    }, 75) as EventListener;
    window.addEventListener('scroll', throttledHeaderHide, { passive: true, })
})
</script>

<template>
    <header 
        class="header"
        ref="header"
    >
        <div class="container">
            <nav class="header-inner">
                <div 
                    class="header-burger_btn"
                    @click="isBurgerShow = true"
                >
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
                <!-- <div class="header-feed">
                    <RouterLink to="/feed" class="header-feed_link">For You</RouterLink>
                    <RouterLink to="/trend" class="header-feed_link">Your Trends</RouterLink>
                    <div class="header-feed_current"></div>
                </div> -->
            </nav>
        </div>
    </header>
    <Transition name="burger">
        <nav 
            class="burger" 
            v-show="isBurgerShow"
        >
    
        </nav>
    </Transition>
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
    <Transition name="background">
        <div 
            class="burger-background"
            v-show="isBurgerShow"
            @wheel.prevent
            @touchmove.prevent
            @scroll.prevent
            @click="isBurgerShow = false"
        ></div>
    </Transition>
</template>

<style scoped lang="sass">
    @import "@/assets/styles/main"


    .header
        position: sticky
        top: 0
        left: 0
        right: 0
        background-color: $bg-white
        z-index: 1
        transition: transform .2s
        // border-bottom: 1px solid black
    .header-hide
        transform: translateY(-100%)
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

    .burger-background
        position: fixed
        top: 0
        left: 0
        right: 0
        bottom: 0
        z-index: 1
        background-color: rgba(91, 112, 131, 0.4)

    .burger
        position: fixed
        width: 100px
        height: 100vh
        background-color: black
        top: 0
        z-index: 2
    .burger-enter-active, .burger-leave-active 
        transform: translateX(0)
        transition: transform 0.24s ease

    .burger-enter-from, .burger-leave-to 
        transform: translateX(-100%)
    .background-enter-active, .background-leave-active 
        transition: opacity 0.24s ease

    .background-enter-from, .background-leave-to 
        opacity: 0
</style>