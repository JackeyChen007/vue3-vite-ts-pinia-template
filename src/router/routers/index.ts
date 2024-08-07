import type { RouteRecordRaw } from 'vue-router'
import { createRouter, createWebHashHistory } from 'vue-router'
import { basicRoutes } from './modules'

// app router
// 创建一个可以被 Vue 应用程序使用的路由实例
const router = createRouter({
  // 创建一个 hash 历史记录。
  history: createWebHashHistory(),
  // 应该添加到路由的初始路由列表。
  routes: basicRoutes as unknown as RouteRecordRaw[],
  // 是否应该禁止尾部斜杠。默认为假
  strict: false,
  // 创建路由时使用的滚动行为。
  scrollBehavior: () => ({ left: 0, top: 0 }),
})

export default router
