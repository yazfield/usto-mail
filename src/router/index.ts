import { createRouter, createWebHistory } from 'vue-router'
import InboxView from '@/views/InboxView.vue'
import ArchiveView from '@/views/ArchiveView.vue'
import SingleEmailView from '@/views/SingleEmailView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'inbox',
      component: InboxView
    },
    {
      path: '/archive',
      name: 'archive',
      component: ArchiveView
    },
    {
      path: '/emails/:id',
      name: 'singleEmail',
      component: SingleEmailView
    }
  ]
})

export default router
