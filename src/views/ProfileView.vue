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
                <h2 class="profile__name">
                    {{ $route.params.username }}
                </h2>
            </section>
        </div>
    </div>
</template>

<style scoped lang="sass">
@import "@/assets/styles/main"

.profile__head
    display: flex
    align-items: center
    flex-direction: column
    gap: 20px
    transform: translateY(-40%)

.profile__avatar
    width: 28%
    min-width: 85px
.profile__name
    font-weight: 500
    font-size: $font-size-m
</style>