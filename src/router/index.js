import Vue from 'vue'
import VueRouter from 'vue-router'
import SearchView from "@/views/SearchView.vue";

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'search',
    component: SearchView
  },
  {
    path: '/:id',
    name: 'profile',
    component: () => import('../views/ProfileView.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  linkActiveClass: "active-link",
  linkExactActiveClass: "exact-active-link",
  routes
})

export default router
