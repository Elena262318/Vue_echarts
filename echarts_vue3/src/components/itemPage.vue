<template>
  <div class="item">
    <!-- 设置插槽 -->
    <slot />
  </div>
</template>

<script>
export default {};
</script>

<style>
.item {
  /* 高度410px */
  height: 5.125rem;
  border: 1px solid blue;
  /* 外边距20px */
  margin: 0.25rem;
  background-color: rgba(13, 130, 255, 0.851);
}
</style>