import type { IRouteRecord } from '@/types/routes'

export const BASE_ROUTES: IRouteRecord[] = [
  {
    path: '/',
    name: 'Root',
    component: () => import('@/layout/index.vue'),
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
  },
  {
    path: '/test',
    name: 'Test',
    component: () => import('@/views/NotFoundView.vue'),
    children: [
      {
        path: 'test1',
        name: 'Test1',
        component: () => import('@/views/NotFoundView.vue')
      }
    ]
  }
]
