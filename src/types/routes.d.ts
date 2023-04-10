import type { Component } from 'vue'

export interface IRouteRecord {
  path: string
  name: string
  component?: Component | undefined
  redirect?: string
  children?: IRouteRecord[]
  meta?: IRouteMeta
}

export interface IRouteMeta {
  title: string
  icon?: string
  cache?: boolean
  deepth?: number
  permission?: rolesType[]
  activeMenu?: string
  hidden?: boolean
  href?: string
}
