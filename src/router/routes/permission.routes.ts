import type { IRouteRecord } from '@/types/routes'

export const PERMISSION_ROUTES: IRouteRecord[] = [
  {
    path: '/permission',
    name: 'Permission',
    component: () => import('@/views/permission/index.vue'),
    children: [
      {
        path: 'page',
        name: 'PermissionPage',
        component: () => import('@/views/permission/page.vue'),
        meta: {
          title: '页面权限',
          permission: ['admin', 'editor']
        }
      }
    ],
    meta: {
      title: '权限测试页',
      permission: ['admin']
    }
  },
  {
    path: '/signed',
    name: 'Signed',
    component: () => import('@/views/signed/index.vue'),
    meta: {
      title: '登录后测试页',
      permission: ['admin']
    }
  }
]
