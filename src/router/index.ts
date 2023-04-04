import { createRouter, createWebHistory } from 'vue-router'
import { UserStore } from '../stores/user'

import Home from '../components/home/Home.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/memory-match',
      name: 'MemoryMatch',
      component: () => import('@/components/memorymatch/MemoryMatch.vue'),
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/word-mystery',
      name: 'WordMystery',
      component: () => import('@/components/wordmystery/Wordmystery.vue'),
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/login',
      name: 'login',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('@/components/auth/Login.vue')
    },
    {
      path: '/register',
      name: 'register',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('@/components/auth/Register.vue')
    }
  ]
})

router.beforeEach(async (to, from, next) => {
  const store = UserStore()
  if (to.meta.requiresAuth) {
    if (!store.isAuthenticated) {
      next('/login')
    }
  } else {
    next()
  }
  next()
})

export default router
