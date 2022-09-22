<script setup lang="ts">
import AppBtn from "@/components/AppBtn.vue";
import {useAuth} from "@/composables/auth";
import AppInputCircle from "@/components/AppInputCircle.vue";

const { code, verify, goPrevious } = useAuth()
</script>

<template>
  <h2 class="mb-12">
    Добро пожаловать
  </h2>
  <p class="login__info">
    На ваше электронное письмо отправляется одноразовый код.
  </p>
  <p class="login__input-label">
    Код подтверждения
  </p>
  <AppInputCircle
      v-model:value="code"
      class="mb-32"
  />
  <div class="flex gap-16">
    <AppBtn
        type="outline"
        wide
        @click="goPrevious"
    >
      Отменить
    </AppBtn>
    <AppBtn
        wide
        type="success"
        @click="verify"
    >
      Подтвердить
    </AppBtn>
  </div>
</template>

<style scoped>

</style>