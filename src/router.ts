import { createRouter, createWebHistory } from 'vue-router';
import MainLayout from './layouts/MainLayout.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import(MainLayout),
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('./components/HelloWorld.vue'),
  },
  // Add more routes as needed
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
