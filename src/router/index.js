import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Song from '../views/Song.vue' // ✅ Import your song detail component

const router = createRouter({
  history: createWebHistory('/setlist/'),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/song/:id',      // ✅ Dynamic route for song pages
      name: 'Song',
      component: Song
    }
  ]
})

export default router
