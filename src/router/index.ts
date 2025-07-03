import { createRouter, createWebHistory } from 'vue-router';
import Home from '@/views/Home.vue';
import { defineAsyncComponent } from 'vue';
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
      meta: {
        title: 'GSAP Projects',
      },
    },
    {
      path: '/quick-start',
      name: 'quick-start',
      component: defineAsyncComponent(() => import('@/views/QuickStart.vue')),
      meta: {
        title: 'GSAP Quick Start',
        png: 'quick-start.png',
      },
    },
    {
      path: '/timeline',
      name: 'timeline',
      component: defineAsyncComponent(() => import('@/views/TimeLine.vue')),
      meta: {
        title: 'GSAP Timeline',
        png: 'timeline.png',
      },
    },
    {
      path: '/stagger',
      name: 'stagger',
      component: defineAsyncComponent(() => import('@/views/Stagger.vue')),
      meta: {
        title: 'GSAP Stagger',
        png: 'stagger.png',
      },
    },
  ],
});

// 全局导航守卫，根据路由的meta.title设置页面标题
router.beforeEach((to, from, next) => {
  // 如果路由有定义meta.title，则设置页面标题
  if (to.meta.title) {
    document.title = to.meta.title as string;
  }
  next();
});

export default router;
