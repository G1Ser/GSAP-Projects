import type { RouteRecordRaw } from 'vue-router';
import Home from '@/views/Home.vue';
import { defineAsyncComponent } from 'vue';

const routes: RouteRecordRaw[] = [
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
];

export default routes;
