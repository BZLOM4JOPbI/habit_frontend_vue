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
        margin: 0 auto 40px
        padding: 12px 0
        display: block
        text-align: center
        font-size: $font-size-xl
        color: $font-color-base
        font-weight: 500
</style>
