<script setup lang="ts">
import AppCard from "@/components/AppCard.vue";
import type {IUser} from "@/types/user";

defineProps<{
  user: IUser
}>()
</script>

<template>
  <AppCard class="user">
    <div class="user__main">
      <div class="user__avatar">
        <img
            src="/avatar.png"
            alt="avatar"
            class="user__avatar-img"
        >
      </div>
      <div class="user__info">
        <h3 class="mb-4">
          {{ user.name }} {{ user.surname }}
        </h3>
        <div class="user__add mb-8">
          <SvgSprite
              symbol="svg-id"
              size="24"
              class="color-sub-dark"
          />
          <span>
          {{ user.cardId }}
        </span>
        </div>
        <div class="user__add">
          <SvgSprite
              symbol="svg-phone"
              size="24"
              class="color-sub-dark"
          />
          <span>
          {{ user.phone }}
        </span>
        </div>
      </div>
    </div>
    <div class="user__additionals">
      <div class="user__add mb-32">
        <SvgSprite
            symbol="svg-car"
            size="24"
            class="color-sub-dark"
        />
        <span>
          {{ user.car }}
        </span>
      </div>
      <div class="user__add">
        <SvgSprite
            symbol="svg-gun"
            size="24"
            class="color-sub-dark"
        />
        <span>
          {{ user.weapon }}
        </span>
      </div>
    </div>
    <div class="user__edit">
      <SvgSprite
          symbol="svg-edit"
          size="24"
      />
    </div>
  </AppCard>
</template>

<style lang="scss" scoped>
@import '@/assets/vars';

.user {
  display: grid;
  grid-template-columns: 1fr 180px 40px;
  align-items: center;

  &__main {
    display: flex;
    gap: 16px;
    padding: 16px 20px 18px;
  }

  &__avatar {
    display: block;
    width: 96px;
    height: 96px;
  }

  &__additionals {
    height: 100%;
    padding: 24px;
    background: $color-rare-gray;
  }

  &__edit {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    background: $color-sub-gray;
    cursor: pointer;
  }

  &__add {
    display: flex;
    gap: 8px;
    align-items: center;
  }

  &__avatar-img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
}
</style>