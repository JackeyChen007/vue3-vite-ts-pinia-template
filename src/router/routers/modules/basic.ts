import { createRouter, createWebHashHistory } from 'vue-router'
import type { RouteRecordRaw, RouteMeta } from 'vue-router';

import Home from '@/views/home/index.vue'

export const Layout = () => import('@/layout/index.vue')

export const basicRoutes:RouteRecordRaw[] = [
  {
    path: '/layout',
    component: Layout,
    redirect: '/',
    children: [
      {
        path: '/',
        component: Home,
        name: 'home',
        meta: { title: '首页', icon: 'House', affix: true },
      },
      {
        path: '/mine',
        name: 'mine',
        component: () => import('@/views/mine/index.vue'),
      },
      {
        path: '/orderlist',
        name: 'orderlist',
        component: () => import('@/views/order/list/index.vue'),
      },
      {
        path: '/orderDetail',
        name: 'orderDetail',
        component: () => import('@/views/order/detail/index.vue'),
      },
      {
        path: '/evaluate',
        name: 'evaluate',
        component: () => import('@/views/order/evaluate/index.vue'),
      },
      {
        path: '/createOrder',
        name: 'createOrder',
        component: () => import('@/views/order/create/index.vue'),
      },
      {
        path: '/hotelList',
        name: 'hotelList',
        component: () => import('@/views/hotel/list/index.vue'),
      },
      {
        path: '/hotelDetail',
        name: 'hotelDetail',
        component: () => import('@/views/hotel/detail/index.vue'),
      },
      {
        path: '/payment',
        name: 'payment',
        component: () => import('@/views/payment/index.vue'),
      },
    ],
  },
  {
    path: '/login',
    component: () => import('@/views/login/default/index.vue'),
  },
  {
    path: '/protocol',
    component: () => import('@/views/login/protocol/index.vue'),
  },
]
