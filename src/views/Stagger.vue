<template>
  <div class="main-container">
    <div class="box" v-for="i in 7" :key="i" :class="`box-color-${i}`" />
  </div>
</template>

<script setup lang="ts">
import { gsap } from 'gsap';
import { onMounted } from 'vue';

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
.main-container {
  gap: 20px;
}
// 使用SCSS循环创建6个颜色类
$colors: (
  1: #ff0000,
  // 红色
  2: #ff7f00,
  // 橙色
  3: #ffff00,
  // 黄色
  4: #00ff00,
  // 绿色
  5: #0000ff,
  // 蓝色
  6: #4b0082,
  // 靛蓝色
  7: #9400d3, // 紫色
);

@each $i, $color in $colors {
  .box-color-#{$i} {
    background: linear-gradient(45deg, rgba($color, 0.5), rgba($color, 1));
  }
}
</style>
