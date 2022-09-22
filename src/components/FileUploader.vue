<template>
  <div class="uploader">
    <SvgSprite
        symbol="svg-photo"
        size="24"
        class="mb-2"
    />
    <p class="uploader__title">
      Загрузить изображение
    </p>
    <p class="uploader__description">
      Максимальный размер файла 20mb
    </p>
  </div>
</template>

<script>
export default {
  name: "FileUploader"
}
</script>

<style lang="scss" scoped>
@import "@/assets/vars";

.uploader {
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 1px dashed $color-main-gray;
  border-radius: 4px;
  padding: 16px;
  user-select: none;
  cursor: pointer;

  &__title {
    font-weight: 500;
    font-size: 12px;
    line-height: 16px;
    text-align: center;
    letter-spacing: 0.01em;
    color: $color-sub-dark;
  }

  &__description {
    font-size: 12px;
    line-height: 16px;
    text-align: center;
    color: $color-main-gray;
  }
}
</style>