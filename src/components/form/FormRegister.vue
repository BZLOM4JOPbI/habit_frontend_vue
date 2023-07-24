<template>
    <section class="register-wrap">
        <form class="register" @submit.prevent>
            <slot />
        </form>
    </section>
</template>

<style scoped lang="sass">
    .register-wrap
        margin: 0 auto
        max-width: 460px
        box-shadow: 0 0px 4px 0 rgba(0,0,0,.1)
    .register
        padding: 40px
        display: flex
        flex-direction: column
        align-items: stretch
        gap: 30px
</style>