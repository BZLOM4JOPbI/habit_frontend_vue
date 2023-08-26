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
                <div 
                    class="header__goback-arrow"
                    @click="$router.go(-1)"
                >
                    <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="-40 -40 480.00 480.00" xml:space="preserve" stroke="#000000" stroke-width="0.004000040000000001" transform="matrix(1, 0, 0, 1, 0, 0)">
                        <path d="M382.688,182.686H59.116l77.209-77.214c6.764-6.76,6.764-17.726,0-24.485c-6.764-6.764-17.73-6.764-24.484,0L5.073,187.757 c-6.764,6.76-6.764,17.727,0,24.485l106.768,106.775c3.381,3.383,7.812,5.072,12.242,5.072c4.43,0,8.861-1.689,12.242-5.072 c6.764-6.76,6.764-17.726,0-24.484l-77.209-77.218h323.572c9.562,0,17.316-7.753,17.316-17.315 C400.004,190.438,392.251,182.686,382.688,182.686z"></path> 
                    </svg>
                </div>
                <div class="header__username">
                    @{{ $route.params.username }}
                </div>
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
    height: $header-height
    display: flex
    align-items: center
    justify-content: space-between
    flex-wrap: wrap
    gap: 20px

.header__username
.header__goback-arrow
    // height: 18px
    cursor: pointer
    width: 30px
    svg
        display: block
        // height: 100%
        // width: 100%
</style>