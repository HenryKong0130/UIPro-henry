import { createRouter, createWebHistory } from 'vue-router'
import  IconView from '../views/IconView.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Icon',
      component: IconView
    },
    {
      path: '/button',
      name: 'Button',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/ButtonView.vue')
    },
    {
      path: '/card',
      name: 'card',
      component: () => import('../views/CardView.vue')
    },
    {
      path: '/dialog',
      name: 'dialog',
      component: () => import('../views/DialogView.vue')
    },
    {
      path: '/collapse',
      name: 'collapse',
      component: () => import('../views/CollapseView.vue')
    },
    {
      path: '/pager',
      name: 'pager',
      component: () => import('../views/PagerView.vue')
    },
    {
      path: '/tooltip',
      name: 'tooltip',
      component: () => import('../views/TooltipView.vue')
    },
    {
      path: '/dropdown',
      name: 'dropdown',
      component: () => import('../views/DropdownView.vue')
    }
  ],
  linkActiveClass: 'active'
})

export default router
