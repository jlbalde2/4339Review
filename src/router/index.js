import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import userForm from '../views/userForm.vue'
import ChartPage from '../views/ChartPage.vue'
import ApiPage from '../views/ApiPage.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/charts',
      name: 'charts',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/ChartPage.vue')
    },
    {
    path:'/form',
    name: 'form',
    component: () => import('../views/userForm.vue')
    },
    {
    path: '/api',
    name: 'apis',
    component: ApiPage 
    }
  ]
})

export default router
