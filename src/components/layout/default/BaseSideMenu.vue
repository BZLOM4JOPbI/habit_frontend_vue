<script setup lang="ts">
defineProps<{
    isShow: Boolean,
}>();
const emit = defineEmits<{
  close: [],
}>()
</script>

<template>
    <Transition name="background">
        <div 
            class="background"
            @wheel.prevent
            @touchmove.prevent
            @scroll.prevent
            v-show="isShow"
            @click="$emit('close')"
        ></div>
    </Transition>
    <Transition name="burger">
        <aside
            class="burger" 
            v-show="isShow"
        >
        </aside>
    </Transition>
</template>

<style scoped lang="sass">
@import "@/assets/styles/main"


.background
    position: fixed
    top: 0
    left: 0
    right: 0
    bottom: 0
    z-index: 1
    background-color: $bg-opacity

.burger
    position: fixed
    width: 60%
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