<script setup lang="ts">
import AppCard from "@/components/AppCard.vue";
import AppBtn from "@/components/AppBtn.vue";
import AppInput from "@/components/AppInput.vue";
import FileUploader from "@/components/FileUploader.vue";
import {useAuth} from "@/composables/auth";
import {useSignUp} from "@/composables/signup";

const { user } = useAuth()
const { goPrevious, goNext } = useSignUp()
</script>

<template>
  <AppCard class="mb-32">
    <div class="signup__profile">
      <AppInput
          v-model:value="user.name"
          label="Имя"
      />
      <AppInput
          v-model:value="user.surname"
          label="Фамилия"
      />
      <FileUploader class="signup__uploader" />
      <AppInput
          v-model:value="user.cardId"
          label="Номер удостоверения личности"
      />
      <AppInput
          v-model:value="user.phone"
          label="Номер мобильного телефона"
      />
    </div>
    <div class="signup__additional">
      <div class="signup__additional-cell">
        <AppInput
            v-model:value="user.weapon"
        />
        <SvgSprite
            symbol="svg-gun"
            size="24"
            class="signup__icon"
        />
      </div>
      <div class="signup__additional-cell">
        <AppInput
            v-model:value="user.car"
            placeholder="Номер автомобиля"
            alignment="right"
        />
        <SvgSprite
            symbol="svg-car"
            size="24"
            class="signup__icon"
        />
      </div>
    </div>
  </AppCard>
  <div class="flex gap-16">
    <AppBtn
        type="outline"
        @click="goPrevious"
    >
      <SvgSprite
          symbol="svg-back"
          size="24"
          class="mr-18"
      />
      <span>
          Назад
        </span>
    </AppBtn>
    <AppBtn
        type="primary"
        @click="goNext"
    >
        <span>
          Далее
        </span>
      <SvgSprite
          symbol="svg-next"
          size="24"
          class="ml-18"
      />
    </AppBtn>
  </div>
</template>

<style scoped>

</style>