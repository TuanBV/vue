const routes = [
  {
    path: '/',
    name: 'layout',
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
        path: 'product/:type1?/:type2?/:type3?',
        name: 'product',
        component: () => import('views/ProductView.vue')
      },
      {
        path: 'cart',
        name: 'cart',
        component: () => import('views/CartView.vue')
      }
    ]
  },
  {
    path: '/sign-in',
    name: 'sign-in',
    component: () => import('components/account/SignInView.vue')
  },
  {
    path: '/forgot-password',
    name: 'forgot-password',
    component: () => import('components/account/ForgotPasswordView.vue')
  },
  {
    path: '/sign-up',
    name: 'sign-up',
    component: () => import('components/account/SignUpView.vue')
  },
  {
    path: '/:catchAll(.*)',
    name: 'Not Found',
    component: () => import('components/page-error/NotFound.vue')
  }
]
export default routes
