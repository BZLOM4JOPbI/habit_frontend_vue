<script setup lang="ts">
import ProfileBackground from '@/components/layout/profile/ProfileBackground.vue';
import ProfileAvatar from '@/components/layout/profile/ProfileAvatar.vue';
</script>

<template>
    <ProfileBackground 
        :img-url="'/monroe.jpg'"
    />
    <div class="container">
        <div class="main-inner">
            <section class="profile__head">
                <div class="profile__avatar">
                    <ProfileAvatar 
                        :img-url="'/marylin.jpg'"
                    />
                </div>
                UserName
            </section>
        </div>
    </div>
</template>

<style scoped lang="sass">
@import "@/assets/styles/main"

.profile__head
    display: grid
    grid-template-columns: 3fr 8fr
    align-items: center
    gap: 20px
    text-align: center

.profile__avatar
    transform: translateY(-40%)
</style>