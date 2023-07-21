<script setup lang="ts">
    import { ref } from 'vue'

    
    const isBanner = ref<Boolean>(true);
    setInterval(() => {
        isBanner.value = false;
    }, 1800)
</script>

<template>
    <Transition>
        <div 
            class="welcome" 
            @wheel.prevent
            @touchmove.prevent
            @scroll.prevent
            v-if="isBanner"
        >

            <div class="welcome-title" v-if="isBanner">Welcome</div>
        </div>
    </Transition>
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
            animation: title-fill .3s ease-in 1s forwards

    .v-enter-active, .v-leave-active 
        opacity: 1
        transition: opacity .5s ease-out

    .v-enter-from, .v-leave-to 
        opacity: 0

    @keyframes title-in 
        0% 
            transform: scale(0.5)
        100% 
            transform: scale(1)

    @keyframes title-fill 
        from
            height: 100%
        to
            height: 0
    
</style>