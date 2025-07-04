import type { RouteRecordRaw } from 'vue-router';
import { defineAsyncComponent } from 'vue';

const pageRouters: RouteRecordRaw[] = [
  {
    path: '/quick-start',
    name: 'quick-start',
    component: defineAsyncComponent(() => import('@/views/PageGSAP/QuickStart.vue')),
    meta: {
      title: 'GSAP Quick Start',
      png: 'quick-start.png',
    },
  },
  {
    path: '/timeline',
    name: 'timeline',
    component: defineAsyncComponent(() => import('@/views/PageGSAP/TimeLine.vue')),
    meta: {
      title: 'GSAP Timeline',
      png: 'timeline.png',
    },
  },
  {
    path: '/stagger',
    name: 'stagger',
    component: defineAsyncComponent(() => import('@/views/PageGSAP/Stagger.vue')),
    meta: {
      title: 'GSAP Stagger',
      png: 'stagger.png',
    },
  },
  {
    path: '/scroll-trigger',
    name: 'scroll-trigger',
    component: defineAsyncComponent(() => import('@/views/PageGSAP/ScrollTrigger.vue')),
    meta: {
      title: 'GSAP Scroll Trigger',
      png: 'scroll-trigger.png',
    },
  },
];

export default pageRouters;
