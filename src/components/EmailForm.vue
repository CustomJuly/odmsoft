
<script setup lang="ts">
import AppInput from "@/components/AppInput.vue";
import AppBtn from "@/components/AppBtn.vue";
import {useAuth} from "@/composables/auth";

const { email, goNext } = useAuth()
</script>

<template>
  <h2 class="mb-12">
    Войти
  </h2>
  <p class="login__info">
    Для того чтобы идентифицировать себя в системе,
    нужно ввести номер своего мобильного телефона
  </p>
  <p class="login__input-label">
    Email:
  </p>
  <AppInput
      v-model:value="email"
      wide
      alignment="right"
      placeholder="example@example.com"
      class="mb-32"
  />
  <div class="flex gap-16">
    <AppBtn
        type="plain"
        wide
    >
      Забыли пароль
    </AppBtn>
    <AppBtn
        wide
        @click="goNext"
    >
      Подать заявку
    </AppBtn>
  </div>
</template>

<style scoped>

</style>