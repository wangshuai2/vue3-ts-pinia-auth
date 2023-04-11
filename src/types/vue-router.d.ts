import type { DefineComponent } from 'vue'
import 'vue-router'

declare module 'vue-router' {
  interface RouteMeta {
    title: string
    href?: string
    icon?: string | DefineComponent
    cache?: boolean
    deepth?: number
    permission?: rolesType[]
    activeMenu?: string
    hidden?: boolean
  }
}
