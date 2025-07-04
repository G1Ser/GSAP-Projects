<template>
  <section class="hero">
    <h1 class="modern-negra-font">MOJITO</h1>
    <img :src="leftLeaf" alt="left-leaf" class="left-leaf" />
    <img :src="rightLeaf" alt="right-leaf" class="right-leaf" />
    <p class="description description--left">Cool. Crisp. Classic.</p>
    <p class="subtitle modern-negra-font">
      Sip the Spirit <br />
      of Summer
    </p>
    <div class="description-container">
      <p class="description">
        Every cocktail on our menu is a blend of premium ingredients, creative flair, and timeless
        recipes - designed to delight your senses.
      </p>
      <p class="description">View cocktails</p>
    </div>
  </section>
</template>

<script setup lang="ts">
import leftLeaf from '../images/hero-left-leaf.png';
import rightLeaf from '../images/hero-right-leaf.png';
</script>

<style scoped lang="scss">
.hero {
  display: flow-root; // 解决父容器外边距塌陷
  position: relative;
  width: 100%;
  height: 927px;
  border-radius: 16px 16px 0 0;
  overflow: hidden;
  background: {
    image: url('../images/noise.png');
    size: cover;
    position: center;
    repeat: no-repeat;
  }
  h1 {
    font-size: 330px;
    text-align: center;
    margin-top: 146px;
  }
  .left-leaf,
  .right-leaf {
    position: absolute;
  }
  .left-leaf {
    left: 0;
    top: 214px;
  }
  .right-leaf {
    right: 0;
    top: 0;
  }
  .description {
    color: $white;
    font-size: 18px;
    &--left {
      position: absolute;
      left: 80px;
      top: 727px;
      font-size: 16px;
    }
  }
  .description-container {
    display: flex;
    flex-direction: column;
    gap: 12px;
    position: absolute;
    right: 80px;
    top: 703px;
    width: 292px;
    line-height: 28px;
  }
  .subtitle {
    position: absolute;
    left: 80px;
    top: 763px;
    color: #e7d393;
    font-size: 50px;
  }
}

@media (max-width: 768px) {
  .hero {
    height: 783px;
    h1 {
      font-size: 20vw;
      margin-top: 170px;
    }
    .left-leaf,
    .right-leaf {
      width: 33vw;
    }
    .left-leaf {
      left: 0;
      top: auto; // 重置通用样式中的 top 值
      bottom: -80px;
    }
    .right-leaf {
      top: auto;
      bottom: 180px;
    }
    .subtitle,
    .description--left {
      display: none;
    }
    .description-container {
      top: 250px;
      left: 0;
      width: 100%;
      padding: 0 18px;
      text-align: center;
    }
  }
}
</style>
