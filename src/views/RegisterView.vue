<script setup lang="ts">
import BaseTitle from '../components/base/BaseTitle.vue'
import FormRegister from '../components/form/FormRegister.vue'

</script>

<template>
    <div class="container">
        <div class="main-inner">
            <BaseTitle :title="'Sign Up'" />
            <FormRegister />
        </div>
    </div>
</template>

<style scoped lang="sass">
    @import "@/assets/styles/main"
</style>