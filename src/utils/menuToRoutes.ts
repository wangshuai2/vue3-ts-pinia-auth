import type { IRouteRecord } from '@/types/routes'
import type { RouteRecordRaw } from 'vue-router'
import { resolve } from 'path-browserify'

export const menuToRoutes = (menu: IRouteRecord[], path?: string): RouteRecordRaw[] => {
  const routes: RouteRecordRaw[] = []
  menu?.forEach((menuItem) => {
    const tmpPath = resolve(path || '', menuItem.path)
    console.log(tmpPath)
    const routerItem = {
      path: tmpPath,
      name: menuItem.name,
      component: menuItem.component,
      redirect: menuItem.redirect,
      children: menuItem.children ? menuToRoutes(menuItem.children, tmpPath) : undefined,
      meta: menuItem.meta
    } as RouteRecordRaw
    routes.push(routerItem)
  })

  console.log('routes', routes)
  return routes
}

export /**
 * @description: 生成权限路由
 * @param {IRouteRecord[]} routes
 * @param {rolesType} roles
 * @return {*}  {RouteRecordRaw[]}
 */
const generateAuthRoutes = (
  routes: IRouteRecord[],
  roles: rolesType,
  path?: string
): RouteRecordRaw[] => {
  const authRoutes: RouteRecordRaw[] = []
  routes?.forEach((item: IRouteRecord) => {
    if (!item.meta?.permission?.includes(roles)) return
    const tmpPath = resolve(path || '', item.path)
    const routerItem = {
      path: tmpPath,
      name: item.name,
      component: item.component,
      redirect: item.redirect,
      children: item.children ? generateAuthRoutes(item.children, roles, tmpPath) : undefined,
      meta: item.meta
    } as RouteRecordRaw

    authRoutes.push(routerItem)
  })

  // console.log('authRoutes', authRoutes)
  return authRoutes
}
