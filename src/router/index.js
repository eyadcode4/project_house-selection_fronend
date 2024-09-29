import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },

    {
      path: '/consult',
      name: 'consult',
      component: () => import('../views/ConsultView.vue')
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('../views/LoginView.vue')
    },
  
      
    {
      path: '/yourhouse',
      name: 'yourhouse',
      component: () => import('../views/YourHouseView.vue')
    },
    {
    path: '/yourhouse1',
      name: 'yourhouse1',
      component: () => import('../views/YourHouse1View.vue')
    },
    {
      path: '/yourhouse2',
        name: 'yourhouse2',
        component: () => import('../views/YourHouse2View.vue')
      },
    {
      path: '/adminView',
      name: 'adminView',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AdminView.vue')
    }
  ]
})

export default router
