import { createRouter, createWebHistory } from 'vue-router'
import Library from '../views/Library.vue'
import Add from '../views/Add.vue'
import Favorites from '../views/Favorites.vue'

const routes = [
  {
    path: '/',
    redirect: '/library'
  },
  {
    path: '/library',
    name: 'Library',
    component: Library
  },
  {
    path: '/add',
    name: 'Add',
    component: Add
  },
  {
    path: '/favorites',
    name: 'Favorites',
    component: Favorites
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router