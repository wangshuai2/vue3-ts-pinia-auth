import type { IRouteRecord } from '@/types/routes'
import type { RouteRecordRaw } from 'vue-router'
import path from 'path'

export const menuToRoutes = (menu: IRouteRecord[]): RouteRecordRaw[] => {
  const routes: RouteRecordRaw[] = []
  menu?.forEach((menuItem) => {
    const routerItem = {
      path: menuItem.path,
      name: menuItem.name,
      component: menuItem.component,
      redirect: menuItem.redirect,
      children: menuItem.children ? menuToRoutes(menuItem.children) : undefined,
      meta: menuItem.meta
    } as RouteRecordRaw
    routes.push(routerItem)
  })

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
  console.log('routes', routes, 'roles', roles, 'path', path)
  const authRoutes: RouteRecordRaw[] = []
  routes?.forEach((item: IRouteRecord) => {
    console.log('item.meta?.permission?.includes(roles)', item.meta?.permission?.includes(roles))
    console.log('roles', roles)
    if (!item.meta?.permission?.includes(roles)) return
    const tmpPath = path.resolve(path, item.path)
    console.log('tmpPath', tmpPath)
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

  console.log('authRoutes', authRoutes)
  return authRoutes
}
