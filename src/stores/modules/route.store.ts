import { StoreEnum } from '@/config/store.enum'
import { generateAuthRoutes } from '@/utils/menuToRoutes'
import { defineStore } from 'pinia'
import { PERMISSION_ROUTES } from '@/router/routes/permission.routes'
import type { RouteRecordRaw } from 'vue-router'
import { router } from '@/router'

interface IRouteStore {
  isInitAuthRoute: boolean
  routesList: RouteRecordRaw[]
  routesKeepAliveList: string[]
}

export const useRouteStore = defineStore(StoreEnum.ROUTER_STORE, {
  state: (): IRouteStore => ({
    isInitAuthRoute: false,
    routesList: [],
    routesKeepAliveList: []
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

      authRoutes?.forEach((item) => {
        router.addRoute('Root', item)
      })

      // console.log('router.getRoutes()', router.getRoutes())
      this.isInitAuthRoute = true
    },
    routerReset() {
      this.routesList = []
      this.isInitAuthRoute = false
    }
  }
})
