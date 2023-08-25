<script setup lang="ts">
const emit = defineEmits<{
  openSideMenu: [],
}>();
</script>

<template>
    <div 
        class="burger-btn"
        @click="$emit('openSideMenu')"
    >
    <!-- @click="isBurgerShow = true" -->
        <div class="burger-btn__inner">
            <div class="burger-btn__rectangle"></div>
            <div class="burger-btn__rectangle"></div>
            <div class="burger-btn__rectangle"></div>
        </div>
    </div>
</template>

<style scoped lang="sass">
@import "@/assets/styles/main"


.burger-btn
    width: 30px
    cursor: pointer
.burger-btn__inner
    padding-top: 80%
    position: relative
.burger-btn__rectangle
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
</style>