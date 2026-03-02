import { createRouter, createWebHashHistory } from 'vue-router'
import index from '@/views/index.vue'

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      "path": "/",
      name: "Index",
      component: index
    }
  ],
})

export default router
