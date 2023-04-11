import type { IRouteRecord } from '@/types/routes'

export const BASE_ROUTES: IRouteRecord[] = [
  {
    path: '/',
    name: 'Root',
    component: () => import('@/views/HomeView.vue'),
    meta: {
      title: '首页',
      hidden: true
    }
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('@/views/login/index.vue')
  },
  {
    path: '/404',
    name: 'NotFound',
    component: () => import('@/views/NotFoundView.vue')
  }
]
