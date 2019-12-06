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
    component: () => import(/* webpackChunkName: "bundle.base" */ '../views/home-page')
  },
  {
    path: '/about-me',
    name: 'about-me',
    component: () => import(/* webpackChunkName: "about" */ '../views/about-me')
  },
  {
    path: '/contact',
    name: 'contact',
    component: () => import(/* webpackChunkName: "bundle.base" */ '../views/contact-page')
  },
  {
    path: '/cv',
    name: 'cv',
    props: true,
    component: () => import(/* webpackChunkName: "bundle.base" */ '../views/cv-page')
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
