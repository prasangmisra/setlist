import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import Song from '../views/Song.vue';

const routes = [
  { path: '/', name: 'Home', component: Home },
  { path: '/song/:id', name: 'Song', component: Song, props: true },
];

export default createRouter({
  history: createWebHistory(),
  routes,
});
