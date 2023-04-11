import type { NavigationGuardNext, RouteLocationNormalized } from 'vue-router'
import { storeToRefs } from 'pinia'
import { useUserStore } from '@/stores/modules/user.store'
import { useRouteStore } from '@/stores/modules/route.store'

let refreshInitFlag = true

export const createPermissionGuard = async (
  to: RouteLocationNormalized,
  from: RouteLocationNormalized,
  next: NavigationGuardNext
) => {
  const { token, roles } = storeToRefs(useUserStore())
  const routeStore = useRouteStore()

  if (!token.value) {
    if (to.name === 'Login') {
      next()
    } else {
      next({ path: '/login', replace: true })
    }
  } else {
    if (refreshInitFlag) {
      await routeStore.generateRoutes(roles.value)
      next({ ...to, replace: true })
      refreshInitFlag = false
    } else {
      next()
    }
  }
}
