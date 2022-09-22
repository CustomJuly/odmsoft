<script setup lang="ts">
import AppBtn from "@/components/AppBtn.vue";
import {useAuth} from "@/composables/auth";
const {logout} = useAuth()
</script>

<template>
  <header class="header">
    <div class="header__left">
      <img
          src="/small-avatar.png"
          alt="header-avatar"
          class="header__avatar-img"
      />
      <div class="header__delimiter" />
      <h2>
        Logo
      </h2>
    </div>
    <div class="flex gap-16">
      <AppBtn>
        <span class="mr-4">
          Мой сертификат
        </span>
        <SvgSprite
            symbol="svg-qr"
            size="24"
        />
      </AppBtn>
      <AppBtn
          type="plain"
          @click="logout"
      >
        Выйти
      </AppBtn>
    </div>
  </header>
</template>

<style lang="scss" scoped>
@import '@/assets/vars';

.header {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  background: white;
  display: flex;
  justify-content: space-between;
  padding: 8px 16px;

  &__left {
    display: flex;
    align-items: center;
    gap: 16px;
  }

  &__avatar-img {
    width: 40px;
    height: 40px;
  }

  &__delimiter {
    width: 1px;
    height: 24px;
    background: $color-main-gray;
  }
}
</style>