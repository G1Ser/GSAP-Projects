<template>
  <div class="art-section">
    <h2 class="modern-negra-font will-fade">The ART</h2>
    <div class="content will-fade">
      <ul>
        <template v-for="item in GOOD_LISTS" :key="item.id">
          <li>
            <img :src="Check" alt="" />
            <span>{{ item.content }}</span>
          </li>
        </template>
      </ul>
      <ul>
        <template v-for="item in FEATURE_LISTS" :key="item.id">
          <li>
            <img :src="Check" alt="" />
            <span>{{ item.content }}</span>
          </li>
        </template>
      </ul>
    </div>
    <div class="image-container">
      <img :src="UnderImg" class="mask-img" />
    </div>
    <div class="masked-container">
      <h2 class="modern-negra-font will-fade">Sip-Worthy Perfection</h2>
      <div class="masked-content description">
        <h3>Made with Craft, Poured with Passion</h3>
        <p>This isn’t just a drink. It’s a carefully crafted moment made just for you.</p>
      </div>
    </div>
    <img :src="Cup1" class="mask-img1 masked-content" />
    <img :src="Cup2" class="mask-img2 masked-content" />
  </div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue';
import gsap from 'gsap';
import { GOOD_LISTS, FEATURE_LISTS } from '../constants';
import Check from '../assets/images/check.png';
import UnderImg from '../assets/images/under-img.jpg';
import Cup1 from '../assets/images/cup-1.png';
import Cup2 from '../assets/images/cup-2.png';

onMounted(() => {
  const maskTimeLine = gsap.timeline({
    scrollTrigger: {
      trigger: '.art-section',
      start: 'top 20%',
      end: 'bottom center',
      scrub: 1.5,
      pin: true,
    },
  });
  maskTimeLine
    .to('.will-fade', {
      opacity: 0,
      stagger: 0.2,
      ease: 'power1.inOut',
    })
    .to('.mask-img', {
      maskSize: '400%',
    })
    .to('.masked-content', {
      opacity: 1,
      duration: 1,
      ease: 'power1.inOut',
    });
});
</script>

<style scoped lang="scss">
@use '../styles/section-common.scss' as *;
.art-section {
  position: relative;
  @extend .page-section;
  padding: 120px 80px;
  background: radial-gradient(circle at center, #434343 0%, #000 50%, transparent 100%);
  h2 {
    text-align: center;
    font-size: 330px;
    line-height: 1;
    letter-spacing: -2%;
    color: #505050;
  }
  .content {
    position: absolute;
    left: 0;
    top: 475px;
    width: 100%;
    padding: 120px 80px;
    display: flex;
    justify-content: space-between;
    ul {
      display: flex;
      flex-direction: column;
      gap: 14px;
    }
    li {
      display: flex;
      align-items: center;
      gap: 10px;
      font-size: 18px;
    }
  }
  .image-container {
    text-align: center;
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    img {
      height: 70vh;
      object-fit: contain;
      border-radius: 50px;
    }
  }
  .mask-img {
    mask-image: url('../assets/images/mask-img.png');
    mask-repeat: no-repeat;
    mask-position: center;
    mask-size: 50%;
  }
  .masked-container {
    position: absolute;
    left: 0;
    top: 60vh;
    width: 100%;
    text-align: center;
    h2 {
      color: $white;
      font-size: 48px;
      line-height: 100%;
    }
    .description {
      display: flex;
      flex-direction: column;
      gap: 20px;
      margin-top: 100px;
      opacity: 0;
      h3 {
        font-family: 'Times New Roman';
        color: $white;
        font-size: 48px;
        letter-spacing: 1px;
      }
      p {
        font-size: 18px;
        line-height: 30px;
        color: #efefef;
      }
    }
  }
  .mask-img1,
  .mask-img2 {
    position: absolute;
    opacity: 0;
  }
  .mask-img1 {
    left: -50px;
    top: 0;
    scale: 1.2;
  }
  .mask-img2 {
    right: -50px;
    bottom: 150px;
  }
}
@media (max-width: 768px) {
  .art-section {
    padding: 30px 18px;
    h2 {
      font-size: 20vw;
    }
    .content {
      flex-direction: column;
      top: 320px;
      gap: 30px;
      padding: 30px 18px;
      ul {
        &:nth-child(2) {
          margin-left: 120px;
        }
      }
      li {
        font-size: 16px;
      }
    }
    .image-container {
      height: 40vh;
      img {
        width: 100%;
        height: 100%;
        object-fit: contain;
      }
    }
    .mask-img {
      mask-size: 70%;
    }
    .masked-container {
      top: 35vh;
      h2 {
        font-size: 36px;
      }
      .description {
        margin-top: 0;
        h3 {
          font-size: 36px;
        }
        p {
          font-size: 16px;
        }
      }
    }
    .mask-img1,
    .mask-img2 {
      width: 40vw;
      top: auto;
      bottom: 150px;
    }
  }
}
</style>
