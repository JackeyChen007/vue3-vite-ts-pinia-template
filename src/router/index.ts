import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/home/index.vue'

export const Layout = () => import('@/layout/index.vue');

const router = createRouter({
  // history: createWebHistory(import.meta.env.BASE_URL),
  history: createWebHashHistory(),
  routes: [
    {
      path: '/layout',
      component: Layout,
      redirect: '/',
      children: [
        {
          path: '/',
          component: HomeView,
          name: 'layout',
          meta: { title: '首页', icon: 'House', affix: true }
        },
        {
          path: '/about',
          name: 'about',
          // route level code-splitting
          // this generates a separate chunk (About.[hash].js) for this route
          // which is lazy-loaded when the route is visited.
          component: () => import('../views/about/index.vue')
        }
      ]
    },
    {
      path: '/login',
      component: () => import('@/views/login/index.vue'),
    },
  ]
})

export default router
