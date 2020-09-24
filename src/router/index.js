import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@views/Home.vue'
import Time from '@views/Time.vue'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/time',
    name: 'Time',
    component: Time
  },
]

const router = new VueRouter({
  routes
})

export default router
