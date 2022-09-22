<script setup lang="ts">
import {ref} from "vue";
import {usePermission} from "@/composables/permission";
import PermissionForm from "@/components/PermissionForm.vue";
import AppBtn from "@/components/AppBtn.vue";
import AppCheckbox from "@/components/AppCheckbox.vue";
import {useSignUp} from "@/composables/signup";
import {useAuth} from "@/composables/auth";

const privacyAccepted = ref<boolean>(false)
const rulesAccepted = ref<boolean>(false)
const {user} = useAuth()
const {goPrevious, goNext} = useSignUp()
const {create, permissions} = usePermission()

if (user.value && user.value.permissions.length > 0) {
  permissions.value = user.value.permissions
}
</script>

<template>
  <div class="w-full">
    <PermissionForm
        v-for="(permission, index) in permissions"
        :key="index"
        :permission="permission"
        class="mb-16"
        @update:way="permission.way = $event"
        @update:dateFrom="permission.dateFrom = $event"
        @update:dateTo="permission.dateTo = $event"
        @update:timeFrom="permission.timeFrom = $event"
        @update:timeTo="permission.timeTo = $event"
        @update:purpose="permission.purpose = $event"
        @update:hasWeapon="permission.hasWeapon = $event"
        @update:comment="permission.comment = $event"
    />
    <AppBtn
        wide
        type="outline"
        class="mb-16"
        @click="create"
    >
      <span>
        Добавьте новый вход
      </span>
      <SvgSprite
          symbol="svg-plus"
          size="24"
      />
    </AppBtn>
    <div
        class="flex items-center mb-8"
        @click="privacyAccepted = !privacyAccepted"
    >
      <AppCheckbox
          :value="privacyAccepted"
          class="mr-6"
      />
      <span>
        Целостность данных подтверждает
      </span>
    </div>
    <div
        class="flex items-center mb-32"
        @click="rulesAccepted = !rulesAccepted"
    >
      <AppCheckbox
          :value="rulesAccepted"
          class="mr-6"
      />
      <span>
        С правилами поведения в селе соглашаются
      </span>
    </div>
    <div class="flex justify-center items-center gap-16">
      <AppBtn
          type="outline"
          @click="goPrevious"
      >
        Вернуться
      </AppBtn>
      <AppBtn
          type="success"
          @click="goNext"
      >
        <span class="mr-4">
          Сохранить
        </span>
        <SvgSprite
            symbol="svg-save"
            size="24"
        />
      </AppBtn>
    </div>
  </div>
</template>

<style scoped>

</style>