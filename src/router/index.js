import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: 'home'
  },
  {
    path: '/home',
    name: 'home',
    component: () => import(/* webpackChunkName: "base-bundle" */ '../views/home-page')
  },
  {
    path: '/about-vue',
    name: 'about-vue',
    component: () => import(/* webpackChunkName: "about" */ '../views/about-vue.vue')
  },
  {
    path: '/about-me',
    name: 'about-me',
    component: () => import(/* webpackChunkName: "about" */ '../views/about-me')
  },
  {
    path: '/contact',
    name: 'contact',
    component: () => import(/* webpackChunkName: "base-bundle" */ '../views/contact-page')
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
