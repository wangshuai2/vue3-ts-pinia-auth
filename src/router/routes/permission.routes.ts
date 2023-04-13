import type { RouteRecordRaw } from 'vue-router'
import { CirclePlus } from '@element-plus/icons-vue'
import { shallowRef } from 'vue'

export const PERMISSION_ROUTES: RouteRecordRaw[] = [
  {
    path: '/permission',
    name: 'Permission',
    component: () => import('@/views/permission/index.vue'),
    children: [
      {
        path: 'page1',
        name: 'PermissionPage1',
        component: () => import('@/views/permission/page.vue'),
        meta: {
          title: '页面权限',
          permission: ['admin', 'editor'],
          icon: 'Flash'
        }
      },
      {
        path: 'page2',
        name: 'PermissionPage2',
        component: () => import('@/views/permission/page.vue'),
        meta: {
          title: '页面权限',
          permission: ['admin', 'editor'],
          icon: 'Flash',
          hidden: false
        },
        children: [
          {
            path: 'page2-1',
            name: 'PermissionPage2-1',
            component: () => import('@/views/permission/page.vue'),
            meta: {
              title: '页面权限2-1',
              permission: ['admin', 'editor'],
              icon: 'Flash',
              hidden: false
            }
          },
          {
            path: 'page2-2',
            name: 'PermissionPage2-2',
            component: () => import('@/views/permission/page.vue'),
            meta: {
              title: '页面权限2-2',
              permission: ['admin', 'editor'],
              icon: 'Flash',
              hidden: false
            }
          }
        ]
      },
      {
        path: 'page3',
        name: 'PermissionPage3',
        component: () => import('@/views/permission/page.vue'),
        meta: {
          title: '页面权限',
          permission: ['admin', 'editor'],
          icon: 'Flash',
          hidden: true
        }
      }
    ],
    meta: {
      title: '权限测试页',
      permission: ['admin'],
      icon: 'FaceDizzy'
    }
  },
  {
    path: '/signed',
    name: 'Signed',
    component: () => import('@/views/signed/index.vue'),
    meta: {
      title: '登录后测试页',
      permission: ['admin'],
      icon: shallowRef(CirclePlus)
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
    },
    children: [
      {
        path: '/signed3-1',
        name: 'Signed3-1',
        component: () => import('@/views/signed/index.vue'),
        meta: {
          title: '登录后测试页3-1',
          permission: ['admin']
        }
      }
    ]
  }
]
