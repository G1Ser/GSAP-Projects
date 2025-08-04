<template>
  <section class="about-section">
    <div class="content">
      <div class="left">
        <div class="badge">Best Cocktails</div>
        <h2 class="modern-negra-font">Where every detail matters -from muddle to garnish</h2>
      </div>
      <div class="right">
        <p class="sub-content">
          Every cocktail we serve is a reflection of our obsession with detail — from the first
          muddle to the final garnish. That care is what turns a simple drink into something truly
          memorable.
        </p>
        <div>
          <p><span>4.5</span>/5</p>
          <p>More than +12000 customers</p>
        </div>
      </div>
    </div>
    <div class="image-container">
      <div class="top-grid">
        <template v-for="(item, index) in TOP_GRID_IMAGES" :key="index">
          <div :class="item.class">
            <div class="noise" />
            <img :src="item.img" />
          </div>
        </template>
      </div>
      <div class="bottom-grid">
        <template v-for="(item, index) in BTM_GRID_IMAGES" :key="index">
          <div :class="item.class">
            <div class="noise" />
            <img :src="item.img" />
          </div>
        </template>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { TOP_GRID_IMAGES, BTM_GRID_IMAGES } from '../constants/about';
</script>

<style scoped lang="scss">
@use '../styles/common.scss' as *;
@use '../styles/section-common.scss' as *;
$spans: 3, 4, 6, 8;
.about-section {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  @extend .page-section;
  padding: 120px 80px 0 80px;
}
.content {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  height: 245px;
  .left {
    display: flex;
    flex-direction: column;
    gap: 32px;
    width: 551px;
    .badge {
      width: 136px;
      text-align: center;
      border-radius: 9999px;
      background-color: $white;
      color: $black;
      padding: 8px 16px;
      font-size: 14px;
      font-weight: 500;
    }
    h2 {
      font-size: 64px;
    }
  }
  .right {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 445px;
    height: 100%;
    .sub-content {
      font-size: 18px;
      line-height: 30px;
    }
    div p {
      font-size: 14px;
      &:nth-child(1) {
        font-size: 30px;
        font-weight: bold;
        margin-bottom: 10px;
      }
    }
    div span {
      font-size: 48px;
      color: #e7d393;
    }
  }
}
.image-container {
  display: flex;
  flex-direction: column;
  gap: 20px;
  .top-grid,
  .bottom-grid {
    display: grid;
    grid-template-columns: repeat(12, 1fr);
    gap: 20px;
    padding: 0 20px;
    div {
      position: relative;
      border-radius: 24px;
      overflow: hidden;
      height: 288px;
    }
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
    .noise {
      @extend .noise-bg;
    }
    @each $span in $spans {
      .col-span-#{$span} {
        grid-column: span #{$span};
      }
    }
  }
}
</style>
