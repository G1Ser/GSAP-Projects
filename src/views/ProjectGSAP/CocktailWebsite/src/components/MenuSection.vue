<template>
  <div class="menu-section">
    <img :src="LeftLeaf" class="left-leaf" />
    <img :src="RightLeaf" class="right-leaf" />
    <div class="menu-container">
      <nav class="menu-container__nav">
        <ul>
          <template v-for="item in COCKTAIL_MENU" :key="item.id">
            <li
              :class="activeId === item.id ? 'active' : ''"
              class="modern-negra-font"
              @click="toCocktail(item.id)"
            >
              {{ item.name }}
            </li>
          </template>
        </ul>
      </nav>
      <main class="menu-container__main">
        <section class="slider">
          <div class="arrow-container" @click="toCocktail(preCocktail.id)">
            <span class="modern-negra-font">
              {{ preCocktail.name.split(' ')[0] }}<br />
              {{ preCocktail.name.split(' ')[1] }}
            </span>
            <img :src="RightArrow" alt="" />
          </div>
          <img :src="currentCocktail?.image" class="cocktail-img" />
          <div class="arrow-container arrow-container--right" @click="toCocktail(nextCocktail.id)">
            <span class="modern-negra-font">
              {{ nextCocktail.name.split(' ')[0] }}<br />
              {{ nextCocktail.name.split(' ')[1] }}
            </span>
            <img :src="LeftArrow" alt="" />
          </div>
        </section>
        <div class="cocktail-name">
          Recipes for:
          <p class="modern-negra-font" v-if="!isMobile()">
            {{ currentCocktail.name.split(' ')[0] }}<br />{{ currentCocktail.name.split(' ')[1] }}
          </p>
          <p class="modern-negra-font" v-else>
            {{ currentCocktail.name }}
          </p>
        </div>
        <div class="cocktail-description">
          <p>{{ currentCocktail.title }}</p>
          <p>{{ currentCocktail.description }}</p>
        </div>
      </main>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted } from 'vue';
import { gsap } from 'gsap';
import { isMobile } from '@/utils';
import { COCKTAIL_MENU } from '../constants';
import LeftArrow from '../assets/images/left-arrow.png';
import RightArrow from '../assets/images/right-arrow.png';
import LeftLeaf from '../assets/images/slider-left-leaf.png';
import RightLeaf from '../assets/images/slider-right-leaf.png';

const activeId = ref(COCKTAIL_MENU[0].id);

const cocktails = computed(() => {
  const currentIndex = COCKTAIL_MENU.findIndex((item) => item.id === activeId.value);
  const length = COCKTAIL_MENU.length;
  const prevIndex = (currentIndex - 1 + length) % length;
  const nextIndex = (currentIndex + 1) % length;

  return {
    prev: COCKTAIL_MENU[prevIndex],
    current: COCKTAIL_MENU[currentIndex],
    next: COCKTAIL_MENU[nextIndex],
  };
});

const currentCocktail = computed(() => cocktails.value.current);
const preCocktail = computed(() => cocktails.value.prev);
const nextCocktail = computed(() => cocktails.value.next);
const toCocktail = (id: number) => {
  const xPercent = id > activeId.value ? -100 : 100;
  activeId.value = id;
  gsap.fromTo('.cocktail-name p', { opacity: 0 }, { opacity: 1, duration: 1 });
  gsap.fromTo(
    '.cocktail-img',
    { opacity: 0, xPercent },
    { opacity: 1, xPercent: 0, duration: 1, ease: 'power1.inOut' },
  );
  gsap.fromTo(
    '.cocktail-description p',
    { opacity: 0, yPercent: 100 },
    { opacity: 1, yPercent: 0, duration: 1, ease: 'power1.inOut' },
  );
};
onMounted(() => {
  const start = isMobile() ? 'top 10%' : 'top 50%';
  const end = isMobile() ? 'bottom 90%' : 'top top';
  gsap
    .timeline({
      scrollTrigger: {
        trigger: '.menu-section',
        start,
        end,
        scrub: true,
      },
    })
    .fromTo(
      '.left-leaf',
      {
        xPercent: -100,
        yPercent: 100,
        opacity: 0,
      },
      {
        xPercent: 0,
        yPercent: 0,
        opacity: 1,
        duration: 1,
      },
      0,
    )
    .fromTo(
      '.right-leaf',
      {
        xPercent: 100,
        yPercent: -100,
        opacity: 0,
      },
      {
        xPercent: 0,
        yPercent: 0,
        opacity: 1,
        duration: 1,
      },
      0,
    );
});
</script>

<style scoped lang="scss">
@use '../styles/section-common.scss' as *;
$high-light: #e7d393;
.menu-section {
  @extend .page-section;
  padding: 120px 80px;
  background: radial-gradient(circle at center, #434343 0%, #000 50%, transparent 100%);
}
.menu-container {
  display: flex;
  flex-direction: column;
  gap: 32px;
  &__nav ul {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 60px;
    width: 100%;
    li {
      padding: 5px 15px;
      font-size: 32px;
      color: rgba($white, 0.5);
      border-bottom: 1px solid rgba($white, 0.5);
      cursor: pointer;
      &.active {
        color: $white;
        border-bottom: 1px solid $white;
      }
    }
  }
  &__main {
    position: relative;
    .slider {
      display: flex;
      justify-content: space-between;
      align-items: center;
      width: 100%;
    }
    .arrow-container {
      display: flex;
      flex-direction: column;
      font-size: 32px;
      gap: 10px;
      cursor: pointer;
      &--right {
        align-items: flex-end;
        span {
          text-align: right;
        }
      }
      img {
        width: 38px;
      }
      span {
        line-height: 30px;
        &:hover {
          color: $high-light;
        }
      }
    }
    .cocktail-img {
      height: 70vh;
    }
    .cocktail-name,
    .cocktail-description {
      position: absolute;
    }
    .cocktail-name {
      left: 300px;
      bottom: 40px;
      font-size: 16px;
      line-height: 40px;
      color: $white;
      p {
        font-size: 50px;
        line-height: 46px;
        color: $high-light;
      }
    }
    .cocktail-description {
      width: 440px;
      left: calc(50vw + 150px);
      bottom: 40px;
      p {
        color: $white;
        &:nth-child(1) {
          font-family: 'Times New Roman', Times, serif;
          font-size: 48px;
          line-height: 1.25;
          letter-spacing: 1px;
          margin-bottom: 20px;
        }
        &:nth-child(2) {
          font-family: 'Consolas', sans-serif;
          font-size: 18px;
          line-height: 30px;
          color: $white;
        }
      }
    }
  }
}
.left-leaf,
.right-leaf {
  position: absolute;
}
.left-leaf {
  left: 0;
  bottom: 0;
}
.right-leaf {
  top: 0;
  right: 0;
}
@media (max-width: 768px) {
  .menu-section {
    padding: 120px 18px;
  }
  .menu-container {
    &__nav ul {
      gap: 20px;
      li {
        font-size: 20px;
      }
    }
    &__main {
      height: auto;
      display: flex;
      flex-direction: column;
      .slider {
        position: relative;
        height: 35vh;
      }
      .arrow-container {
        z-index: 100;
        span {
          display: none;
        }
      }
      .cocktail-img {
        position: absolute;
        left: 50%;
        transform: translateX(-50%);
        height: 100%;
      }
      .cocktail-name,
      .cocktail-description {
        position: relative;
        left: auto;
        bottom: auto;
        width: 100%;
      }
      .cocktail-name {
        font-size: 16px;
        line-height: 16px;
        p {
          font-size: 30px;
        }
      }
      .cocktail-description {
        p {
          &:nth-child(1) {
            font-size: 36px;
            margin-bottom: 0;
          }
          &:nth-child(2) {
            font-size: 16px;
            line-height: 26px;
          }
        }
      }
    }
  }
  .left-leaf,
  .right-leaf {
    width: 20vw;
  }
}
</style>
