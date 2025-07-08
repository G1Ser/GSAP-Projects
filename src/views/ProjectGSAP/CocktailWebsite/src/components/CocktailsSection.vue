<template>
  <section class="cocktail-section noise-bg">
    <img :src="leftLeaf" alt="left-leaf" class="left-leaf" />
    <img :src="rightLeaf" alt="right-leaf" class="right-leaf" />
    <section class="cocktail-rank">
      <div class="cocktail-rank--list">
        <header>Most popular cocktails:</header>
        <ul>
          <li v-for="(cocktail, index) in POPULAR_COCKTAILS" :key="index">
            <div class="cocktail-list">
              <header>
                <span class="modern-negra-font">{{ cocktail.name }}</span>
                <span>— ${{ cocktail.price }}</span>
              </header>
              <footer>
                <span>{{ cocktail.country }}</span>
                <span>&nbsp;|&nbsp;</span>
                <span>{{ cocktail.detail }}</span>
              </footer>
            </div>
          </li>
        </ul>
      </div>
      <div class="cocktail-rank--list">
        <header>Most loved mocktails:</header>
        <ul>
          <li v-for="(cocktail, index) in LOVED_MOCKTAILS" :key="index">
            <div class="cocktail-list">
              <header>
                <span class="modern-negra-font">{{ cocktail.name }}</span>
                <span>— ${{ cocktail.price }}</span>
              </header>
              <footer>
                <span>{{ cocktail.country }}</span>
                <span>&nbsp;|&nbsp;</span>
                <span>{{ cocktail.detail }}</span>
              </footer>
            </div>
          </li>
        </ul>
      </div>
    </section>
  </section>
</template>

<script setup lang="ts">
import { POPULAR_COCKTAILS, LOVED_MOCKTAILS } from '../constants';
import leftLeaf from '../assets/images/cocktail-left-leaf.png';
import rightLeaf from '../assets/images/cocktail-right-leaf.png';
</script>

<style scoped lang="scss">
@use '../styles/section-common.scss' as *;
.cocktail-section {
  .cocktail-rank {
    display: flex;
    justify-content: space-between;
    width: 100%;
    padding: 120px 80px;
    &--list {
      display: flex;
      flex-direction: column;
      gap: 24px;
      size: 20px;
      color: $white;
      ul {
        display: flex;
        flex-direction: column;
        gap: 36px;
      }
    }
  }
  .cocktail-list {
    display: flex;
    flex-direction: column;
    width: 340px;
    gap: 6px;
    header {
      display: flex;
      justify-content: space-between;
      span {
        &:nth-child(1) {
          font-size: 30px;
          color: #e7d393;
        }
        &:nth-child(2) {
          font-size: 22px;
          transform: translateY(-2px);
        }
      }
    }
    footer {
      font-size: 16px;
    }
  }
  .left-leaf,
  .right-leaf {
    position: absolute;
    bottom: 0;
  }
}
</style>
