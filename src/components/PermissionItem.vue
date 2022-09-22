<script setup lang="ts">
import type {IPermission} from "@/types/permission";
import {DateTime} from 'luxon'
import type {IUser} from "@/types/user";

const formatDate = (date: Date | string) => {
  const format = 'dd.MM.yyyy'
  if (typeof date === 'string') {
    return DateTime.fromISO(date).toFormat(format)
  } else {
    return DateTime.fromJSDate(date).toFormat(format)
  }
}

defineProps<{
  permission: IPermission
  user: IUser
}>()
</script>

<template>
  <section class="item">
    <div class="item__status">
      <div class="item__circle">
        <SvgSprite
            symbol="svg-tick"
            size="16"
        />
      </div>
    </div>
    <div class="item__status-text">
      <strong>Выполнено</strong>
      <p>№ 9237</p>
    </div>
    <div class="item__datetime">
      <p>
        {{ permission.timeFrom.hours }}:{{ permission.timeFrom.minutes }}
      </p>
      <p class="color-sub-dark">до</p>
      <p>
        {{ permission.timeTo.hours }}:{{ permission.timeTo.minutes }}
      </p>
    </div>
    <div class="item__datetime">
      <p>
        {{ formatDate(permission.dateFrom) }}
      </p>
      <p class="color-sub-dark">до</p>
      <p>
        {{ formatDate(permission.dateTo) }}
      </p>
    </div>
    <div class="item__icons">
      <div class="item__icon-placeholder">
        <SvgSprite
            v-if="permission.hasWeapon"
            symbol="svg-gun"
            size="24"
        />
        <span v-else>
          –
        </span>
      </div>
      <div class="item__icon-placeholder">
        <SvgSprite
            v-if="permission.way === 'car'"
            symbol="svg-car"
            size="24"
        />
        <SvgSprite
          v-else
          symbol="svg-walk"
          size="24"
        />
      </div>
    </div>
    <div class="item__name">
      {{ user.name }}
      {{ user.surname }}
    </div>
    <div>
      <SvgSprite
          symbol="svg-eye"
          size="24"
      />
    </div>
  </section>
</template>

<style lang="scss" scoped>
@import '@/assets/vars';

.item {
  position: relative;
  display: grid;
  grid-template-columns: 4px 80px 110px 190px 64px 1fr 24px;
  grid-gap: 12px;
  align-items: center;
  height: 72px;
  background: white;
  padding-right: 20px;

  &:not(&:last-child) {
    margin-bottom: 1px;
  }

  &__status {
    width: 4px;
    height: 100%;
    background: $color-light-green;
  }

  &__circle {
    position: absolute;
    left: -6px;
    top: calc(50% - 8px);
    width: 16px;
    height: 16px;
    background: $color-light-green;
    color: white;
    border-radius: 8px;
  }

  &__status-text {
    color: $color-light-green;
  }

  &__datetime {
    display: flex;
    justify-content: center;
    gap: 12px;
  }

  &__icons {
    display: flex;
    gap: 16px;
    color: $color-light-green;
  }

  &__icon-placeholder {
    width: 24px;
    height: 24px;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  &__name {
    font-weight: 500;
    text-align: right;
    font-size: 14px;
    line-height: 24px;
    padding: 0 12px;
  }
}
</style>