<script setup lang="ts">
defineProps<{
    imgUrl: string,
}>();
</script>

<template>
    <div class="avatar">
        <div class="avatar__inner">
            <div 
                class="avatar__img"
                :style="`background-image: url(${imgUrl})`"
            >
            </div>
        </div>
    </div>
</template>

<style scoped lang="sass">
@import "@/assets/styles/main"

// .avatar
.avatar__inner
    position: relative
    padding-top: 100%

.avatar__img
    border-radius: 50%
    border: 1px solid $bg-dark
    outline: 3px solid $bg-white
    // outline-offset: 1px
    position: absolute
    inset: 0
    background-position: center
    background-size: cover
    background-repeat: no-repeat
</style>