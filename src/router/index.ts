import { createRouter, createWebHistory } from 'vue-router'
import { routes } from 'vue-router/auto-routes'
// import HomeView from '../views/HomeView.vue'
import { setupLayouts } from 'virtual:generated-layouts'
import lhome from '@/pages/main/index.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    ...setupLayouts(routes),
    {
      path: '/home',
      component: () => import('../pages/main/pages1.vue'),
      meta: { layout: 'lhome' }, // 指定 layout
    },
  ],
})
const obj: Record<string, any> = {
  // lhome: () => import('../pages/main/index.vue'),
  lhome,
}
router.beforeEach((to, from, next) => {
  console.log(to)
  to.meta.routerview = obj[to.meta.layout as string]
  const { title } = to.meta
  document.title = (title as string) || '默认标题'
  return next()
})
export default router
