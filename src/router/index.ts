import { createRouter, createWebHistory } from 'vue-router'
import { routes } from 'vue-router/auto-routes'
// import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
 /*  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    }
  ], */
  routes
})
router.beforeEach((to,from, next)=>{
  console.log(to);
  const {title} = to.meta
  document.title = title as string || '默认标题'
  return next()
  
})
export default router
