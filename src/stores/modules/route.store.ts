import { StoreEnum } from '@/config/store.enum'
import type { IRouteRecord } from '@/types/routes'
import { generateAuthRoutes } from '@/utils/menuToRoutes'
import { defineStore } from 'pinia'
import { PERMISSION_ROUTES } from '@/router/routes/permission.routes'
import type { RouteRecordRaw } from 'vue-router'

interface IRouteStore {
  isInitAuthRoute: boolean
  routesList: RouteRecordRaw[]
  routesKeepAliveList: string[]
  menuList: IRouteRecord[]
}

export const useRouteStore = defineStore(StoreEnum.ROUTER_STORE, {
  state: (): IRouteStore => ({
    isInitAuthRoute: false,
    routesList: [],
    routesKeepAliveList: [],
    menuList: []
  }),
  getters: {
    /**
     * @description: 获取路由列表
     * @return {*}  {IRouteRecord[]}
     */
    getRoutesList(): RouteRecordRaw[] {
      return this.routesList
    },
    /**
     * @description: 获取路由缓存列表
     * @return {*}  {string[]}
     */
    getRoutesKeepAliveList(): string[] {
      return this.routesKeepAliveList
    }
  },
  actions: {
    /**
     * @description: 设置路由列表
     * @param {roles[]} rolesType
     */
    generateRoutes(roles: rolesType) {
      const authRoutes: RouteRecordRaw[] = generateAuthRoutes(PERMISSION_ROUTES, roles)
      this.routesList = authRoutes
      this.menuList = PERMISSION_ROUTES
      this.isInitAuthRoute = true
    },
    routerReset() {
      this.routesList = []
      this.menuList = []
      this.isInitAuthRoute = false
    }
  }
})
