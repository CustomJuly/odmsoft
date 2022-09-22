<script setup lang="ts">
import type {IPermission} from "@/types/permission";
import AppCard from "@/components/AppCard.vue";
import AppInput from "@/components/AppInput.vue";
import AppCheckbox from "@/components/AppCheckbox.vue";
import { ru } from 'date-fns/locale';

defineProps<{
  permission: IPermission
}>()
</script>

<template>
  <AppCard class="permission">
    <div class="permission__way">
      <div
          class="permission__way-btn"
          :class="{ 'permission__way-btn--active': permission.way === 'walk' }"
          @click="$emit('update:way', 'walk')"
      >
        <SvgSprite
            symbol="svg-walk"
            size="24"
        />
      </div>
      <div
          class="permission__way-btn"
          :class="{ 'permission__way-btn--active': permission.way === 'car' }"
          @click="$emit('update:way', 'car')"
      >
        <SvgSprite
            symbol="svg-car"
            size="24"
        />
      </div>
    </div>
    <div class="flex items-end mb-16">
      <Datepicker
          :modelValue="permission.dateFrom"
          format="cccccc, dd MMMM"
          locale="ru"
          :format-locale="ru"
          auto-apply
          placeholder="Дата, от"
          class="permission__datepicker mr-8"
          @update:modelValue="$emit('update:dateFrom', $event)"
      />
      <p class="permission__delimiter mr-8" />
      <Datepicker
          :modelValue="permission.dateTo"
          format="cccccc, dd MMMM"
          locale="ru"
          :format-locale="ru"
          auto-apply
          placeholder="Дата, до"
          class="permission__datepicker mr-32"
          @update:modelValue="$emit('update:dateTo', $event)"
      />
      <Datepicker
          :modelValue="permission.timeFrom"
          format="HH:mm"
          timePicker
          locale="ru"
          :format-locale="ru"
          auto-apply
          placeholder="От"
          class="permission__timepicker mr-8"
          @update:modelValue="$emit('update:timeFrom', $event)"
      >
        <template #input-icon>
          <SvgSprite
              symbol="svg-time"
              class="permission__timepicker-icon"
          />
        </template>
      </Datepicker>
      <p class="permission__delimiter mr-8" />
      <Datepicker
          :modelValue="permission.timeTo"
          format="HH:mm"
          timePicker
          locale="ru"
          :format-locale="ru"
          auto-apply
          placeholder="До"
          class="permission__timepicker"
          @update:modelValue="$emit('update:timeTo', $event)"
      >
        <template #input-icon>
          <SvgSprite
              symbol="svg-time"
              class="permission__timepicker-icon"
          />
        </template>
      </Datepicker>
    </div>

    <AppInput
        :value="permission.purpose"
        label="Цель визита"
        class="mb-24"
        @update:value="$emit('update:purpose', $event)"
    />

    <div class="flex items-center mb-16">
      <AppCheckbox
          :value="permission.hasWeapon"
          class="mr-6"
          @update:value="$emit('update:hasWeapon', $event)"
      />
      <span>Вход с оружием</span>
    </div>

    <AppInput
        :value="permission.comment"
        :wide="false"
        label="Комментарий"
        class="mr-8"
        @update:value="$emit('update:comment', $event)"
    />

  </AppCard>
</template>

<style lang="scss" scoped>
@import "@/assets/vars";

.permission {
  width: 100%;
  padding: 16px;

  &__way {
    display: flex;
    gap: 12px;
    margin-bottom: 16px;
  }

  &__way-btn {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 40px;
    height: 40px;
    border-radius: 4px;
    color: $color-sub-dark;
    cursor: pointer;

    &:hover {
      color: $color-main-dark;
    }

    &--active {
      color: $color-main-blue;
      background: $color-extra-light-blue;
    }
  }

  &__delimiter {
    display: flex;
    align-items: center;
    width: 16px;
    height: 40px;

    &::before {
      content: '';
      width: 16px;
      height: 1px;
      background: $color-sub-dark;
    }
  }

  &__datepicker {
    min-width: 180px;
  }

  &__timepicker {
    min-width: 80px;
  }

  &__timepicker-icon {
    height: 20px;
    width: 20px;
    margin-left: 8px;
    margin-top: 5px;
  }
}
</style>