import store from '@/store'
import type { RouteLocationNormalized, NavigationGuardNext } from 'vue-router'

// 定义全局守卫逻辑函数的类型
type BeforeEachCallback = (to: RouteLocationNormalized, from: RouteLocationNormalized, next: NavigationGuardNext) => void

// 登录状态的白名单路由
const whiteList = ['/login', '/protocol', '/', '/mine', '/paymentNoLogin', '/paymentResultNoLogin']
// 专案有效期无效的黑名单路由
const blackList = ['/hotelList', '/hotelDetail', '/createOrder']
// 定义全局守卫逻辑
export const createPermissionGuard: BeforeEachCallback = async (to, from, next) => {
  const { isLogin } = toRefs(store().user)

  if (isLogin.value) {
    if (to.path === '/login') {
      next({ path: '/' })
    } else {
      next()
    }
  } else {
    if (whiteList.indexOf(to.path) !== -1) {
      next()
    } else {
      next(`/login?redirect=${to.fullPath}`)
    }
  }
}
