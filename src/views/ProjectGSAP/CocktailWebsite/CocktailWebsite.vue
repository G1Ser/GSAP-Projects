<template>
  <div class="cocktail-website">
    <NavBar class="nav-bar" />
    <HeroSection />
    <CocktailsSection />
    <AboutSection />
    <ArtSection />
    <img :src="PageGuideIcon" class="page-guide-icon" />
  </div>
</template>

<script lang="ts" setup>
import NavBar from './src/components/NavBar.vue';
import HeroSection from './src/components/HeroSection.vue';
import CocktailsSection from './src/components/CocktailsSection.vue';
import AboutSection from './src/components/AboutSection.vue';
import ArtSection from './src/components/ArtSection.vue';
import PageGuideIcon from './src/assets/svg/cocktail-arrow-down.svg';
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
