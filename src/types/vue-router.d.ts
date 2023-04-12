import 'vue-router'

declare module 'vue-router' {
  interface RouteMeta {
    title: string
    href?: string
    icon?: any
    cache?: boolean
    deepth?: number
    permission?: rolesType[]
    activeMenu?: string
    hidden?: boolean
  }
}
