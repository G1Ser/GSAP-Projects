import type { RouteRecordRaw } from 'vue-router';
import { defineAsyncComponent } from 'vue';

const cocktailRouters: RouteRecordRaw[] = [
  {
    path: '/cocktail-website',
    name: 'cocktail-website',
    component: defineAsyncComponent(
      () => import('@/views/ProjectGSAP/CocktailWebsite/CocktailWebsite.vue'),
    ),
    meta: {
      title: 'Cocktail Website',
      png: 'cocktail.png',
    },
  },
];

export default cocktailRouters;
