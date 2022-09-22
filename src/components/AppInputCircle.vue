<script setup lang="ts">
const props = defineProps<{
 value: string[]
}>()

const emit = defineEmits(['update:value'])

const onInput = (index: number, event: InputEvent) => {
  const target = event.target as HTMLInputElement
  const copy = props.value.slice() // do copy of "value" array from props
  copy[index] = target.value
  emit('update:value', copy)
}
</script>

<template>
  <div class="digit-code">
    <input
      v-for="(num, index) in value"
      :key="index"
      ref="input"
      :value="num"
      type="number"
      maxlength="1"
      class="digit-code__control"
      @input="onInput(index, $event)"
    >
  </div>
</template>

<style lang="scss" scoped>
@import "@/assets/vars";

.digit-code {
  display: grid;
  grid-template-columns: repeat(5, 1fr); // 1fr 1fr 1fr 1fr;
  grid-gap: 16px;
  justify-content: center;
  min-width: 240px;

  &__control {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 40px;
    height: 40px;
    border: 1px solid $color-main-blue;
    border-radius: 4px;
    outline: none;
    font-size: 14px;
    line-height: 24px;
    text-align: center;
    color: $color-main-dark;

    &::-webkit-outer-spin-button,
    &::-webkit-inner-spin-button {
      -webkit-appearance: none;
    }
  }
}

</style>
