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
        <div class="rate-subscribe">
          <div class="rate">
            <p><span>4.5</span>/5</p>
            <p>More than +12000 customers</p>
          </div>
          <div class="subscribe">
            <div
              class="profile-container"
              @mouseenter="handleMouseEnter"
              @mouseleave="handleMouseLeave"
            >
              <template v-for="img in PROFILE_IMAGES" :key="img">
                <img :src="img" alt="" class="profile-img" />
              </template>
            </div>
          </div>
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
import { onMounted } from 'vue';
import { gsap } from 'gsap';
import { SplitText } from 'gsap/all';
import { TOP_GRID_IMAGES, BTM_GRID_IMAGES, PROFILE_IMAGES } from '../constants';

const handleMouseEnter = () => {
  const profileImgs = document.querySelectorAll('.profile-img');
  gsap.to(profileImgs, {
    x: (i) => i * 20,
    scale: 1.05,
    stagger: 0.05,
    duration: 0.4,
    ease: 'power2.out',
  });
};

const handleMouseLeave = () => {
  const profileImgs = document.querySelectorAll('.profile-img');
  gsap.to(profileImgs, {
    x: 0,
    scale: 1,
    stagger: 0.03,
    duration: 0.3,
    ease: 'power2.out',
  });
};

onMounted(() => {
  const contentSplitText = new SplitText('.left h2', { type: 'words' });
  const scrollTimeLine = gsap.timeline({
    scrollTrigger: {
      trigger: '.about-section',
      start: 'top center',
    },
  });
  scrollTimeLine
    .from(contentSplitText.words, {
      opacity: 0,
      duration: 1,
      yPercent: 100,
      ease: 'expo.out',
      stagger: 0.02,
    })
    // 第二个动画相较于words动画提前0.5s播放
    .from(
      '.top-grid div, .bottom-grid div',
      {
        opacity: 0,
        duration: 1,
        ease: 'power1.inOut',
        stagger: 0.04,
      },
      '-=0.5',
    );
});
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
    .rate-subscribe {
      display: flex;
      align-items: center;
    }
    .rate,
    .subscribe {
      flex: 1;
    }
    .rate {
      border-right: 2px solid #565656;
      p {
        font-size: 14px;
        &:nth-child(1) {
          font-size: 30px;
          font-weight: bold;
          margin-bottom: 10px;
        }
      }
      span {
        font-size: 48px;
        color: #e7d393;
      }
    }
    .subscribe {
      display: flex;
      justify-content: center;
      .profile-container {
        display: flex;
        align-items: center;
        height: 80px;
        padding: 0 20px;
        background: linear-gradient(to bottom, #313131, #0f0f0f);
        border-radius: 9999px;
        transition: box-shadow 0.3s ease;

        &:hover {
          box-shadow: 0 0 15px rgba(231, 211, 147, 0.5);
        }

        .profile-img {
          margin-right: -15px;
          border-radius: 50%;
          border: 2px solid transparent;
          transition: border-color 0.3s ease;

          &:last-child {
            margin-right: 0;
          }

          &:hover {
            border-color: #e7d393;
          }
        }
      }
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
@media (max-width: 768px) {
  .about-section {
    height: calc(240vh + 20px);
    padding: 30px 18px;
    .left,
    .right {
      width: 100%;
      height: auto;
    }
    .left h2 {
      font-size: 48px;
    }
    .right {
      gap: 20px;
      .sub-content {
        font-size: 16px;
        line-height: 28px;
      }
      .rate {
        border: none;
      }
      .subscribe {
        border-left: 2px solid #565656;
        .profile-container {
          height: 60px;
          .profile-img {
            width: 35px;
            height: 35px;
          }
        }
      }
    }
    .image-container {
      .top-grid,
      .bottom-grid {
        grid-template-columns: repeat(1, 1fr);

        div {
          grid-column: span 1;
        }
      }
    }
  }
}
</style>
