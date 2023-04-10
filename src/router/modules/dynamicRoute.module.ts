import type { RouteLocationNormalized, NavigationGuardNext } from 'vue-router'
import { useRouteStore } from '@/stores/modules/route.store'
import { useUserStore } from '@/stores/modules/user.store'
import { router } from '..'

export const createDynamicRouteGuard = (
  to: RouteLocationNormalized,
  from: RouteLocationNormalized,
  next: NavigationGuardNext
) => {
  const routeStore = useRouteStore()
  const userStore = useUserStore()

  if (!routeStore.routesList.length) {
    routeStore.generateRoutes(userStore.roles)
    // router.addRoute('Root', ...routeStore.routesList)
    next({ ...to, replace: true })
  } else {
    next()
  }
}
