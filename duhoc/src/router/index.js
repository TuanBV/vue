import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('layouts/MainLayout.vue'),
      children: [
        {
          path: '',
          name: 'home',
          component: () => import('views/HomeView.vue')
        },
        {
          path: 'new-featured',
          name: 'new-featured',
          component: () => import('views/NewFeaturedView.vue')
        },
        {
          path: 'blog',
          name: 'blog',
          component: () => import('views/BlogView.vue')
        },
        {
          path: 'product',
          name: 'product',
          component: () => import('views/ProductView.vue')
        }
      ]
    },
    {
      path: '/:catchAll(.*)',
      name: 'Not Found',
      component: () => import('components/NotFound.vue')
    }
  ]
})

export default router
