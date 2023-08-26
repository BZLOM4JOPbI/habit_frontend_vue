<script setup lang="ts">
import { RouterLink, } from 'vue-router';
defineProps<{
    imgUrl: string,
}>();
</script>

<template>
    <RouterLink 
        class="avatar"
        :to="`/`"
    >
        <div class="avatar__inner">
            <div 
                class="avatar__img"
                :style="`background-image: url(${imgUrl})`"
            >
            </div>
        </div>
    </RouterLink>
</template>

<style scoped lang="sass">
@import "@/assets/styles/main"


.avatar
    border-radius: 50%
.avatar__inner
    position: relative
    padding-top: 100%

.avatar__img
    border-radius: 50%
    // border: 1px solid $bg-dark
    outline: 3px solid $bg-white
    // outline-offset: 1px
    position: absolute
    inset: 0
    background-position: center
    background-size: cover
    background-repeat: no-repeat
</style>