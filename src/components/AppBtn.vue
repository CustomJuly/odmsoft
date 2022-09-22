<script setup lang="ts">
defineProps<{
  type?: 'primary' | 'plain' | 'success' | 'outline'
  wide?: boolean
}>()
</script>

<template>
  <button
      :class="['btn', `btn--${type || 'primary'}`, { 'btn--wide': wide ?? false }]"
  >
    <slot />
  </button>
</template>

<style lang="scss" scoped>
@import "@/assets/vars";

.btn {
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 14px;
  line-height: 24px;
  padding: 8px 20px;
  border-radius: 4px;
  border: none;
  background: transparent;
  cursor: pointer;

  &--primary {
    background: $color-main-blue;
    color: white;
  }

  &--plain {
    color: $color-main-blue;
  }

  &--success {
    background: $color-main-green;
    color: white;
  }

  &--outline {
    border: 1px solid $color-sub-dark;
    color: $color-sub-dark;
  }

  &--wide {
    width: 100%;
  }
}
</style>