import type { NavigationGuardNext, RouteLocationNormalized, Router } from 'vue-router'
import { createPermissionGuard } from './guard.module'

export const initRouteGuard = (router: Router) => {
  router.beforeEach(
    (to: RouteLocationNormalized, from: RouteLocationNormalized, next: NavigationGuardNext) => {
      createPermissionGuard(to, from, next)
    }
  )

  // router.afterEach((to: RouteLocationNormalized, from: RouteLocationNormalized) => {
  //   console.log(to)
  //   console.log(from)
  // })
}
