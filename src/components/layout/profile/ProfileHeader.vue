<script setup lang="ts">
import { ref, } from 'vue';
// владгейвладлюбитсосатьхуивладлбитписатьматкойвладпошлый2007владюбиткгдаеготрогаютзаяйца
import BaseSideMenu from '@/components/layout/base/BaseSideMenu.vue'
import BurgerBtn from '../default/BurgerBtn.vue'



const isBurgerShow = ref<Boolean>(false);

</script>

<template>
    <header class="header">
        <div class="container">
            <nav class="header__inner">
                <BurgerBtn 
                    @openSideMenu="isBurgerShow = true"
                />
            </nav>
        </div>
    </header>
    <BaseSideMenu 
        :is-show="isBurgerShow"
        @close="isBurgerShow = false"
    />
</template>

<style scoped lang="sass">
@import "@/assets/styles/main"

.header
    position: sticky
    top: 0
    left: 0
    right: 0
    background-color: $bg-white
    z-index: 2
.header__inner 
    padding-block: 20px
    display: flex
    align-items: center
    justify-content: space-between
    flex-wrap: wrap
    gap: 20px
</style>