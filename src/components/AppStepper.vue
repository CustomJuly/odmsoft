<script setup lang="ts">
defineProps<{
  active: number
  steps: string[]
}>()
</script>

<template>
  <div class="stepper">
    <div
        v-for="(step, index) in steps"
        :key="step"
        :class="['stepper__step', { 'stepper__step--completed': index + 1 < active }, { 'stepper__step--active': index === active - 1 }]"
    >
      <div class="stepper__circle">
        <span v-if="index + 1 >= active">
          {{ index + 1 }}
        </span>
        <SvgSprite
            v-else
            symbol="svg-tick"
            size="24"
        />
      </div>
      <p class="stepper__label">
        {{ step }}
      </p>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "@/assets/vars";

.stepper {
  width: max-content;
  display: flex;
  gap: 180px;
  position: relative;
  
  &::before {
    content: '';
    position: absolute;
    top: calc(50% - 1px);
    left: 0;
    width: 100%;
    height: 1px;
    background: $color-main-gray;
  }

  &__step {
    position: relative;
    z-index: 1;
  }

  &__circle {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 48px;
    height: 48px;
    background: $color-rare-gray;
    border: 1px solid $color-main-gray;
    border-radius: 50%;
  }

  &__step--active &__circle {
    border-color: $color-main-blue;
    outline: 3px solid $color-sub-light-blue;
  }

  &__step--completed &__circle {
    background: $color-light-blue;
    border-color: $color-light-blue;
    color: white;
  }

  &__label {
    position: absolute;
    bottom: -24px;
    left: 0;
    font-size: 16px;
    line-height: 24px;
    color: $color-main-dark;
    white-space: nowrap;
    transform: translateX(calc(-50% + 24px));
  }

  &__step--active &__label {
    color: $color-main-blue;
  }
}
</style>