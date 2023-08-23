<script setup lang="ts">
const currentYear = new Date().getFullYear();
</script>

<template>
    <footer class="footer">
        <div class="container">
            <div class="footer__inner">
                <div class="footer__logo logo">habit</div>
                <div class="footer__copy">&copy;{{ currentYear }}</div>
            </div>
        </div>
    </footer>
</template>

<style scoped lang="sass">
    @import "@/assets/styles/main"


    .footer__inner 
        padding: 20px 0
        display: flex
        justify-content: center
        align-items: flex-start
    .footer__logo 
        font-size: 24px
    .footer__copy
        font-weight: 700
        user-select: none

</style>