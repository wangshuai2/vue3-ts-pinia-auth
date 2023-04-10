import { createRouter, createWebHistory } from 'vue-router'
import { BASE_ROUTES } from './routes/bases.routes'
import { menuToRoutes } from '@/utils/menuToRoutes'
import { PERMISSION_ROUTES } from './routes/permission.routes'
import type { App } from 'vue'
import { initRouteGuard } from './modules'

console.log(menuToRoutes(BASE_ROUTES))
console.log(menuToRoutes(PERMISSION_ROUTES))

export const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: menuToRoutes(BASE_ROUTES)
})

export async function setupRouter(app: App) {
  app.use(router)
  initRouteGuard(router)
  await router.isReady()
}
