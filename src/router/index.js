import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/CGV',
      name: 'CGV',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/CGView.vue')
    },
    {
      path: '/MentionsLégales',
      name: 'MentionsLégales',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/MLViews.vue')
    },
    {
      path: '/Politiquedeconfidentialité',
      name: 'PC',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/PcViews.vue')
    }
  ],
  base: 'https://clarallbt.github.io/KlaDev/'
})

export default router
