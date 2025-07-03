<template>
  <div class="main-container">
    <div class="controls">
      <div class="control-btn-group">
        <button @click="handlePlayPause">
          {{ isPlaying ? '暂停' : '播放' }}
        </button>
        <button @click="handleRestart">重置</button>
      </div>
      <div class="progress-container">
        <div class="progress-bar">
          <div class="progress-fill" :style="{ width: `${progress}%` }"></div>
        </div>
        <span class="progress-text">{{ Math.round(progress) }}%</span>
      </div>
    </div>
    <div class="box yellow-box" />
  </div>
</template>

<script lang="ts" setup>
import { gsap } from 'gsap';
import { onMounted, ref } from 'vue';

const progress = ref(0);
const isPlaying = ref(false);

const timeline = gsap.timeline({
  repeat: -1,
  repeatDelay: 1,
  yoyo: true,
  paused: true,
  onUpdate: () => {
    progress.value = timeline.progress() * 100;
  },
});

const handlePlayPause = () => {
  if (isPlaying.value) {
    timeline.pause();
    isPlaying.value = false;
  } else {
    timeline.play();
    isPlaying.value = true;
  }
};

const handleRestart = () => {
  timeline.restart();
  timeline.pause();
  isPlaying.value = false;
  progress.value = 0;
};

onMounted(() => {
  timeline.from('.yellow-box', {
    x: -250,
    duration: 2,
    ease: 'power2.inOut',
  });
  timeline.to('.yellow-box', {
    y: 250,
    rotate: 360,
    duration: 2,
  });
  timeline.to('.yellow-box', {
    x: 250,
    y: -250,
    duration: 2,
    borderRadius: '100%',
    ease: 'expo.inOut',
  });
});
</script>

<style lang="scss" scoped>
.main-container {
  flex-direction: column;
  gap: 40px;
}
.yellow-box {
  background-color: #f59e0b;
}
.controls {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
}
.control-btn-group {
  display: flex;
  gap: 12px;

  button {
    padding: 8px 16px;
    background-color: #3b82f6;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    font-size: 14px;

    &:hover {
      background-color: #2563eb;
    }
  }
}
.progress-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 250px;
}
.progress-bar {
  width: 200px;
  height: 10px;
  background-color: #fff;
  border-radius: 5px;
  overflow: hidden;
}
.progress-fill {
  height: 100%;
  background-color: #3b82f6;
  border-radius: 5px;
  transition: width 0.1s;
}
.progress-text {
  font-size: 14px;
  color: #6b7280;
}
</style>
