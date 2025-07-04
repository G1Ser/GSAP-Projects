<template>
  <div class="cocktail-website">
    <NavBar class="nav-bar" />
    <HeroSection />
  </div>
</template>

<script lang="ts" setup>
import NavBar from './src/components/NavBar.vue';
import HeroSection from './src/components/HeroSection.vue';
</script>

<style lang="scss" scoped>
.cocktail-website {
  position: relative;
}
.nav-bar {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 5;
}
</style>
<style lang="scss">
@use './src/styles/font.scss' as *;
</style>
