<template>
  <section class="card">
    <slot/>
  </section>
</template>

<style lang="scss" scoped>
.card {
  background: white;
  box-shadow: 0 8px 20px rgba(56, 69, 93, 0.1);
  border-radius: 4px;
}
</style>