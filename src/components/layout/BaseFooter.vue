<script setup lang="ts">
const currentYear = new Date().getFullYear();
</script>
<template>
    <footer class="footer">
        <div class="container">
            <div class="footer-inner">
                <div class="footer-logo logo">habit</div>
                <div class="footer-copy">&copy;{{ currentYear }}</div>
            </div>
        </div>
    </footer>
</template>
<style scoped lang="sass">
    @import "@/assets/styles/main"


    .footer-inner 
        padding: 20px 0
        display: flex
        justify-content: center
        align-items: flex-start
    .footer-logo 
        font-size: 24px
    .footer-copy
        font-weight: 700
</style>