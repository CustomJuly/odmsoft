<script setup lang="ts">
import AppStepper from "@/components/AppStepper.vue";
import {ref} from "vue";
import ProfileForm from "@/components/ProfileForm.vue";
import {useSignUp} from "@/composables/signup";
import CreatePermissions from "@/components/CreatePermissions.vue";
import router from "@/router";
import {useAuth} from "@/composables/auth";
import {useRoute} from "vue-router";

const steps = ref<string[]>([
    'Персональная информация',
    'Детали сертификата'
])

const { currentStep } = useSignUp()
const { user } = useAuth()

const {query} = useRoute()

if (query.new) {
  currentStep.value = 2
}

if (!user.value) {
  router.push('/login')
}
</script>

<template>
  <div v-if="user" class="signup">
    <h2 class="logo mb-30">
      Logo
    </h2>
    <AppStepper
        :active="currentStep"
        :steps="steps"
        class="signup__stepper"
    />
    <ProfileForm v-if="currentStep === 1" />
    <CreatePermissions v-else />
  </div>
</template>

<style lang="scss">
@import "@/assets/vars";

.signup {
  display: flex;
  flex-direction: column;
  align-items: center;

  &__stepper {
    margin-bottom: 56px;
  }

  &__profile {
    padding: 16px;
    display: grid;
    grid-template-columns: 1fr 1fr 144px;
    gap: 16px;
  }

  &__uploader {
    grid-area: 1 / 3 / 3 / 4;
  }

  &__additional {
    display: grid;
    grid-template-columns: 1fr 1fr;
    background: $color-rare-gray;
  }

  &__additional-cell {
    display: flex;
    align-items: center;
    gap: 16px;
    padding: 16px;

    &:first-child {
      border-right: 1px solid $color-main-gray;
    }
  }

  &__icon {
    color: $color-sub-dark;
  }
}
</style>