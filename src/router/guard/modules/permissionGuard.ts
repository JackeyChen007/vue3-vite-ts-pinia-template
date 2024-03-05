import useStore from '@/store'
import type { Router, RouteRecordRaw } from 'vue-router'
import { showFailToast } from 'vant'
import type { RouteLocationNormalized, NavigationGuardNext } from 'vue-router'

// 定义全局守卫逻辑函数的类型
type BeforeEachCallback = (to: RouteLocationNormalized, from: RouteLocationNormalized, next: NavigationGuardNext) => void

// 白名单路由
const whiteList = ['/login', '/protocol', '/home', '/mine']

// 定义全局守卫逻辑
export const createPermissionGuard: BeforeEachCallback = async (to, from, next) => {
  const { user } = useStore()
  const hasToken = user.tokenValue

  if (hasToken) {
    if (to.path === '/login') {
      next({ path: '/' })
    } else {
      const hasGetUserInfo = user.roleCodeList.length > 0
      if (hasGetUserInfo) {
        if (to.matched.length === 0) {
          from.name ? next({ name: from.name }) : next('/401')
        } else {
          next()
        }
      } else {
        try {
          await user.getUserInfo()
          next({ ...to, replace: true })
        } catch (error) {
          await user.resetToken()
          showFailToast('错误：' + (error || 'Has Error'))
          next(`/login?redirect=${to.path}`)
        }
      }
    }
  } else {
    if (whiteList.indexOf(to.path) !== -1) {
      next()
    } else {
      next(`/login?redirect=${to.path}`)
    }
  }
}
