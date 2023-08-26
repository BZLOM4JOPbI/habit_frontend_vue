<script setup lang="ts">
defineProps<{
    imgUrl: string,
}>();
</script>

<template>
    <div class="profile-bg">
        <div class="profile-bg__inner">
            <div 
                class="profile-bg__img"
                :style="`background-image: url(${imgUrl})`"
            >
    
            </div>
        </div>
    </div>
</template>

<style scoped lang="sass">
    .profile-bg__inner
        position: relative
        padding-top: 33%

    .profile-bg__img
        position: absolute
        inset: 0
        background-position: center
        background-size: cover
        background-repeat: no-repeat
</style>