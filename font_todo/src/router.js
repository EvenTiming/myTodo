import { createRouter, createWebHistory } from 'vue-router'
import MyLogin from './components/MyLogin.vue';
const routes = [
  {
    path: '/login',
    component: MyLogin
  },

]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
