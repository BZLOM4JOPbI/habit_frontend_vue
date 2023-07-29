<script setup lang="ts">
import BaseTitle from '../components/base/BaseTitle.vue'
import FormLogin from '../components/form/FormLogin.vue'

</script>

<template>
    <div class="container">
        <div class="main-inner">
            <BaseTitle :title="'Sign In'" />
            <FormLogin />
        </div>
    </div>
</template>

<style scoped lang="sass">
    @import "@/assets/styles/main"
</style>