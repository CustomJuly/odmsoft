<script setup lang="ts">
import EmailForm from "@/components/EmailForm.vue";
import {useAuth} from "@/composables/auth";
import VerificationForm from "@/components/VerificationForm.vue";
const { currentStep } = useAuth()
</script>

<template>
  <div class="login">
    <div class="login__container login__container--logo">
      <h2>Logo</h2>
    </div>
    <div class="login__container">
      <EmailForm v-if="currentStep === 1" />
      <VerificationForm v-else />
    </div>
    <div class="login__container" />
  </div>
</template>

<style lang="scss">
@import "@/assets/vars";

.login {
  margin: 0 auto;
  width: 368px;
  height: 100%;
  display: flex;
  flex-direction: column;

  &__container {
    flex: 1 0 0;

    &--logo {
      display: flex;
      justify-content: center;
      align-items: center;
      color: $color-main-blue;
    }
  }

  &__info {
    line-height: 20px;
    color: $color-sub-dark;
    margin-bottom: 16px;
  }

  &__input-label {
    line-height: 24px;
    color: $color-sub-dark;
  }
}
</style>