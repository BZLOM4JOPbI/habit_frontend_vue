<script setup lang="ts">
import { computed, } from 'vue';

const props = defineProps([ 'modelValue', 'label', 'type', 'errorMessage', 'isRequired', ]);
defineEmits([ 'update:modelValue', ]);

const inputMask = computed(() => {
    return props.type === 'tel' ? '+7 (###) ### ##-##' : ''
})
</script>

<template>
    <div class="input__wrap">
        <div class="input__inner">
            <input 
                :type="props.type" 
                class="input"
                :value="props.modelValue"
                :name="props.type"
                @input="$emit('update:modelValue', ($event.target as HTMLInputElement).value)"
                v-maska="inputMask"
                :required="props.isRequired"
            >
            <div 
                class="input__placeholder"
                :class="{ 'input__placeholder_active': props.modelValue }"
            >
                {{ props.label }}
            </div>
        </div>
        <div 
            class="input__error-wrap"
            :class="{ 'input__error-wrap_active': props.errorMessage }"
        >
            <div class="input__error" >
                {{ props.errorMessage }}
            </div>
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
.input__inner
    width: 100%
    position: relative
    border: $b-width solid $bg-dark
.input__placeholder
    position: absolute
    left: 20px
    top: 50%
    transform: translateY(-50%)
    z-index: 0
    color: $font-color-opacity
    padding: 3px 5px
    background-color: $bg-white
    font-size: $font-size-ss
    user-select: none
    transition: all .3s ease
.input:focus + .input__placeholder, .input__placeholder_active
    font-size: 16px
    color: $font-color-base
    top: 0
.input__error-wrap
    display: grid
    grid-template-rows: 0fr
    transition: grid-template-rows .2s ease
.input__error-wrap_active
    grid-template-rows: 1fr
.input__error
    min-height: 0
input:-webkit-autofill, input:-webkit-autofill:hover, input:-webkit-autofill:focus, input:-webkit-autofill:active
    -webkit-background-clip: text
    -webkit-text-fill-color: $font-color-base
    transition: background-color 5000s ease-in-out 0s

</style>