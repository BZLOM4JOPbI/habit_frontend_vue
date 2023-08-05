<script setup lang="ts">
import { reactive, } from 'vue';

defineProps([ 'label', 'isDisable']);

const backgroundArray = reactive({
    'button-active-left': false,
    'button-active-right': false,
})

const mouseInHandler = (e: MouseEvent) => {
    if (e.target) {
        const btn = e.target as HTMLButtonElement;
        const btnRect = btn.getBoundingClientRect();
        const btnWidth = btnRect.width;

        const mouseX = e.clientX - btnRect.left;
        const relativePosition = mouseX / btnWidth;

        if (relativePosition <= 0.5) {
            backgroundArray['button-active-right'] = true;
        } else if (relativePosition > 0.5) {
            backgroundArray['button-active-left'] = true;
        }
    }
};

const mouseOutHandler = () => {
    backgroundArray['button-active-left'] = false;
    backgroundArray['button-active-right'] = false;
}
</script>

<template>
    <button 
        class="button"
        @mouseover="mouseInHandler"
        @mouseleave="mouseOutHandler"
        :class="backgroundArray"
        :disabled="isDisable"
    >
        {{ label }}
    </button>
</template>

<style scoped lang="sass">
    @import "@/assets/styles/main"



    .button
        padding: 12px 20px
        border: $b-width solid $font-color-base
        background-color: transparent
        cursor: pointer
        position: relative
        transition: color .3s
        font-size: $font-size-s
        overflow: hidden
        &::before, &::after
            content: ''
            top: 0
            bottom: 0
            width: 0
            background-color: $bg-dark
            transform: skewX(35deg)
            z-index: -1
            transition: width .3s
        &::before
            left: -50px
        &::after
            right: -50px
    .button-active-left
        color: $font-color-light
        &::after
            width: calc(100% + 65px)
    .button-active-right
        color: $font-color-light
        &::before
            width: calc(100% + 65px)
</style>