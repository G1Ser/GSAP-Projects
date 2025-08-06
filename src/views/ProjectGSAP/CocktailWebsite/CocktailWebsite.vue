<template>
  <div class="cocktail-website">
    <NavBar class="nav-bar" @to-page="handleToPage" />
    <HeroSection id="hero" />
    <CocktailsSection id="cocktails" />
    <AboutSection id="about" />
    <ArtSection id="art" />
    <MenuSection id="menu" />
    <ContactSection id="contact" />
    <img :src="PageGuideIcon" class="page-guide-icon" v-show="isArrowShow" />
  </div>
</template>

<script lang="ts" setup>
import { ref, onMounted, onUnmounted, nextTick } from 'vue';
import NavBar from './src/components/NavBar.vue';
import HeroSection from './src/components/HeroSection.vue';
import CocktailsSection from './src/components/CocktailsSection.vue';
import AboutSection from './src/components/AboutSection.vue';
import ArtSection from './src/components/ArtSection.vue';
import MenuSection from './src/components/MenuSection.vue';
import ContactSection from './src/components/ContactSection.vue';
import { debounce } from '@/utils';
import PageGuideIcon from './src/assets/svg/cocktail-arrow-down.svg';

const handleToPage = (sectionId: string) => {
  const element = document.getElementById(sectionId);
  if (!element) return;
  element.scrollIntoView({
    behavior: 'smooth',
  });
};

// 滚动阈值
const SCROLL_THRESHOLD = 150;
const isArrowShow = ref(false);
// 滚动位置保存
const saveScrollPosition = () => {
  const scrollPosition = {
    x: window.pageXOffset || document.documentElement.scrollLeft,
    y: window.pageYOffset || document.documentElement.scrollTop,
  };
  sessionStorage.setItem('scrollPosition', JSON.stringify(scrollPosition));
};

const restoreScrollPosition = async () => {
  await nextTick();
  const scrollPosition = sessionStorage.getItem('scrollPosition');
  if (!scrollPosition) return;
  const { x, y } = JSON.parse(scrollPosition);
  setTimeout(() => {
    window.scrollTo({
      left: x,
      top: y,
      behavior: 'auto',
    });
  }, 0);
};
// 检测滚动位置
const checkScrollPosition = () => {
  const documentHeight = document.documentElement.scrollHeight;
  const windowHeight = window.innerHeight;
  const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  isArrowShow.value = documentHeight - scrollTop - windowHeight >= SCROLL_THRESHOLD;
};

// 滚动函数
const handleScroll = () => {
  saveScrollPosition();
  checkScrollPosition();
};

const debounceHanleScroll = debounce(handleScroll, 100);
onMounted(() => {
  restoreScrollPosition();
  checkScrollPosition();
  window.addEventListener('scroll', debounceHanleScroll);
});
onUnmounted(() => {
  window.removeEventListener('scroll', debounceHanleScroll);
});
</script>

<style lang="scss" scoped>
.cocktail-website {
  position: relative;
}
.nav-bar {
  position: fixed;
  inset: 0;
  z-index: 9999;
}
.page-guide-icon {
  position: fixed;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 5;
}
</style>
<style lang="scss">
@use './src/styles/font.scss' as *;
@use './src/styles/common.scss' as *;
</style>
