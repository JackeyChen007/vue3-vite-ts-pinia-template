import type { RouteRecordRaw } from 'vue-router'

export const text: RouteRecordRaw = {
  path: '/text',
  name: 'text',
  component: () => import('@/views/text/index.vue'),
}
export default text
