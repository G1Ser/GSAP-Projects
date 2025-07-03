import { createRouter, createWebHistory } from 'vue-router';
import routes from './full-routers';
import { setupRouterGuards } from './router-guard';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

// 设置路由导航守卫
setupRouterGuards(router);

export default router;
