<template>
  <section class="cocktail-section noise-bg">
    <img :src="leftLeaf" alt="left-leaf" class="cocktail-left-leaf" />
    <img :src="rightLeaf" alt="right-leaf" class="cocktail-right-leaf" />
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
import { gsap } from 'gsap';
import { onMounted } from 'vue';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { POPULAR_COCKTAILS, LOVED_MOCKTAILS } from '../constants';
import leftLeaf from '../assets/images/cocktail-left-leaf.png';
import rightLeaf from '../assets/images/cocktail-right-leaf.png';

gsap.registerPlugin(ScrollTrigger);

// gsap trigger 检索的元素是全局元素 如果命名重复了 会引发bug
onMounted(() => {
  gsap
    .timeline({
      scrollTrigger: {
        trigger: '.cocktail-section',
        start: 'top 30%',
        end: 'bottom bottom',
        scrub: true,
      },
    })
    .from('.cocktail-left-leaf', {
      x: -100,
      y: 100,
    })
    .from('.cocktail-right-leaf', {
      x: 100,
      y: 100,
    });
});
</script>

<style scoped lang="scss">
@use '../styles/section-common.scss' as *;
.cocktail-section {
  @extend .page-section;
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
  .cocktail-left-leaf,
  .cocktail-right-leaf {
    position: absolute;
    bottom: 0;
  }
  .cocktail-left-leaf {
    left: 0;
  }
  .cocktail-right-leaf {
    right: 0;
  }
}
@media (max-width: 768px) {
  .cocktail-section {
    .cocktail-rank {
      height: 100%;
      flex-direction: column;
      justify-content: space-between;
      padding: 30px 18px;
    }
    .cocktail-list {
      width: 100%;
      header {
        span {
          &:nth-child(1) {
            font-size: 20px;
          }
          &:nth-child(2) {
            font-size: 16px;
          }
        }
      }
      footer {
        font-size: 14px;
      }
    }
    .cocktail-left-leaf,
    .cocktail-right-leaf {
      width: 33vw;
      top: -80px;
      bottom: auto;
    }
  }
}
</style>
