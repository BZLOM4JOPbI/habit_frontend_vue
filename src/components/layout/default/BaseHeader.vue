<script setup lang="ts">
import { onMounted, ref, } from 'vue';
import { throttle, } from '@/utils/wrappers'
import BaseSideMenu from './BaseSideMenu.vue';


const isBurgerShow = ref<Boolean>(false);
// const headerEl = ref<HTMLElement | null>(null);
// const oldPageScroll = ref(0);

// onMounted(() => {
//     const throttledHeaderHide:EventListener = throttle(() => {
//         if (!headerEl.value) return
//         const newPageScroll = document.documentElement.scrollTop;
//         if (newPageScroll > oldPageScroll.value) {
//             headerEl.value.classList.add('header-hide');
//         } else {
//             headerEl.value.classList.remove('header-hide')
//         }
//         oldPageScroll.value = newPageScroll
//     }, 75) as EventListener;
//     window.addEventListener('scroll', throttledHeaderHide, { passive: true, })
// })
</script>

<template>
    <header 
        class="header"
        ref="header"
    >
        <div class="container">
            <nav class="header__inner">
                <div 
                    class="header__burger-btn"
                    @click="isBurgerShow = true"
                >
                    <div class="header__burger-btn-inner">
                        <div class="header__burger-btn-rectangle"></div>
                        <div class="header__burger-btn-rectangle"></div>
                        <div class="header__burger-btn-rectangle"></div>
                    </div>
                </div>
                <div class="header__logo-wrap">
                    <div class="header__logo logo">h</div>
                </div>
                <div class="header__search"></div>
            </nav>
        </div>
    </header>
    <BaseSideMenu 
        :is-show="isBurgerShow"
        @close="isBurgerShow = false"
    />
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
.header__inner 
    padding: 14px 0 2px
    display: grid
    grid-template-columns: repeat(6, 1fr)
    align-items: center
    row-gap: 12px

.header__logo-wrap
    justify-self: center
    grid-column: span 2
.header__logo 
    font-size: $font-size-xl
    @media screen and (max-width: 500px) 
        font-size: $font-size-l
.header__burger-btn
    grid-column: span 2
    width: 30px
    cursor: pointer
.header__burger-btn-inner
    padding-top: 80%
    position: relative
.header__burger-btn-rectangle
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
.header__search
    justify-self: end
    grid-column: span 2
    width: 30px
    height: 30px
    background-color: $bg-dark
</style>