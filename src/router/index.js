import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '@/views/Index/index.vue'
import My from '@/views/My/index.vue'

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/my',
      name: 'my',
      component: My
    }
  ]
})

export default router
