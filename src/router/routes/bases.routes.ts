import type { RouteRecordRaw } from 'vue-router'

export const BASE_ROUTES: RouteRecordRaw[] = [
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
    component: () => import('@/views/login/index.vue'),
    meta: {
      title: '登录',
      hidden: true
    }
  },
  {
    path: '/404',
    name: 'NotFound',
    component: () => import('@/views/NotFoundView.vue'),
    meta: {
      title: '未找到',
      hidden: true
    }
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
    ],
    meta: {
      title: '测试',
      hidden: true
    }
  }
]
