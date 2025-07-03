<template>
  <div class="main-container">
    <div
      class="box"
      v-for="color in colors"
      :key="color"
      :class="`box-linear-gradient-color-${color}`"
    />
  </div>
</template>

<script setup lang="ts">
import { gsap } from 'gsap';
import { onMounted, ref } from 'vue';

const colors = ref(['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'purple']);

onMounted(() => {
  gsap.to('.box', {
    y: 250,
    rotate: 360,
    borderRadius: '100%',
    repeat: -1,
    yoyo: true,
    duration: 3,
    stagger: {
      amount: 1.5,
      from: 'random',
    },
  });
});
</script>

<style scoped lang="scss">
@use '@/styles/variable.scss' as *;
@include generate-linear-gradient-color-boxes;
.main-container {
  gap: 20px;
}
</style>
