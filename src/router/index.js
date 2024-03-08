import { createRouter, createWebHistory } from 'vue-router';

import HomePage from '../views/HomePage.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home-page',
      component: HomePage,
    },
    // {
    //   path: '/:pathMatch(.*)*',
    //   component: HomePage,
    //   beforeEnter: (to, from, next) => {
    //     let cookieValue = to.fullPath.substring(1);
    //     let expDate = new Date();
    //     expDate.setMonth(expDate.getMonth() + 1);
    //     document.cookie =
    //       'obb_ac=' +
    //       cookieValue +
    //       ';domain=.ohbabygames.com;expires=' +
    //       expDate +
    //       ';path=/';
    //     next();
    //   },
    // },
  ],
});

export default router;
