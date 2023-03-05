import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import UserView from '../views/UserView.vue'
import AlbumView from '../views/AlbumView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Users',
      component: HomeView
    },
    {
      path: '/user/:userId',
      name: 'user',
      component: UserView
    },
    {
      path: '/user/:userId/albums/:albumId',
      name: 'album',
      component: AlbumView,
    }
  ]
})

export default router
