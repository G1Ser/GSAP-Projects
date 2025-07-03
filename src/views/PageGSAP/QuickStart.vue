<template>
  <div class="main-container">
    <div class="box box-color-blue" />
    <div class="box box-color-green" />
    <div class="box box-color-red" />
  </div>
</template>

<script lang="ts" setup>
import { gsap } from 'gsap';
import { onMounted } from 'vue';

onMounted(() => {
  gsap.from('.box-color-blue', {
    x: 250,
    repeat: -1,
    yoyo: true,
    rotation: 360,
    duration: 4,
  });
  gsap.to('.box-color-green', {
    x: 250,
    repeat: -1,
    yoyo: true,
    rotation: 360,
    duration: 4,
  });
  gsap.fromTo(
    '.box-color-red',
    {
      x: -250,
      rotation: 0,
      borderRadius: 0,
    },
    { x: 250, duration: 4, repeat: -1, yoyo: true, rotation: 360, borderRadius: '100%' },
  );
});
</script>

<style lang="scss" scoped>
@use '@/styles/variable.scss' as *;
@include generate-color(
  (
    'box': 'box',
  )
);
.main-container {
  flex-direction: column;
  gap: 40px;
}
</style>
