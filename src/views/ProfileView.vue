<script setup lang="ts">
import ProfileBackground from '@/components/layout/profile/ProfileBackground.vue';

</script>

<template>
    <ProfileBackground 
        :img-url="'/monroe.jpg'"
    />
    <div class="container">
        <div class="main-inner">
            profile {{ $route.params.username }}
        </div>
    </div>
</template>

<style scoped lang="sass">
</style>