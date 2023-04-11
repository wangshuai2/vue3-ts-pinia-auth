import type { RouteLocationNormalized, NavigationGuardNext } from 'vue-router'
import { useRouteStore } from '@/stores/modules/route.store'
import { useUserStore } from '@/stores/modules/user.store'
import { storeToRefs } from 'pinia'

const whiteList: string[] = ['/', '/login', '/404']

export const createDynamicRouteGuard = (
  to: RouteLocationNormalized,
  from: RouteLocationNormalized,
  next: NavigationGuardNext
) => {
  const routeStore = useRouteStore()
  const { token, roles } = storeToRefs(useUserStore())

  // 如果已经初始化过路由，那么就不需要再次初始化
  if (!routeStore.isInitAuthRoute) {
    // 如果没有登录，那么就跳转到登录页面
    if (!token.value) {
      if (!whiteList.includes(to.path)) {
        next({ path: '/login' })
      } else {
        next({ ...to, replace: true })
      }

      return false
    }

    routeStore.generateRoutes(roles.value)
  }
  return true
}
