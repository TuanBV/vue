import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: () => import('../layouts/DefaultView.vue'),
      children: [
        {
          path: '',
          name: 'home',
          component: () => import('../views/HomeView.vue'),
        },
        {
          path: 'recruit',
          name: 'recruit',
          component: () => import('../views/RecruitView.vue'),
        },
        {
          path: 'about',
          name: 'about',
          component: () => import('../views/AboutView.vue'),
        },
        {
          path: 'contact',
          name: 'contact',
          component: () => import('../views/ContactView.vue'),
        },
        {
          path: 'work',
          name: 'work',
          component: () => import('../views/WorkView.vue'),
        },
        {
          path: 'product-list',
          name: 'product-list',
          component: () => import('../views/ProductListView.vue'),
        },
      ]
    },
    {
      path: '/error',
      name: 'error',
      component: () => import('../layouts/ErrorView.vue'),
    },
    {
      path: '/admin',
      component: () => import('../layouts/AdminDefaultView.vue'),
      children: [
        {
          path: '',
          name: 'login',
          component: () => import('../views/auth/LoginView.vue'),
        },
        {
          path: 'register',
          name: 'register',
          component: () => import('../views/auth/RegisterView.vue'),
        },
        {
          path: 'reset-password',
          name: 'reset-password',
          component: () => import('../views/auth/ResetPasswordView.vue'),
        },
      ]
    },
    {
      path: '/404',
      name: 'page-not-found',
      component: () => import('../components/not-found/PageNotFound.vue'),
    }
  ]
})

export default router
