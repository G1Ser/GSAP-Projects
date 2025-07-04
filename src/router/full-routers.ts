import type { RouteRecordRaw } from 'vue-router';
import Home from '@/views/Home.vue';
import fullRouters from './project-routers';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'home',
    component: Home,
    meta: {
      title: 'GSAP Projects',
    },
  },
  ...fullRouters,
];

export default routes;
