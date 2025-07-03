<template>
  <div class="main-container">
    <div class="box blue-box" />
    <div class="box green-box" />
    <div class="box red-box" />
  </div>
</template>

<script lang="ts" setup>
import { gsap } from 'gsap';
import { onMounted } from 'vue';

onMounted(() => {
  gsap.from('.blue-box', {
    x: 250,
    repeat: -1,
    yoyo: true,
    rotation: 360,
    duration: 4,
  });
  gsap.to('.green-box', {
    x: 250,
    repeat: -1,
    yoyo: true,
    rotation: 360,
    duration: 4,
  });
  gsap.fromTo(
    '.red-box',
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
.main-container {
  flex-direction: column;
  gap: 40px;
}
.blue-box {
  background-color: #3b82f6;
}
.green-box {
  background-color: #10b981;
}
.red-box {
  background-color: #ef4444;
}
</style>
