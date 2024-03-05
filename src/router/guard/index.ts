import router from '@/router/routers'
import { createPermissionGuard } from './modules/permissionGuard'

// 全局守卫
router.beforeEach(async (to, from, next) => {
    createPermissionGuard(to, from, next)
})

router.afterEach(() => {})
