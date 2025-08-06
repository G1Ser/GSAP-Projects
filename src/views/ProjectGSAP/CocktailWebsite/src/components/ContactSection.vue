<template>
  <div class="contact-section"></div>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
@use '../styles/section-common.scss' as *;
.contact-section {
  @extend .page-section;
  padding: 120px 80px;
  background: radial-gradient(circle at center, #434343 0%, #000 50%, transparent 100%);
}
</style>
