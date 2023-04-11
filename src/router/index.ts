import { createRouter, createWebHistory } from 'vue-router'
import { BASE_ROUTES } from './routes/bases.routes'
import type { App } from 'vue'
import { initRouteGuard } from './modules'

export const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: BASE_ROUTES
})

export async function setupRouter(app: App) {
  initRouteGuard(router)
  app.use(router)
  await router.isReady()
}
