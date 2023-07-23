<script setup lang="ts">
defineProps([ 'modelValue', 'label', ]);
defineEmits([ 'update:modelValue', ]);

</script>

<template>
    <div class="input-wrap">
        <input 
            type="text" 
            class="input"
            :value="modelValue"
            @input="$emit('update:modelValue', ($event.target as HTMLInputElement).value)"
        >
        <div 
            class="input-placeholder"
            :class="{ 'input-placeholder-active': modelValue }"
        >
            {{ label }}
        </div>
    </div>
</template>

<style scoped lang="sass">
    @import "@/assets/styles/main"


    .input
        width: 100%
        padding: 12px 20px
        position: relative
        background-color: transparent
        z-index: 1
        font-size: $font-size-s
    .input-wrap
        width: 100%
        position: relative
        border: 2px solid #111
        border-radius: 3px
    .input-placeholder
        position: absolute
        left: 20px
        top: 50%
        transform: translateY(-50%)
        z-index: 0
        color: grey
        padding: 3px 5px
        background-color: #fff
        font-size: $font-size-ss
        user-select: none
        transition: all .3s ease
    .input:focus + .input-placeholder
        font-size: 16px
        color: #111
        top: 0
    .input-placeholder-active
        font-size: 16px 
        color: #111 
        top: 0
</style>