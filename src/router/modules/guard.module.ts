import type { NavigationGuardNext, RouteLocationNormalized } from 'vue-router'
import { storeToRefs } from 'pinia'
import { useUserStore } from '@/stores/modules/user.store'
import { useRouteStore } from '@/stores/modules/route.store'
import { router } from '..'

export const createPermissionGuard = (
  to: RouteLocationNormalized,
  from: RouteLocationNormalized,
  next: NavigationGuardNext
) => {
  const { token, roles } = storeToRefs(useUserStore())
  const routeStore = useRouteStore()

  if (!routeStore.isInitAuthRoute) {
    routeStore.generateRoutes(roles.value)
    // return
  }

  console.log(Boolean(token.value), 'token.value')

  // if (router.hasRoute(to.name as string)) {
  //   if (to.name === 'Login') {
  //     if (token.value) {
  //       next({ path: '/', replace: true })
  //     } else {
  //       next()
  //     }
  //   } else {
  //     next()
  //   }
  // } else {
  //   next({ path: '/404', replace: true })
  // }
  if (!router.hasRoute(to.name as string)) {
    next({ path: '/404', replace: true })
  } else if (to.name === 'Login' && token.value) {
    next({ path: '/', replace: true })
  } else {
    next()
  }
}
