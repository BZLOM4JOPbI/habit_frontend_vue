<script setup lang="ts">
    import { ref } from 'vue'

    
    const isBanner = ref<Boolean>(true);
    const banner = ref();
    const bannerWatcher = setInterval(() => {
        if (window.getComputedStyle(banner.value).visibility === 'visible') return
        isBanner.value = false;
        clearInterval(bannerWatcher);
    }, 1000);
</script>

<template>
    <div 
        class="welcome" 
        @wheel.prevent
        @touchmove.prevent
        @scroll.prevent
        ref="banner"
        v-if="isBanner"
    >
        <div class="welcome-title">Welcome</div>
    </div>
</template>

<style scoped lang="sass">
    .welcome
        position: fixed
        height: 100vh
        top: 0
        left: 0
        right: 0
        bottom: 0
        background-color: #111
        color: #fff
        display: flex
        align-items: center
        justify-content: center
        -webkit-backface-visibility: hidden
        animation: banner-out .3s ease-out 1.5s forwards
    .welcome-title
        padding: 20px 30px
        position: relative
        border: 1px solid #fff
        background-color: transparent
        color: #fff
        font-size: 50px
        animation: title-in 1s cubic-bezier(.23,.75,.25,1)
        &::before
            content: ''
            bottom: 0
            left: 0
            right: 0
            background-color: #fff
            height: 100%
            animation: title-fill .3s ease-in 0.9s forwards
            
    @keyframes title-in 
        from
            transform: scale(0.5)
        to
            transform: scale(1)
    @keyframes title-fill 
        from
            height: 100%
        to
            height: 0
    @keyframes banner-out
        from
            opacity: 1
        to
            opacity: 0
            visibility: hidden
</style>