<script setup lang="ts">
defineProps<{
  value?: boolean
}>()
</script>

<template>
  <div
    class="checkbox"
    :class="{ 'checkbox--checked': value }"
    @click="$emit('update:value', !value)"
  />
</template>

<style lang="scss" scoped>
@import '@/assets/vars';

.checkbox {
  width: 16px;
  height: 16px;
  border-radius: 2px;
  border: 1px solid $color-main-gray;

  &--checked {
    border-color: $color-main-blue;
    background: $color-main-blue;
    position: relative;

    &::before {
      content: "";
      position: absolute;
      top: 0;
      left: 4px;
      width: 6px;
      height: 12px;
      border-bottom: 2px solid white;
      border-right: 2px solid white;
      transform: rotate(45deg);
    }
  }
}
</style>
