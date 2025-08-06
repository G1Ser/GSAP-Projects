<template>
  <div class="contact-section">
    <div class="title modern-negra-font">Where to Find Us</div>
    <div class="part-content" v-for="item in CONTACT_CONTENT" :key="item.id">
      {{ item.title }}
      <p v-for="content in item.content" :key="content.id">
        {{ content.content }}
      </p>
    </div>
    <div class="part-content">
      Socials
      <div class="img-container">
        <template v-for="img in SOCIAL_IMAGES" :key="img">
          <img :src="img" />
        </template>
      </div>
    </div>
    <img :src="LeftLeaf" class="left-leaf" />
    <img :src="RightLeaf" class="right-leaf" />
    <img :src="Drinks" class="drinks" />
  </div>
</template>

<script setup lang="ts">
import { gsap } from 'gsap';
import { SplitText } from 'gsap/all';
import { onMounted } from 'vue';
import { CONTACT_CONTENT, SOCIAL_IMAGES } from '../constants';
import LeftLeaf from '../assets/images/footer-left-leaf.png';
import RightLeaf from '../assets/images/footer-right-leaf.png';
import Drinks from '../assets/images/footer-drinks.png';
onMounted(() => {
  const titleSplit = new SplitText('.title', { type: 'words' });
  const timeline = gsap.timeline({
    scrollTrigger: {
      trigger: '.contact-section',
      start: 'top center',
    },
  });
  timeline
    .from(titleSplit.words, {
      opacity: 0,
      yPercent: 100,
      stagger: 0.02,
    })
    .from('.part-content', {
      opacity: 0,
      yPercent: 100,
      stagger: 0.02,
    })
    .from(
      '.left-leaf',
      {
        xPercent: -100,
        yPercent: 100,
        opacity: 0,
      },
      '+=0.01',
    )
    .from(
      '.right-leaf',
      {
        xPercent: 100,
        yPercent: -100,
        opacity: 0,
      },
      '<',
    ) // <表示同时开始
    .from(
      '.drinks',
      {
        xPercent: 100,
        opacity: 0,
      },
      '<',
    );
});
</script>

<style scoped lang="scss">
@use '../styles/section-common.scss' as *;
.contact-section {
  display: flex;
  flex-direction: column;
  gap: 50px;
  align-items: center;
  @extend .page-section;
  padding: 120px 80px;
  background: radial-gradient(circle at center, #434343 0%, #000 50%, transparent 100%);
}
.title {
  font-size: 90px;
}
.part-content {
  font-family: 'Times New Roman', Times, serif;
  font-size: 18px;
  text-align: center;
  p {
    font-size: 30px;
    line-height: 1.25;
    &:nth-child(1) {
      margin-top: 12px;
    }
  }
  .img-container {
    display: flex;
    gap: 20px;
    margin-top: 12px;
    img {
      cursor: pointer;
      transition: all 0.3s ease;
      &:hover {
        transform: scale(1.1);
        filter: brightness(1.5) drop-shadow(0 0 8px rgba(231, 211, 147, 0.7));
      }
    }
  }
}
.left-leaf,
.right-leaf,
.drinks {
  position: absolute;
}
.left-leaf {
  left: 0;
  bottom: 0;
}
.right-leaf {
  right: 0;
  top: 0;
}
.drinks {
  right: 0;
  bottom: 0;
}
@media (max-width: 768px) {
  .contact-section {
    padding: 120px 18px;
  }
  .title {
    font-size: 48px;
  }
  .part-content {
    font-size: 14px;
    p {
      font-size: 24px;
    }
    .img-container img {
      width: 24px;
    }
  }
  .left-leaf,
  .right-leaf,
  .drinks {
    width: 35vw;
  }
}
</style>
