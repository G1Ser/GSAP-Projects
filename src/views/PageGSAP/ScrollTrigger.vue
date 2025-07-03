<template>
  <div class="main-container">
    <div class="scroll-container">
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
        <div class="box box-color-purple"></div>
      </section>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
@use '@/styles/variable.scss' as *;
@include generate-color-boxes;
.scroll-container {
  display: flex;
  flex-direction: column;
  min-width: 720px;
  max-width: 1440px;
  height: 100%;
  overflow-y: auto;
}
.section {
  width: 100%;
  height: 100vh;
  padding: 20px;
  flex-shrink: 0;
}
.section-one {
  display: flex;
  flex-direction: column;
  gap: 20px;
  span {
    font-size: 16px;
    color: $gray;
  }
  a {
    color: $primary;
    text-decoration: none;
  }
}
</style>
