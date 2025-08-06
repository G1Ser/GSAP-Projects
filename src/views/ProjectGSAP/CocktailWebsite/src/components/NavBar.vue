<template>
  <nav class="nav">
    <section class="logo">
      <img :src="logo" alt="logo" />
      <span class="modern-negra-font">Velvet Pour</span>
    </section>
    <section class="nav-list">
      <ul>
        <li v-for="item in NAV_LIST" :key="item.id">{{ item.title }}</li>
      </ul>
    </section>
  </nav>
</template>

<script setup lang="ts">
import { gsap } from 'gsap';
import { onMounted } from 'vue';
import { ScrollTrigger } from 'gsap/all';
import { NAV_LIST } from '../constants';
import logo from '../assets/images/logo.png';

gsap.registerPlugin(ScrollTrigger);
onMounted(() => {
  const navTween = gsap.timeline({
    scrollTrigger: {
      trigger: '.nav',
      start: 'bottom top',
    },
  });
  navTween.fromTo(
    '.nav',
    { backgroundColor: 'transparent' },
    {
      backgroundColor: '#00000050',
      backgroundFilter: 'blur(10px)',
      duration: 1,
      ease: 'power1.inOut',
    },
  );
});
</script>

<style scoped lang="scss">
// PC端布局
.nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 90px;
  padding: 0 90px;
  border-radius: 16px 16px 0 0;
}
.logo {
  display: flex;
  align-items: center;
  gap: 4px;
  height: 32px;
  span {
    font-size: 30px;
    color: $white;
    margin-bottom: -8px;
  }
}
.nav-list {
  color: #efefef;
  font-size: 16px;
  line-height: 24px;
  ul {
    display: flex;
    gap: 48px;
  }
  li {
    cursor: pointer;
  }
}

// 手机端布局
@media (max-width: 768px) {
  .nav {
    flex-direction: column;
    gap: 24px;
    height: 130px;
    padding: 24px 0 30px 0;
  }
  .nav-list {
    font-size: 14px;
    ul {
      gap: 25px;
    }
  }
}
</style>
