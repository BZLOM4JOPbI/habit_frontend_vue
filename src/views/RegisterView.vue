<script setup lang="ts">
import { ref, } from 'vue';
import BaseInput from '../components/base/BaseInput.vue'
import PhoneInput from '../components/base/PhoneInput.vue'

const input = ref();
const phoneNumber = ref()

</script>

<template>
    <div class="container">
        <div class="main-inner">
            <div class="register-wrap">
                <form class="register">
                    <BaseInput v-model="input" :label="'placeholder'"/>
                    <PhoneInput v-model="phoneNumber"/>
                </form>
            </div>
        </div>
    </div>
</template>

<style scoped lang="sass">
    @import "@/assets/styles/main"

    
    .register-wrap
        padding: 3% 8%
        max-width: 600px
        margin: 0 auto
        border: 3px solid #111
        border-radius: 3px
        display: flex
        flex-direction: column
        align-items: stretch
    .register
        display: flex
        gap: 20px
        flex-direction: column
</style>