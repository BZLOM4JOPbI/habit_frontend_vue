<script setup lang="ts">
import { reactive, watch, ref, computed, } from 'vue';
import { RouterLink, useRouter, } from 'vue-router';


const router = useRouter();
const indicatedRoutes = [ 'feed', 'search', 'profile', 'notifications', ];
const isIndicatorActive = computed(() => {
    return indicatedRoutes.includes(router.currentRoute.value.name as string)
})
</script>

<template>
    <nav class="bottom-menu">
        <div class="bottom-menu__inner">
            <RouterLink 
                to="/feed" 
                class="bottom-menu__item"
                :class="{
                    'bottom-menu__item_active' : $router.currentRoute.value.name === 'feed'
                }"
            >
                <div class="bottom-menu__item-svg">
                    <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 576 512">
                        <path d="M575.8 255.5c0 18-15 32.1-32 32.1h-32l.7 160.2c0 2.7-.2 5.4-.5 8.1V472c0 22.1-17.9 40-40 40H456c-1.1 0-2.2 0-3.3-.1c-1.4 .1-2.8 .1-4.2 .1H416 392c-22.1 0-40-17.9-40-40V448 384c0-17.7-14.3-32-32-32H256c-17.7 0-32 14.3-32 32v64 24c0 22.1-17.9 40-40 40H160 128.1c-1.5 0-3-.1-4.5-.2c-1.2 .1-2.4 .2-3.6 .2H104c-22.1 0-40-17.9-40-40V360c0-.9 0-1.9 .1-2.8V287.6H32c-18 0-32-14-32-32.1c0-9 3-17 10-24L266.4 8c7-7 15-8 22-8s15 2 21 7L564.8 231.5c8 7 12 15 11 24z"/>
                    </svg>
                </div>
                <div class="bottom-menu__item-title">
                    Feed
                </div>
            </RouterLink>
            <!-- <RouterLink 
                to="/search" 
                class="bottom-menu__item"
                :class="{
                    'bottom-menu__item_active' : $router.currentRoute.value.name === 'search'
                }"
            >
                <div class="bottom-menu__item-svg">
                    <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512">
                        <path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z"/>
                    </svg>
                </div>
                <div class="bottom-menu__item-title">
                    Search
                </div>
            </RouterLink> -->
            <RouterLink 
                to="/search" 
                class="bottom-menu__item"
                :class="{
                    'bottom-menu__item_active' : $router.currentRoute.value.name === 'search'
                }"
            >
                <div class="bottom-menu__item-svg">
                    <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512">
                        <path d="M362.7 19.3L314.3 67.7 444.3 197.7l48.4-48.4c25-25 25-65.5 0-90.5L453.3 19.3c-25-25-65.5-25-90.5 0zm-71 71L58.6 323.5c-10.4 10.4-18 23.3-22.2 37.4L1 481.2C-1.5 489.7 .8 498.8 7 505s15.3 8.5 23.7 6.1l120.3-35.4c14.1-4.2 27-11.8 37.4-22.2L421.7 220.3 291.7 90.3z"/>
                    </svg>
                </div>
                <div class="bottom-menu__item-title">
                    Post
                </div>
            </RouterLink>
            <RouterLink 
                to="/notifications" 
                class="bottom-menu__item"
                :class="{
                    'bottom-menu__item_active' : $router.currentRoute.value.name === 'notifications'
                }"
            >
                <div class="bottom-menu__item-svg">
                    <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512">
                        <path d="M224 0c-17.7 0-32 14.3-32 32V51.2C119 66 64 130.6 64 208v18.8c0 47-17.3 92.4-48.5 127.6l-7.4 8.3c-8.4 9.4-10.4 22.9-5.3 34.4S19.4 416 32 416H416c12.6 0 24-7.4 29.2-18.9s3.1-25-5.3-34.4l-7.4-8.3C401.3 319.2 384 273.9 384 226.8V208c0-77.4-55-142-128-156.8V32c0-17.7-14.3-32-32-32zm45.3 493.3c12-12 18.7-28.3 18.7-45.3H224 160c0 17 6.7 33.3 18.7 45.3s28.3 18.7 45.3 18.7s33.3-6.7 45.3-18.7z"/>
                    </svg>
                </div>
                <div class="bottom-menu__item-title">
                    Notifications
                </div>
            </RouterLink>
            <RouterLink 
                to="/profile" 
                class="bottom-menu__item"
                :class="{
                    'bottom-menu__item_active' : $router.currentRoute.value.name === 'profile'
                }"
            >
                <div class="bottom-menu__item-svg">
                    <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512">
                        <path d="M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512H418.3c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304H178.3z"/>
                    </svg>
                </div>
                <div class="bottom-menu__item-title">
                    Profile
                </div>
            </RouterLink>
            <div 
                class="bottom-menu__indicator"
                :class="{
                    'bottom-menu__indicator_active' : isIndicatorActive,
                }"
            >
            </div>
        </div>
    </nav>
</template>

<style scoped lang="sass">
@import "@/assets/styles/main"


.bottom-menu
    position: sticky
    bottom: 0
    left: 0
    right: 0
    font-size: $font-size-ss
    background-color: $bg-white
    z-index: 1

.bottom-menu__inner
    display: flex
    align-items: stretch
    position: relative

.bottom-menu__item-svg
    height: 1.5em
    width: 1.5em
    display: flex
    svg
        height: 100%
        width: 100%

.bottom-menu__item
    flex: 1 1 0
    display: flex
    align-items: center
    flex-direction: column
    gap: .5em
    padding: 0.4em
    overflow-x: hidden

.bottom-menu__item:nth-child(1).bottom-menu__item_active ~ .bottom-menu__indicator_active
    transform: translateX(0)

.bottom-menu__item:nth-child(2).bottom-menu__item_active ~ .bottom-menu__indicator_active
    transform: translateX(100%)

.bottom-menu__item:nth-child(3).bottom-menu__item_active ~ .bottom-menu__indicator_active
    transform: translateX(200%)

.bottom-menu__item:nth-child(4).bottom-menu__item_active ~ .bottom-menu__indicator_active
    transform: translateX(300%)

.bottom-menu__item_active >.bottom-menu__item-svg
    animation: acitveItem .2s ease-in
.bottom-menu__item-title
    max-width: 100%
    overflow-x: hidden
    white-space: nowrap
    text-overflow: ellipsis

.bottom-menu__indicator
    opacity: 0
    transition: transform .2s ease, opacity .2s .2s

.bottom-menu__indicator_active
    opacity: 1
    position: absolute
    width: 25%
    bottom: 0
    height: 2px
    background-color: black
    border-radius: $b-radius-m $b-radius-m 0 0

@keyframes acitveItem
    0%
        transform: scale(1)
    50%
        transform: scale(.9)
    100%
        transform: scale(1)

</style>