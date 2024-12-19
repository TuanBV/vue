import { createRouter, createWebHistory } from 'vue-router'
import routes from 'router/routes.js'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
  scrollBehavior() {
    return { left: 0, top: 0, behavior: 'smooth' }
  }
})

/**
 * Handle check authentication every time page change
 */
router.beforeEach(() => {
  return true
})

export default router
