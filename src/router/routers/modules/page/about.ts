import type { RouteRecordRaw } from 'vue-router'

export const about: RouteRecordRaw = {
  path: '/about',
  name: 'about',
  component: () => import('@/views/about/index.vue'),
}
export default about
