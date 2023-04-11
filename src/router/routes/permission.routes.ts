import type { RouteRecordRaw } from 'vue-router'
import { CirclePlus } from '@element-plus/icons-vue'

export const PERMISSION_ROUTES: RouteRecordRaw[] = [
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
          permission: ['admin', 'editor'],
          icon: 'virtual:Flash'
        }
      }
    ],
    meta: {
      title: '权限测试页',
      permission: ['admin'],
      icon: 'virtual:Flash'
    }
  },
  {
    path: '/signed',
    name: 'Signed',
    component: () => import('@/views/signed/index.vue'),
    meta: {
      title: '登录后测试页',
      permission: ['admin'],
      icon: CirclePlus
    }
  },
  {
    path: '/signed2',
    name: 'Signed2',
    component: () => import('@/views/signed/index.vue'),
    meta: {
      title: '登录后测试页2',
      permission: ['editor']
    }
  },
  {
    path: '/signed3',
    name: 'Signed3',
    component: () => import('@/views/signed/index.vue'),
    meta: {
      title: '登录后测试页3',
      permission: ['admin']
    }
  }
]
