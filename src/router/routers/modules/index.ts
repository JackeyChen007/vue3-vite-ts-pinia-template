import type { RouteRecordRaw } from 'vue-router'
import { PAGE_NOT_FOUND_ROUTE } from './basic'
type Recordable<T = any> = Record<string, T>
// import.meta.glob() 直接引入所有的模块 Vite 独有的功能
const modules = import.meta.glob('./*/*.*', { eager: true })
const routeModuleList: RouteRecordRaw[] = []

// 加入到路由集合中
Object.keys(modules).forEach((key) => {
  const mod = (modules as Recordable)[key].default || {}
  const modList = Array.isArray(mod) ? [...mod] : [mod]
  routeModuleList.push(...modList)
})

const Layout: RouteRecordRaw = {
  path: '/layout',
  component: () => import('@/layouts/default.vue'),
  redirect: '/',
  children: routeModuleList,
}

const CustomLayout: RouteRecordRaw = {
  path: '/custom',
  component: () => import('@/layouts/custom.vue'),
  children: [
    {
      path: '/about',
      name: 'about',
      component: () => import('@/views/about/index.vue'),
    },
  ],
}

// Basic routing without permission
// 未经许可的基本路由
export const basicRoutes = [Layout, CustomLayout, PAGE_NOT_FOUND_ROUTE]
