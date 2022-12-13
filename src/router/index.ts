import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import LoginApp from '../views/LoginApp.vue'
import MainOptions from '../views/MainOptions.vue'

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'LoginApp',
    component: LoginApp
  },
  {
    path: '/MainOptions',
    name: 'MainOptions',
    component: MainOptions
  }
]

const router = new VueRouter({
  routes
})

export default router
