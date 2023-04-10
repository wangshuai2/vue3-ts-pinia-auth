import type { NavigationGuardNext, RouteLocationNormalized, Router } from 'vue-router'
import { createPermissionGuard } from './guard.module'

export const initRouteGuard = (router: Router) => {
  router.beforeEach(
    async (
      to: RouteLocationNormalized,
      from: RouteLocationNormalized,
      next: NavigationGuardNext
    ) => {
      await createPermissionGuard(to, from, next)
    }
  )

  router.afterEach((to: RouteLocationNormalized, from: RouteLocationNormalized) => {
    console.log(to)
    console.log(from)
  })
}
