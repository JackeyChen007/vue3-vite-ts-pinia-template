import type { RouteRecordRaw } from 'vue-router'

export const home: RouteRecordRaw = {
  path: '/',
  name: 'home',
  component: () => import('@/views/home/index.vue'),
}
export default home
