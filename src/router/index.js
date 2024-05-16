import { createRouter, createWebHistory } from 'vue-router';

import HomePage from '../views/HomePage.vue';
import NotFound from '../views/NotFound.vue';
import Explore from '../views/Explore.vue';
import Settings from '../views/Settings.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home-page',
      component: HomePage,
    },
    {
      path: '/explore',
      name: 'explore',
      component: Explore,
    },
    {
      path: '/settings',
      name: 'settings',
      component: Settings,
    },
    {
      path: '/:pathMatch(.*)*', // catch all 404
      component: NotFound,
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
