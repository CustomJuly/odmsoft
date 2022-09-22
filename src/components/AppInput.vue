<script setup lang="ts">
import {ref} from "vue";

defineProps({
  value: { type: String, required: false },
  placeholder: { type: String, required: false },
  label: { type: String, required: false },
  alignment: { type: String, required: false, default: 'left' },
  wide: { type: Boolean, required: false, default: true }
})

const id = ref<string>(`input__${Math.round(Math.random() * 1e7)}`)
</script>

<template>
  <div
      :class="['input', `input--align-${alignment ?? 'left'}`, { 'input--wide': wide ?? true }]"
  >
    <label
        v-if="label"
        :for="id"
        class="input__label"
    >
      {{ label }}
    </label>
    <input
        :id="id"
        :value="value"
        :placeholder="placeholder"
        type="text"
        class="input__control"
        @input="$emit('update:value', $event.target.value)"
    >
  </div>
</template>

<style lang="scss" scoped>
@import "@/assets/vars";

.input {
  &__label {
    display: block;
    font-size: 14px;
    line-height: 24px;
    color: $color-sub-dark;
  }

  &__control {
    border: 1px solid $color-main-gray;
    border-radius: 4px;
    padding: 7px;
    font-size: 14px;
    line-height: 24px;
    color: $color-main-dark;
    outline: none;
    background: transparent;

    &:focus {
      border-color: $color-main-blue;
    }

    &::placeholder {
      color: $color-main-gray;
    }
  }

  &--align-left &__control {
    text-align: left;
  }

  &--align-right &__control {
    text-align: right;
  }

  &--wide,
  &--wide &__control {
    width: 100%;
  }
}
</style>