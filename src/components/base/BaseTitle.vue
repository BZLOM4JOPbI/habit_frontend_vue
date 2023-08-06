<script setup lang="ts">
defineProps([ 'title', ])
</script>

<template>
    <div class="title-wrap">
        <h1 class="title">{{ title }}</h1>
    </div>
</template>

<style scoped lang="sass">
    @import "@/assets/styles/main"


    .title 
        margin: 0 auto 1em
        display: block
        text-align: center
        font-size: $font-size-xl
        color: $font-color-base
        font-weight: 500
        @media screen and (max-width: 768px) 
            font-size: $font-size-l
</style>
