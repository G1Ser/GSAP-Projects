<template>
  <div class="main-container">
    <div class="scroll-container" ref="scrollContainer">
      <section class="section section-one">
        <h1>GSAP Scroll Trigger</h1>
        <span>
          Gsap Scroll Trigger is a plugin that allows you to create animaytions that are triggered
          by the scroll position of the page.
        </span>
        <span>
          With ScrollTrigger, you can define varioous actions to be triggered at specific scroll
          points, such as starting or ending an animation, scrubbing through animations as the user
          scrolls, pinning elements to the screen, and more.
        </span>
        <span>
          Read more about the
          <a href="https://gsap.com/docs/v3/Plugins/ScrollTrigger/">gsap scroll trigger</a>
          method.
        </span>
      </section>
      <section class="section section-two">
        <div class="box box-color-purple" />
        <div class="triangle triangle-color-green" />
        <div class="circle circle-color-indigo" />
      </section>
    </div>
  </div>
</template>

<script setup lang="ts">
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import { onMounted, ref } from 'vue';

gsap.registerPlugin(ScrollTrigger);
const scrollContainer = ref<HTMLElement | null>(null);

onMounted(() => {
  /**
   * 动画配置数组
   * @description ScrollTrigger动画配置不能和yoyo repeat一起使用会失效，还需指定scroller容器。
   * @author chauncey
   * @date 2025-07-03
   */
  const animations = [
    {
      selector: '.box',
      properties: {
        x: 720,
        y: -250,
        rotate: 360,
      },
    },
    {
      selector: '.triangle',
      properties: {
        x: 720,
        rotate: 360,
        scale: 1.5,
      },
    },
    {
      selector: '.circle',
      properties: {
        x: 720,
        y: 250,
        rotate: 360,
      },
    },
  ];

  // 统一创建动画
  animations.forEach(({ selector, properties }) => {
    gsap.to(selector, {
      ...properties,
      duration: 2,
      scrollTrigger: {
        trigger: selector,
        scroller: scrollContainer.value,
        start: 'bottom bottom',
        end: 'top 20%',
        scrub: 1,
      },
      ease: 'power1.inOut',
    });
  });
});
</script>

<style scoped lang="scss">
@use '@/styles/variable.scss' as *;
@include generate-color;

.scroll-container {
  display: flex;
  flex-direction: column;
  max-width: 1440px;
  height: 100vh;
  overflow-y: auto;
  overflow-x: hidden;
}

.section {
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 100%;
  height: 100vh;
  padding: 40px;
  flex-shrink: 0;
}

.section-one {
  justify-content: center;
  span {
    font-size: 16px;
    color: $gray;
    line-height: 1.6;
    margin-bottom: 10px;
  }
  a {
    color: $primary;
    text-decoration: none;
    &:hover {
      text-decoration: underline;
    }
  }
}

.section-two {
  gap: 60px;
}
</style>
