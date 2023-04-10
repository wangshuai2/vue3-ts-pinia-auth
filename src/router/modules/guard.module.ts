import type { NavigationGuardNext, RouteLocationNormalized } from 'vue-router'
import { router } from '..'
import { storeToRefs } from 'pinia'
import { useUserStore } from '@/stores/modules/user.store'
import { useRouteStore } from '@/stores/modules/route.store'

// const whiteList = ['/', '/login', '/404']

export const createPermissionGuard = async (
  to: RouteLocationNormalized,
  from: RouteLocationNormalized,
  next: NavigationGuardNext
) => {
  const { token, roles } = storeToRefs(useUserStore())
  console.log(to)
  console.log(from)
  console.log(token.value, roles.value)
  console.log(router.getRoutes())

  const routeStore = useRouteStore()
  const userStore = storeToRefs(useUserStore())

  routeStore.generateRoutes(userStore.roles.value)
  if (to.name === 'Login') {
    if (token.value) {
      next({ path: '/signed' })
    } else {
      next()
    }
  } else {
    next()
  }
}
